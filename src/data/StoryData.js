// Story Data for L'Isola degli Spiriti - Complete narrative system

window.StoryData = {
    // Main story acts
    acts: {
        act1: {
            title: "The Elemental Reawakening",
            description: "Awaken the six elemental spirits and restore balance to their domains",
            requiredAbilities: 6, // All six elemental abilities
            completed: false,
            zones: ["earth", "water", "fire", "air", "light", "darkness"]
        },
        act2: {
            title: "The Island of Time",
            description: "Journey to the mysterious Island of Time where past, present, and future converge",
            requiredAbilities: 6, // Must complete Act 1 first
            completed: false,
            zones: ["timeIsland"]
        },
        act3: {
            title: "The Dream Archipelago",
            description: "Face the Nightmare entity in the surreal realm of memories and emotions",
            requiredAbilities: 6, // Must complete previous acts
            completed: false,
            zones: ["dreamArchipelago"]
        }
    },
    
    // Side quests
    sideQuests: {
        lostArtifacts: {
            id: "lost_artifacts",
            title: "The Lost Artifacts",
            description: "Collect ancient artifacts scattered across the island",
            rewards: ["Ancient Compass", "Spirit Stone", "Elemental Orb"],
            artifacts: [
                { name: "Compass of Winds", zone: "air", collected: false },
                { name: "Crystal of Depths", zone: "water", collected: false },
                { name: "Ember of Creation", zone: "fire", collected: false },
                { name: "Stone of Eternity", zone: "earth", collected: false },
                { name: "Prism of Light", zone: "light", collected: false },
                { name: "Void Shard", zone: "darkness", collected: false }
            ]
        },
        corruptedSpirits: {
            id: "corrupted_spirits",
            title: "Cleansing the Corruption",
            description: "Help cleanse corrupted spirits throughout the island",
            rewards: ["Purification Blessing", "Spirit Bond Enhancement"],
            targets: [
                { name: "Weeping Stone", zone: "earth", cleansed: false },
                { name: "Frozen Flame", zone: "fire", cleansed: false },
                { name: "Stagnant Wind", zone: "air", cleansed: false },
                { name: "Shadowed Light", zone: "light", cleansed: false }
            ]
        },
        helpVillagers: {
            id: "help_villagers",
            title: "Aid to the People",
            description: "Help the remaining villagers with their daily struggles",
            rewards: ["Villager's Blessing", "Community Support"],
            tasks: [
                { npc: "Elder Merchant", task: "Restore trade routes", completed: false },
                { npc: "Spirit Herbalist", task: "Gather rare healing herbs", completed: false },
                { npc: "Island Historian", task: "Recover lost historical texts", completed: false }
            ]
        }
    },
    
    // Environmental lore - discoverable through exploration
    lore: {
        ancientHistory: {
            title: "The Age of Harmony",
            text: "Long before the great disturbance, L'Isola degli Spiriti was a place of perfect elemental balance. The six great spirits - Earth, Water, Fire, Air, Light, and Darkness - worked together to maintain the natural order.",
            location: "Ancient Library in Spirit Sanctuary"
        },
        theDisturbance: {
            title: "The Great Sundering",
            text: "A cosmic event of unknown origin shattered the harmony between the elemental spirits. Some say it was a tear in reality itself, others believe it was the manifestation of the island's collective despair.",
            location: "Broken altar fragments throughout the island"
        },
        spiritKeepers: {
            title: "The Guardians of Balance",
            text: "Throughout history, special individuals known as Spirit Keepers have emerged during times of crisis. They possess the rare ability to communicate with and channel the power of elemental spirits.",
            location: "Elder Sage's memories"
        },
        islandSecrets: {
            title: "Hidden Realms",
            text: "Beyond the six elemental domains lie hidden realms: the Island of Time, where temporal energies create impossible landscapes, and the Dream Archipelago, where thoughts and emotions take physical form.",
            location: "Mystical portal inscriptions"
        }
    },
    
    // Character backstories
    characters: {
        spiritKeeper: {
            name: "The Spirit Keeper",
            background: "A young individual called by destiny to restore balance to the island. Though lacking in experience, they possess an innate connection to elemental energies that grows stronger with each trial completed.",
            motivation: "To heal the wounded island and bring peace to the elemental spirits",
            abilities: {
                base: "Natural spirit communication",
                earth: "Stone shaping and seismic sensing",
                water: "Liquid manipulation and emotional healing",
                fire: "Flame control and passionate inspiration",
                air: "Wind riding and thought clarity",
                light: "Radiance projection and truth seeking",
                darkness: "Shadow walking and hidden knowledge"
            }
        },
        elderSage: {
            name: "Elder Sage Arianna",
            background: "The last of the ancient Spirit Keepers, she has watched over the island for decades since the great disturbance. Her wisdom runs deep, but her power has waned with age.",
            motivation: "To train a new Spirit Keeper and see the island restored before her time ends",
            secrets: "She knows the true cause of the disturbance but fears the knowledge is too dangerous to share immediately"
        },
        elementalSpirits: {
            earth: {
                name: "Terranis the Enduring",
                personality: "Patient, wise, sometimes stubborn",
                domain: "Stability, growth, persistence",
                fear: "Erosion of purpose, being forgotten"
            },
            water: {
                name: "Aqualis the Flowing",
                personality: "Adaptable, emotional, nurturing",
                domain: "Change, healing, life",
                fear: "Stagnation, pollution of her pure essence"
            },
            fire: {
                name: "Ignis the Passionate",
                personality: "Fierce, transformative, inspiring",
                domain: "Change, destruction and creation, passion",
                fear: "Being extinguished, losing intensity"
            },
            air: {
                name: "Ventus the Free",
                personality: "Curious, unpredictable, liberating",
                domain: "Freedom, communication, thought",
                fear: "Confinement, silence, stagnant thoughts"
            },
            light: {
                name: "Luminis the Radiant",
                personality: "Pure, revealing, sometimes harsh",
                domain: "Truth, clarity, guidance",
                fear: "Deception, being dimmed by shadows"
            },
            darkness: {
                name: "Umbrius the Hidden",
                personality: "Mysterious, protective, misunderstood",
                domain: "Rest, secrets, potential",
                fear: "Being feared, never being understood"
            }
        }
    },
    
    // Dialogue trees for major story moments
    storyDialogues: {
        firstAwakening: {
            trigger: "First elemental spirit awakened",
            dialogue: {
                messages: [
                    {
                        speaker: "Awakened Spirit",
                        text: "*A warm presence fills your mind* Young Keeper... you have done well. I can feel my power returning, but there is still much work to be done."
                    },
                    {
                        speaker: "Awakened Spirit",
                        text: "The other spirits still slumber. Each trial will test a different aspect of your character. Remember - we are not your tools, but your partners in healing this island."
                    }
                ]
            }
        },
        threeSpiritsAwakened: {
            trigger: "Three elemental spirits awakened",
            dialogue: {
                messages: [
                    {
                        speaker: "Collective Voice",
                        text: "*Multiple voices speak as one* Keeper... we sense a greater darkness stirring. Your growing power has not gone unnoticed by the forces that caused the original disturbance."
                    },
                    {
                        speaker: "Collective Voice",
                        text: "Beyond our elemental domains lie places where time itself is broken, and where nightmares take physical form. Prepare yourself - greater challenges await."
                    }
                ]
            }
        },
        allSpiritsAwakened: {
            trigger: "All six elemental spirits awakened",
            dialogue: {
                messages: [
                    {
                        speaker: "United Spirits",
                        text: "*The voice of all six spirits speaks in perfect harmony* Spirit Keeper, you have succeeded beyond our greatest hopes. The elemental balance is restored, but our work is not yet complete."
                    },
                    {
                        speaker: "United Spirits",
                        text: "The source of the great disturbance lies beyond our domains, in realms where reality itself bends. The Island of Time and the Dream Archipelago hold the final answers."
                    },
                    {
                        speaker: "United Spirits",
                        text: "We will lend you our combined strength for the trials ahead. But beware - in those places, even we cannot fully protect you."
                    }
                ]
            }
        },
        timeIslandRevelation: {
            trigger: "Entering Island of Time",
            dialogue: {
                messages: [
                    {
                        speaker: "Temporal Echo",
                        text: "*A voice that seems to come from multiple times at once* Welcome, Spirit Keeper, to where all moments converge. Here you will witness the true cause of the disturbance."
                    },
                    {
                        speaker: "Temporal Echo",
                        text: "Look and see - the disturbance was not a random cosmic event. It was born from the island's own despair, when the balance between hope and sorrow was broken."
                    }
                ]
            }
        },
        finalConfrontation: {
            trigger: "Entering Dream Archipelago",
            dialogue: {
                messages: [
                    {
                        speaker: "Nightmare Entity",
                        text: "*A voice of pure despair* So... another comes to challenge me. I am the fear that lives in every heart, the doubt that shadows every hope."
                    },
                    {
                        speaker: "Nightmare Entity",
                        text: "I was born from this island's collective sorrow when the spirits first withdrew. I am not your enemy, Keeper - I am simply the consequence of imbalance."
                    },
                    {
                        speaker: "Nightmare Entity",
                        text: "But if you truly seek to heal this island... then you must first heal me. Show me that hope can exist alongside sorrow, that light and darkness can coexist."
                    }
                ]
            }
        },
        finalResolution: {
            trigger: "Game completion",
            dialogue: {
                messages: [
                    {
                        speaker: "Healed Entity",
                        text: "*The voice now carries both sorrow and hope* Thank you, Spirit Keeper. I understand now that darkness need not mean despair, and light need not banish all shadows."
                    },
                    {
                        speaker: "All Spirits United", 
                        text: "The great work is complete. L'Isola degli Spiriti is whole once more, not because the darkness has been destroyed, but because all elements have found their proper place."
                    },
                    {
                        speaker: "Elder Sage",
                        text: "You have surpassed even my greatest hopes, young Keeper. The island is healed, and you have become a true master of elemental balance. Your legend will inspire future generations."
                    }
                ]
            }
        }
    },
    
    // Environmental storytelling elements
    environmentalStory: {
        ruinedTemples: {
            description: "Ancient temples bearing scars of the great disturbance",
            story: "These once-magnificent structures show signs of elemental warfare - melted stone, frozen flames, crystallized air currents",
            locations: ["All elemental zones"]
        },
        spiritTears: {
            description: "Crystallized droplets found throughout the island",
            story: "These are the physical manifestations of the spirits' grief, each one holding a fragment of the island's pain",
            locations: ["Hidden in secret areas"]
        },
        harmonyStatues: {
            description: "Broken statues showing spirits working together",
            story: "These monuments to the old harmony are slowly reforming as the Spirit Keeper progresses",
            locations: ["Central areas of each zone"]
        },
        whisperingStones: {
            description: "Ancient stones that echo with voices from the past",
            story: "By listening carefully, the Spirit Keeper can hear fragments of conversations from before the disturbance",
            locations: ["Throughout the world"]
        }
    }
};

// Story progression functions
window.StoryData.checkActProgress = function() {
    const abilities = window.gameManager.playerData.abilities;
    const completedAbilities = Object.values(abilities).filter(Boolean).length;
    
    // Check Act 1 completion
    if (completedAbilities >= 6 && !this.acts.act1.completed) {
        this.acts.act1.completed = true;
        window.gameManager.unlockZone('timeIsland');
        return 'act1_completed';
    }
    
    // Check for story milestones
    if (completedAbilities === 1) return 'first_awakening';
    if (completedAbilities === 3) return 'three_spirits_awakened';
    if (completedAbilities === 6) return 'all_spirits_awakened';
    
    return null;
};

window.StoryData.getStoryDialogue = function(trigger) {
    return this.storyDialogues[trigger] || null;
};

window.StoryData.unlockLore = function(loreKey) {
    if (this.lore[loreKey]) {
        window.gameManager.playerData.unlockedLore = window.gameManager.playerData.unlockedLore || [];
        if (!window.gameManager.playerData.unlockedLore.includes(loreKey)) {
            window.gameManager.playerData.unlockedLore.push(loreKey);
            return this.lore[loreKey];
        }
    }
    return null;
};
