// Enhanced MapScene for L'Isola degli Spiriti

class MapScene extends Phaser.Scene {
    constructor() {
        super('MapScene');
        this.player = null;
        this.cursors = null;
        this.wasd = null;
        this.moveSpeed = 200;
        this.currentZone = 'hub';
        this.npcs = [];
        this.items = [];
        this.portals = [];
        this.enemies = [];
        this.dialogueSystem = null;
        this.ui = {};
        this.interactKey = null;
        this.menuKey = null;
        this.nearbyInteractables = [];
    }

    create() {
        // Initialize dialogue system
        this.dialogueSystem = new DialogueSystem(this);
        this.dialogueSystem.create();
        
        // Load current zone
        this.loadZone(window.gameManager.playerData.currentZone || 'hub');
        
        // Create player
        this.createPlayer();
        
        // Create UI
        this.createUI();
        
        // Setup input
        this.setupInput();
        
        // Start intro if first time playing
        if (!window.gameManager.playerData.gameFlags.introCompleted) {
            this.startIntroSequence();
        }
    }
    
    loadZone(zoneKey) {
        this.currentZone = zoneKey;
        const zoneData = window.ZoneData[zoneKey];
        
        if (!zoneData) {
            console.error(`Zone ${zoneKey} not found!`);
            return;
        }
        
        // Clear existing objects
        this.clearZone();
        
        // Set background
        this.add.rectangle(0, 0, zoneData.layout.width, zoneData.layout.height, zoneData.backgroundColor).setOrigin(0, 0);
        
        // Create zone terrain
        this.createZoneTerrain(zoneData);
        
        // Load NPCs
        this.loadNPCs(zoneData);
        
        // Load items
        this.loadItems(zoneData);
        
        // Load portals
        this.loadPortals(zoneData);
        
        // Load enemies
        this.loadEnemies(zoneData);
        
        // Update UI
        this.updateUI();
    }
    
    createZoneTerrain(zoneData) {
        // Create simple terrain based on zone colors
        const colors = zoneData.tilesetColors;
        
        // Add ground pattern
        for (let x = 0; x < zoneData.layout.width; x += 64) {
            for (let y = 0; y < zoneData.layout.height; y += 64) {
                // Vary terrain slightly
                const variation = Math.random() * 0.3;
                const terrainColor = this.adjustColor(colors.ground || zoneData.backgroundColor, variation);
                
                this.add.rectangle(x + 32, y + 32, 64, 64, terrainColor, 0.3).setOrigin(0.5);
            }
        }
        
        // Add special areas
        zoneData.layout.specialAreas.forEach(area => {
            const areaColor = this.getSpecialAreaColor(area.type);
            this.add.circle(area.x, area.y, area.radius, areaColor, 0.5);
            
            // Add label
            this.add.text(area.x, area.y - area.radius - 20, area.type.replace('_', ' '), {
                fontSize: '16px',
                fill: '#FFFFFF',
                backgroundColor: '#000000',
                padding: { x: 5, y: 2 }
            }).setOrigin(0.5);
        });
    }
    
    getSpecialAreaColor(type) {
        const colors = {
            altar: 0xFFD700,
            garden: 0x90EE90,
            library: 0x8A2BE2,
            crystal_cave: 0x9932CC,
            stone_maze: 0x696969,
            flowing_maze: 0x00BFFF,
            crystal_pool: 0x48D1CC,
            lava_pools: 0xFF4500,
            ember_fields: 0xFFD700,
            floating_platforms: 0xF0F8FF,
            wind_temple: 0xE0FFFF,
            light_prisms: 0xFFFFFF,
            radiant_tree: 0xFFD700,
            void_portal: 0x2F2F2F,
            shadow_maze: 0x4B0082,
            time_rift: 0x9966CC,
            chronos_shrine: 0xCC99FF,
            dream_pool: 0xDA70D6,
            memory_garden: 0xDDA0DD
        };
        return colors[type] || 0xFFFFFF;
    }
    
