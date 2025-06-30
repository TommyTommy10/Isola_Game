// Game Manager - Central state management for L'Isola degli Spiriti
class GameManager {
    constructor() {
        this.playerData = {
            name: "Spirit Keeper",
            level: 1,
            experience: 0,
            health: 100,
            maxHealth: 100,
            mana: 50,
            maxMana: 50,
            position: { x: 640, y: 360 },
            currentZone: 'hub',
            abilities: {
                earth: false,
                water: false,
                fire: false,
                air: false,
                light: false,
                darkness: false
            },
            inventory: [],
            quests: [],
            completedQuests: [],
            gameFlags: {
                gameStarted: false,
                introCompleted: false,
                act1Completed: false,
                act2Completed: false,
                act3Completed: false
            }
        };
        
        this.gameState = {
            currentScene: 'MapScene',
            paused: false,
            dialogueActive: false,
            menuActive: false
        };
        
        this.zones = {
            hub: { name: "Spirit Sanctuary", unlocked: true },
            earth: { name: "Stone Gardens", unlocked: false },
            water: { name: "Crystal Falls", unlocked: false },
            fire: { name: "Ember Peaks", unlocked: false },
            air: { name: "Wind Valleys", unlocked: false },
            light: { name: "Radiant Grove", unlocked: false },
            darkness: { name: "Shadow Depths", unlocked: false },
            timeIsland: { name: "Island of Time", unlocked: false },
            dreamArchipelago: { name: "Dream Archipelago", unlocked: false }
        };
    }
    
    // Save game data to localStorage
    saveGame() {
        const saveData = {
            playerData: this.playerData,
            zones: this.zones,
            timestamp: Date.now()
        };
        localStorage.setItem('isolaDeglisSpiriti_save', JSON.stringify(saveData));
        return true;
    }
    
    // Load game data from localStorage
    loadGame() {
        const saveData = localStorage.getItem('isolaDeglisSpiriti_save');
        if (saveData) {
            const parsed = JSON.parse(saveData);
            this.playerData = { ...this.playerData, ...parsed.playerData };
            this.zones = { ...this.zones, ...parsed.zones };
            return true;
        }
        return false;
    }
    
    // Update player stats
    updatePlayer(updates) {
        this.playerData = { ...this.playerData, ...updates };
    }
    
    // Add item to inventory
    addItem(item) {
        this.playerData.inventory.push(item);
    }
    
    // Unlock zone
    unlockZone(zoneKey) {
        if (this.zones[zoneKey]) {
            this.zones[zoneKey].unlocked = true;
        }
    }
    
    // Grant elemental ability
    grantAbility(element) {
        this.playerData.abilities[element] = true;
    }
    
    // Add quest
    addQuest(quest) {
        this.playerData.quests.push(quest);
    }
    
    // Complete quest
    completeQuest(questId) {
        const questIndex = this.playerData.quests.findIndex(q => q.id === questId);
        if (questIndex !== -1) {
            const quest = this.playerData.quests.splice(questIndex, 1)[0];
            this.playerData.completedQuests.push(quest);
            return quest;
        }
        return null;
    }
}

// Global game manager instance
window.gameManager = new GameManager();
