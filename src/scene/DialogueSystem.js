// Dialogue System for L'Isola degli Spiriti
class DialogueSystem {
    constructor(scene) {
        this.scene = scene;
        this.dialogueBox = null;
        this.nameText = null;
        this.messageText = null;
        this.continueText = null;
        this.choiceButtons = [];
        this.currentDialogue = null;
        this.currentIndex = 0;
        this.isActive = false;
        this.typewriterActive = false;
        this.skipKey = null;
    }
    
    create() {
        // Create dialogue UI elements (initially hidden)
        this.dialogueBox = this.scene.add.rectangle(
            this.scene.cameras.main.width / 2,
            this.scene.cameras.main.height - 120,
            this.scene.cameras.main.width - 40,
            200,
            0x000000,
            0.8
        ).setVisible(false).setDepth(1000);
        
        this.nameText = this.scene.add.text(
            50, this.scene.cameras.main.height - 200,
            '', 
            { fontSize: '24px', fill: '#FFD700', fontFamily: 'Arial' }
        ).setVisible(false).setDepth(1001);
        
        this.messageText = this.scene.add.text(
            50, this.scene.cameras.main.height - 160,
            '', 
            { 
                fontSize: '18px', 
                fill: '#FFFFFF', 
                fontFamily: 'Arial',
                wordWrap: { width: this.scene.cameras.main.width - 100 }
            }
        ).setVisible(false).setDepth(1001);
        
        this.continueText = this.scene.add.text(
            this.scene.cameras.main.width - 150,
            this.scene.cameras.main.height - 40,
            'Press SPACE to continue',
            { fontSize: '14px', fill: '#CCCCCC', fontFamily: 'Arial' }
        ).setVisible(false).setDepth(1001);
        
        // Add input handling
        this.skipKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }
    
    // Start dialogue with an NPC
    startDialogue(dialogueData) {
        this.currentDialogue = dialogueData;
        this.currentIndex = 0;
        this.isActive = true;
        window.gameManager.gameState.dialogueActive = true;
        
        this.showDialogueBox();
        this.displayCurrentMessage();
    }
    
    // Show dialogue UI
    showDialogueBox() {
        this.dialogueBox.setVisible(true);
        this.nameText.setVisible(true);
        this.messageText.setVisible(true);
        this.continueText.setVisible(true);
    }
    
    // Hide dialogue UI
    hideDialogueBox() {
        this.dialogueBox.setVisible(false);
        this.nameText.setVisible(false);
        this.messageText.setVisible(false);
        this.continueText.setVisible(false);
        this.clearChoices();
    }
    
    // Display current message with typewriter effect
    displayCurrentMessage() {
        const message = this.currentDialogue.messages[this.currentIndex];
        this.nameText.setText(message.speaker);
        
        // Typewriter effect
        this.messageText.setText('');
        this.typewriterActive = true;
        
        let charIndex = 0;
        const typewriterTimer = this.scene.time.addEvent({
            delay: 30,
            repeat: message.text.length - 1,
            callback: () => {
                this.messageText.text += message.text[charIndex];
                charIndex++;
                
                if (charIndex >= message.text.length) {
                    this.typewriterActive = false;
                    this.showContinueOrChoices();
                }
            }
        });
    }
    
    // Show continue prompt or choices
    showContinueOrChoices() {
        const message = this.currentDialogue.messages[this.currentIndex];
        
        if (message.choices && message.choices.length > 0) {
            this.continueText.setVisible(false);
            this.showChoices(message.choices);
        } else {
            this.continueText.setVisible(true);
        }
    }
    
    // Show dialogue choices
    showChoices(choices) {
        const startY = this.scene.cameras.main.height - 100;
        
        choices.forEach((choice, index) => {
            const button = this.scene.add.text(
                60,
                startY + (index * 25),
                `${index + 1}. ${choice.text}`,
                { fontSize: '16px', fill: '#FFFF00', fontFamily: 'Arial' }
            ).setDepth(1001).setInteractive();
            
            button.on('pointerdown', () => this.selectChoice(choice));
            
            // Add keyboard number selection
            const numberKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes[`DIGIT_${index + 1}`]);
            numberKey.on('down', () => this.selectChoice(choice));
            
            this.choiceButtons.push(button);
        });
    }
    
    // Select a dialogue choice
    selectChoice(choice) {
        this.clearChoices();
        
        // Execute choice action if any
        if (choice.action) {
            this.executeChoiceAction(choice.action);
        }
        
        // Continue to next dialogue or end
        if (choice.nextDialogue) {
            this.currentDialogue = choice.nextDialogue;
            this.currentIndex = 0;
            this.displayCurrentMessage();
        } else {
            this.endDialogue();
        }
    }
    
    // Execute choice actions
    executeChoiceAction(action) {
        switch (action.type) {
            case 'grantAbility':
                window.gameManager.grantAbility(action.element);
                break;
            case 'addQuest':
                window.gameManager.addQuest(action.quest);
                break;
            case 'unlockZone':
                window.gameManager.unlockZone(action.zone);
                break;
            case 'giveItem':
                window.gameManager.addItem(action.item);
                break;
        }
    }
    
    // Clear choice buttons
    clearChoices() {
        this.choiceButtons.forEach(button => button.destroy());
        this.choiceButtons = [];
    }
    
    // Advance to next message
    nextMessage() {
        if (this.typewriterActive) {
            // Skip typewriter effect
            this.scene.time.removeAllEvents();
            const message = this.currentDialogue.messages[this.currentIndex];
            this.messageText.setText(message.text);
            this.typewriterActive = false;
            this.showContinueOrChoices();
            return;
        }
        
        if (this.currentIndex < this.currentDialogue.messages.length - 1) {
            this.currentIndex++;
            this.displayCurrentMessage();
        } else {
            this.endDialogue();
        }
    }
    
    // End dialogue
    endDialogue() {
        this.hideDialogueBox();
        this.isActive = false;
        window.gameManager.gameState.dialogueActive = false;
        this.currentDialogue = null;
    }
    
    // Update (called every frame)
    update() {
        if (this.isActive && Phaser.Input.Keyboard.JustDown(this.skipKey)) {
            const message = this.currentDialogue.messages[this.currentIndex];
            if (message.choices && message.choices.length > 0 && !this.typewriterActive) {
                // Don't advance if there are choices to make
                return;
            }
            this.nextMessage();
        }
    }
}