    adjustColor(color, variation) {
        // Simple color variation
        const r = (color >> 16) & 0xFF;
        const g = (color >> 8) & 0xFF;
        const b = color & 0xFF;
        
        const newR = Math.max(0, Math.min(255, r + (variation * 50 - 25)));
        const newG = Math.max(0, Math.min(255, g + (variation * 50 - 25)));
        const newB = Math.max(0, Math.min(255, b + (variation * 50 - 25)));
        
        return (newR << 16) | (newG << 8) | newB;
    }
    
    loadNPCs(zoneData) {
        zoneData.npcs.forEach(npcKey => {
            const npcData = window.NPCData[npcKey];
            if (npcData && npcData.zone === this.currentZone) {
                const npc = this.add.circle(npcData.position.x, npcData.position.y, 25, 0x00FF00);
                npc.setInteractive();
                npc.npcData = npcData;
                
                // Add NPC label
                const label = this.add.text(npcData.position.x, npcData.position.y - 40, npcData.name, {
                    fontSize: '14px',
                    fill: '#FFFF00',
                    backgroundColor: '#000000',
                    padding: { x: 3, y: 1 }
                }).setOrigin(0.5);
                
                npc.label = label;
                this.npcs.push(npc);
            }
        });
    }
    
    loadItems(zoneData) {
        zoneData.items.forEach(itemData => {
            if (!itemData.collected) {
                const item = this.add.star(itemData.x, itemData.y, 5, 10, 15, 0xFFD700);
                item.setInteractive();
                item.itemData = itemData;
                
                // Add sparkle effect
                this.tweens.add({
                    targets: item,
                    scaleX: 1.2,
                    scaleY: 1.2,
                    duration: 1000,
                    yoyo: true,
                    repeat: -1
                });
                
                this.items.push(item);
            }
        });
    }
    
    loadPortals(zoneData) {
        zoneData.portals.forEach(portalData => {
            const isUnlocked = window.gameManager.zones[portalData.to]?.unlocked || false;
            const portalColor = isUnlocked ? 0x00FFFF : 0x808080;
            
            const portal = this.add.circle(portalData.x, portalData.y, 30, portalColor, 0.7);
            portal.setInteractive();
            portal.portalData = portalData;
            
            // Add portal effect if unlocked
            if (isUnlocked) {
                this.tweens.add({
                    targets: portal,
                    alpha: 0.3,
                    duration: 1500,
                    yoyo: true,
                    repeat: -1
                });
            }
            
            // Add portal label
            const targetZone = window.ZoneData[portalData.to];
            const label = this.add.text(portalData.x, portalData.y + 40, targetZone?.name || portalData.to, {
                fontSize: '12px',
                fill: isUnlocked ? '#00FFFF' : '#808080',
                backgroundColor: '#000000',
                padding: { x: 3, y: 1 }
            }).setOrigin(0.5);
            
            portal.label = label;
            this.portals.push(portal);
        });
    }
    
    loadEnemies(zoneData) {
        if (zoneData.enemies) {
            zoneData.enemies.forEach(enemyData => {
                const enemy = this.add.triangle(enemyData.x, enemyData.y, 0, 20, 15, -10, -15, -10, 0xFF0000);
                enemy.setInteractive();
                enemy.enemyData = enemyData;
                
                // Simple enemy AI - patrol movement
                this.tweens.add({
                    targets: enemy,
                    x: enemyData.x + 100,
                    duration: 3000,
                    yoyo: true,
                    repeat: -1,
                    ease: 'Sine.easeInOut'
                });
                
                this.enemies.push(enemy);
            });
        }
    }
    
    createPlayer() {
        const playerPos = window.gameManager.playerData.position;
        this.player = this.add.circle(playerPos.x, playerPos.y, 20, 0x0080FF);
        this.physics.add.existing(this.player);
        this.player.body.setCollideWorldBounds(true);
        
        // Add player glow effect
        this.tweens.add({
            targets: this.player,
            scaleX: 1.1,
            scaleY: 1.1,
            duration: 800,
            yoyo: true,
            repeat: -1
        });
    }
    
    createUI() {
        // Health bar
        this.ui.healthBar = this.add.rectangle(100, 30, 200, 20, 0x000000, 0.5);
        this.ui.healthFill = this.add.rectangle(50, 30, 0, 16, 0x00FF00).setOrigin(0, 0.5);
        
        // Mana bar  
        this.ui.manaBar = this.add.rectangle(100, 55, 200, 20, 0x000000, 0.5);
        this.ui.manaFill = this.add.rectangle(50, 55, 0, 16, 0x0080FF).setOrigin(0, 0.5);
        
        // Zone name
        this.ui.zoneName = this.add.text(this.cameras.main.width / 2, 30, '', {
            fontSize: '28px',
            fill: '#FFFFFF',
            backgroundColor: '#000000',
            padding: { x: 10, y: 5 }
        }).setOrigin(0.5);
        
        // Instructions
        this.ui.instructions = this.add.text(10, this.cameras.main.height - 60, 
            'WASD/Arrows: Move | SPACE: Interact | M: Menu | ESC: Save Game', {
            fontSize: '14px',
            fill: '#FFFFFF',
            backgroundColor: '#000000',
            padding: { x: 5, y: 3 }
        });
        
        // Interaction prompt
        this.ui.interactPrompt = this.add.text(this.cameras.main.width / 2, this.cameras.main.height - 100, '', {
            fontSize: '18px',
            fill: '#FFFF00',
            backgroundColor: '#000000',
            padding: { x: 8, y: 4 }
        }).setOrigin(0.5).setVisible(false);
        
        // Set UI depth
        Object.values(this.ui).forEach(element => element.setDepth(500));
    }
    
    setupInput() {
        this.cursors = this.input.keyboard.createCursorKeys();
        this.wasd = {
            up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
            down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
            left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
            right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
        };
        
        this.interactKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.menuKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
        this.saveKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
        
        this.interactKey.on('down', () => this.handleInteraction());
        this.menuKey.on('down', () => this.toggleMenu());
        this.saveKey.on('down', () => this.saveGame());
    }
    
    startIntroSequence() {
        // Set game flag
        window.gameManager.playerData.gameFlags.introCompleted = true;
        
        // Show intro text
        const introText = this.add.text(this.cameras.main.width / 2, this.cameras.main.height / 2,
            'Welcome to L\'Isola degli Spiriti\n\nThe elemental spirits await your arrival...\n\nFind the Elder Sage to begin your journey.', {
            fontSize: '24px',
            fill: '#FFFFFF',
            backgroundColor: '#000000',
            padding: { x: 20, y: 15 },
            align: 'center'
        }).setOrigin(0.5).setDepth(1000);
        
        // Fade out intro after delay
        this.time.delayedCall(4000, () => {
            this.tweens.add({
                targets: introText,
                alpha: 0,
                duration: 1000,
                onComplete: () => introText.destroy()
            });
        });
    }
    
    update() {
        // Skip update if dialogue is active
        if (window.gameManager.gameState.dialogueActive) {
            this.dialogueSystem.update();
            return;
        }
        
        // Player movement
        this.handlePlayerMovement();
        
        // Check interactions
        this.checkInteractions();
        
        // Update UI
        this.updateUI();
        
        // Update dialogue system
        this.dialogueSystem.update();
    }
    
    handlePlayerMovement() {
        this.player.body.setVelocity(0);

        if (this.cursors.left.isDown || this.wasd.left.isDown) {
            this.player.body.setVelocityX(-this.moveSpeed);
        } else if (this.cursors.right.isDown || this.wasd.right.isDown) {
            this.player.body.setVelocityX(this.moveSpeed);
        }

        if (this.cursors.up.isDown || this.wasd.up.isDown) {
            this.player.body.setVelocityY(-this.moveSpeed);
        } else if (this.cursors.down.isDown || this.wasd.down.isDown) {
            this.player.body.setVelocityY(this.moveSpeed);
        }
        
        // Update player position in game manager
        window.gameManager.updatePlayer({
            position: { x: this.player.x, y: this.player.y }
        });
    }
    
    checkInteractions() {
        this.nearbyInteractables = [];
        const interactionDistance = 60;
        
        // Check NPCs
        this.npcs.forEach(npc => {
            const distance = Phaser.Math.Distance.Between(this.player.x, this.player.y, npc.x, npc.y);
            if (distance < interactionDistance) {
                this.nearbyInteractables.push({ type: 'npc', object: npc });
            }
        });
        
        // Check items
        this.items.forEach(item => {
            const distance = Phaser.Math.Distance.Between(this.player.x, this.player.y, item.x, item.y);
            if (distance < interactionDistance) {
                this.nearbyInteractables.push({ type: 'item', object: item });
            }
        });
        
        // Check portals
        this.portals.forEach(portal => {
            const distance = Phaser.Math.Distance.Between(this.player.x, this.player.y, portal.x, portal.y);
            if (distance < interactionDistance) {
                const isUnlocked = window.gameManager.zones[portal.portalData.to]?.unlocked || false;
                if (isUnlocked) {
                    this.nearbyInteractables.push({ type: 'portal', object: portal });
                }
            }
        });
        
        // Update interaction prompt
        this.updateInteractionPrompt();
    }
    
    updateInteractionPrompt() {
        if (this.nearbyInteractables.length > 0) {
            const interactable = this.nearbyInteractables[0];
            let promptText = '';
            
            switch (interactable.type) {
                case 'npc':
                    promptText = `Press SPACE to talk to ${interactable.object.npcData.name}`;
                    break;
                case 'item':
                    promptText = `Press SPACE to collect ${interactable.object.itemData.type.replace('_', ' ')}`;
                    break;
                case 'portal':
                    const targetZone = window.ZoneData[interactable.object.portalData.to];
                    promptText = `Press SPACE to travel to ${targetZone.name}`;
                    break;
            }
            
            this.ui.interactPrompt.setText(promptText).setVisible(true);
        } else {
            this.ui.interactPrompt.setVisible(false);
        }
    }
    
    handleInteraction() {
        if (this.nearbyInteractables.length === 0) return;
        
        const interactable = this.nearbyInteractables[0];
        
        switch (interactable.type) {
            case 'npc':
                this.interactWithNPC(interactable.object);
                break;
            case 'item':
                this.collectItem(interactable.object);
                break;
            case 'portal':
                this.usePortal(interactable.object);
                break;
        }
    }
    
    interactWithNPC(npc) {
        const dialogue = npc.npcData.dialogues.initial;
        this.dialogueSystem.startDialogue(dialogue);
    }
    
    collectItem(item) {
        // Add to inventory
        window.gameManager.addItem(item.itemData);
        
        // Remove from scene
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
        
        // Visual effect
        this.tweens.add({
            targets: item,
            scaleX: 2,
            scaleY: 2,
            alpha: 0,
            duration: 500,
            onComplete: () => item.destroy()
        });
        
        // Check if trial completed
        this.checkTrialCompletion();
    }
    
    usePortal(portal) {
        const targetZone = portal.portalData.to;
        window.gameManager.updatePlayer({ currentZone: targetZone });
        this.loadZone(targetZone);
        
        // Reset player position for new zone
        this.player.setPosition(640, 360);
    }
    
    checkTrialCompletion() {
        const currentZoneData = window.ZoneData[this.currentZone];
        const collectedItems = window.gameManager.playerData.inventory.filter(item => 
            currentZoneData.items.some(zoneItem => zoneItem.type === item.type)
        );
        
        // Check if all items in zone are collected
        if (collectedItems.length >= currentZoneData.items.length) {
            this.completeZoneTrial();
        }
    }
    
    completeZoneTrial() {
        // Grant elemental ability
        const elementMap = {
            earth: 'earth',
            water: 'water', 
            fire: 'fire',
            air: 'air',
            light: 'light',
            darkness: 'darkness'
        };
        
        const element = elementMap[this.currentZone];
        if (element) {
            window.gameManager.grantAbility(element);
            
            // Show completion message
            const completionText = this.add.text(this.cameras.main.width / 2, this.cameras.main.height / 2,
                `Trial Complete!\n\nYou have gained the power of ${element.toUpperCase()}!`, {
                fontSize: '32px',
                fill: '#FFD700',
                backgroundColor: '#000000',
                padding: { x: 20, y: 15 },
                align: 'center'
            }).setOrigin(0.5).setDepth(1000);
            
            // Unlock new zones based on progress
            this.unlockProgressBasedZones();
            
            // Fade out message
            this.time.delayedCall(3000, () => {
                this.tweens.add({
                    targets: completionText,
                    alpha: 0,
                    duration: 1000,
                    onComplete: () => completionText.destroy()
                });
            });
        }
    }
    
    unlockProgressBasedZones() {
        const abilities = window.gameManager.playerData.abilities;
        const completedCount = Object.values(abilities).filter(Boolean).length;
        
        // Unlock zones based on progress
        if (completedCount >= 3) {
            window.gameManager.unlockZone('timeIsland');
        }
        
        if (completedCount >= 6) {
            window.gameManager.unlockZone('dreamArchipelago');
        }
    }
    
    updateUI() {
        const player = window.gameManager.playerData;
        const zone = window.ZoneData[this.currentZone];
        
        // Update health bar
        const healthPercent = player.health / player.maxHealth;
        this.ui.healthFill.setSize(200 * healthPercent, 16);
        
        // Update mana bar
        const manaPercent = player.mana / player.maxMana;
        this.ui.manaFill.setSize(200 * manaPercent, 16);
        
        // Update zone name
        this.ui.zoneName.setText(zone.name);
    }
    
    toggleMenu() {
        // Simple menu implementation
        const menuText = `
===== SPIRIT KEEPER MENU =====

Player: ${window.gameManager.playerData.name}
Level: ${window.gameManager.playerData.level}
Health: ${window.gameManager.playerData.health}/${window.gameManager.playerData.maxHealth}

Elemental Abilities:
Earth: ${window.gameManager.playerData.abilities.earth ? '✓' : '✗'}
Water: ${window.gameManager.playerData.abilities.water ? '✓' : '✗'}
Fire: ${window.gameManager.playerData.abilities.fire ? '✓' : '✗'}
Air: ${window.gameManager.playerData.abilities.air ? '✓' : '✗'}
Light: ${window.gameManager.playerData.abilities.light ? '✓' : '✗'}
Darkness: ${window.gameManager.playerData.abilities.darkness ? '✓' : '✗'}

Inventory: ${window.gameManager.playerData.inventory.length} items
Quests: ${window.gameManager.playerData.quests.length} active

Press M to close
        `;
        
        alert(menuText);
    }
    
    saveGame() {
        const success = window.gameManager.saveGame();
        if (success) {
            // Show save confirmation
            const saveText = this.add.text(this.cameras.main.width / 2, 100,
                'Game Saved!', {
                fontSize: '24px',
                fill: '#00FF00',
                backgroundColor: '#000000',
                padding: { x: 10, y: 5 }
            }).setOrigin(0.5).setDepth(1000);
            
            this.time.delayedCall(2000, () => {
                this.tweens.add({
                    targets: saveText,
                    alpha: 0,
                    duration: 500,
                    onComplete: () => saveText.destroy()
                });
            });
        }
    }
    
    clearZone() {
        // Clear all zone-specific objects
        this.npcs.forEach(npc => {
            if (npc.label) npc.label.destroy();
            npc.destroy();
        });
        this.npcs = [];
        
        this.items.forEach(item => item.destroy());
        this.items = [];
        
        this.portals.forEach(portal => {
            if (portal.label) portal.label.destroy();
            portal.destroy();
        });
        this.portals = [];
        
        this.enemies.forEach(enemy => enemy.destroy());
        this.enemies = [];
        
        // Clear background elements
        this.children.list.forEach(child => {
            if (child !== this.player && !Object.values(this.ui).includes(child) && child.depth < 500) {
                child.destroy();
            }
        });
    }
}
