// NPC Data for L'Isola degli Spiriti
window.NPCData = {
    // Elder Sage - Main guide at the Spirit Sanctuary
    elderSage: {
        name: "Elder Sage",
        sprite: "elder_sage",
        position: { x: 500, y: 300 },
        zone: "hub",
        dialogues: {
            initial: {
                messages: [
                    {
                        speaker: "Elder Sage",
                        text: "Welcome, young Spirit Keeper. I have been waiting for you. The elemental spirits of this island are in chaos, and only you can restore the balance."
                    },
                    {
                        speaker: "Elder Sage", 
                        text: "Long ago, this island was home to six powerful elemental spirits: Earth, Water, Fire, Air, Light, and Darkness. They lived in harmony, each maintaining their sacred domains.",
                        choices: [
                            {
                                text: "What happened to them?",
                                nextDialogue: window.NPCData.elderSage.dialogues.backstory
                            },
                            {
                                text: "How can I help?",
                                nextDialogue: window.NPCData.elderSage.dialogues.quest
                            }
                        ]
                    }
                ]
            },
            backstory: {
                messages: [
                    {
                        speaker: "Elder Sage",
                        text: "A great disturbance shattered their unity. Each spirit retreated to their elemental domain, sealing themselves away. Without their guidance, the island's magic grows wild and dangerous."
                    },
                    {
                        speaker: "Elder Sage",
                        text: "You must journey to each elemental zone, awaken the sleeping spirits, and prove yourself worthy of their power.",
                        choices: [
                            {
                                text: "I'm ready to begin!",
                                action: { type: "unlockZone", zone: "earth" },
                                nextDialogue: window.NPCData.elderSage.dialogues.firstQuest
                            }
                        ]
                    }
                ]
            },
            quest: {
                messages: [
                    {
                        speaker: "Elder Sage",
                        text: "You must visit each elemental domain and complete the Trial of Spirits. Start with the Stone Gardens to the east - there you'll find the Earth Spirit's altar.",
                        choices: [
                            {
                                text: "I'll head there now.",
                                action: { type: "unlockZone", zone: "earth" },
                                nextDialogue: window.NPCData.elderSage.dialogues.encouragement
                            }
                        ]
                    }
                ]
            },
            firstQuest: {
                messages: [
                    {
                        speaker: "Elder Sage",
                        text: "Take this ancient compass - it will guide you to the elemental altars. Begin with the Stone Gardens to the east. Be careful, young keeper.",
                        action: { 
                            type: "addQuest", 
                            quest: { 
                                id: "awaken_earth_spirit", 
                                title: "Awaken the Earth Spirit", 
                                description: "Journey to the Stone Gardens and complete the Earth Trial"
                            }
                        }
                    }
                ]
            },
            encouragement: {
                messages: [
                    {
                        speaker: "Elder Sage",
                        text: "Remember, young keeper - true strength comes not from controlling the elements, but from understanding their essence. Good luck."
                    }
                ]
            }
        }
    },
    
    // Earth Guardian - Stone Gardens
    earthGuardian: {
        name: "Stone Guardian",
        sprite: "earth_guardian", 
        position: { x: 400, y: 200 },
        zone: "earth",
        dialogues: {
            initial: {
                messages: [
                    {
                        speaker: "Stone Guardian",
                        text: "*A deep, rumbling voice echoes from the ancient stone statue* Who disturbs the sacred grounds of earth?"
                    },
                    {
                        speaker: "Stone Guardian",
                        text: "Ah... the Spirit Keeper arrives at last. I am the guardian of this domain. Do you seek the Earth Spirit's blessing?",
                        choices: [
                            {
                                text: "Yes, I wish to take the Earth Trial.",
                                nextDialogue: window.NPCData.earthGuardian.dialogues.trial
                            },
                            {
                                text: "Tell me about this place first.",
                                nextDialogue: window.NPCData.earthGuardian.dialogues.info
                            }
                        ]
                    }
                ]
            },
            trial: {
                messages: [
                    {
                        speaker: "Stone Guardian",
                        text: "The Earth Trial tests your patience and strength. You must gather three Sacred Stones hidden throughout these gardens while avoiding the stone sentinels."
                    },
                    {
                        speaker: "Stone Guardian", 
                        text: "Only when you understand that true strength comes from stability and patience will the Earth Spirit acknowledge you.",
                        choices: [
                            {
                                text: "I accept the trial.",
                                action: { 
                                    type: "addQuest",
                                    quest: {
                                        id: "earth_trial",
                                        title: "Trial of Earth",
                                        description: "Collect 3 Sacred Stones in the Stone Gardens"
                                    }
                                }
                            }
                        ]
                    }
                ]
            },
            info: {
                messages: [
                    {
                        speaker: "Stone Guardian",
                        text: "These gardens were once the most beautiful on the island. The Earth Spirit nurtured every stone, every crystal, every grain of soil with infinite care."
                    },
                    {
                        speaker: "Stone Guardian",
                        text: "When the great disturbance came, the spirit retreated deep underground. Now the gardens grow wild, and stone sentinels patrol endlessly.",
                        choices: [
                            {
                                text: "I want to help restore this place.",
                                nextDialogue: window.NPCData.earthGuardian.dialogues.trial
                            }
                        ]
                    }
                ]
            }
        }
    },
    
    // Water Nymph - Crystal Falls
    waterNymph: {
        name: "Azure Nymph",
        sprite: "water_nymph",
        position: { x: 600, y: 350 },
        zone: "water", 
        dialogues: {
            initial: {
                messages: [
                    {
                        speaker: "Azure Nymph",
                        text: "*The sound of flowing water seems to form words* Welcome to the Crystal Falls, keeper of spirits."
                    },
                    {
                        speaker: "Azure Nymph",
                        text: "I sense you seek the Water Spirit's gift. But first, you must prove you understand the nature of adaptability and flow.",
                        choices: [
                            {
                                text: "I'm ready for the Water Trial.",
                                nextDialogue: window.NPCData.waterNymph.dialogues.trial
                            },
                            {
                                text: "What happened to the Water Spirit?",
                                nextDialogue: window.NPCData.waterNymph.dialogues.story
                            }
                        ]
                    }
                ]
            },
            trial: {
                messages: [
                    {
                        speaker: "Azure Nymph",
                        text: "The Water Trial requires you to navigate the flowing maze beneath the falls. Water always finds a way - remember this wisdom."
                    },
                    {
                        speaker: "Azure Nymph",
                        text: "Collect the three Crystal Tears while the waters shift around you. Adapt like water, and you shall succeed.",
                        choices: [
                            {
                                text: "I understand. Let the trial begin!",
                                action: {
                                    type: "addQuest",
                                    quest: {
                                        id: "water_trial", 
                                        title: "Trial of Water",
                                        description: "Navigate the flowing maze and collect 3 Crystal Tears"
                                    }
                                }
                            }
                        ]
                    }
                ]
            },
            story: {
                messages: [
                    {
                        speaker: "Azure Nymph",
                        text: "The Water Spirit was the most gentle of all the elementals. When darkness threatened the island, she wept tears of pure crystal, trying to wash away the sorrow."
                    },
                    {
                        speaker: "Azure Nymph", 
                        text: "Her tears became these eternal falls, but she herself has hidden in the deepest pools, afraid to emerge again.",
                        choices: [
                            {
                                text: "Then I must help her find courage again.",
                                nextDialogue: window.NPCData.waterNymph.dialogues.trial
                            }
                        ]
                    }
                ]
            }
        }
    },
    
    // Fire Salamander - Ember Peaks
    fireSalamander: {
        name: "Ember Salamander",
        sprite: "fire_salamander",
        position: { x: 300, y: 400 },
        zone: "fire",
        dialogues: {
            initial: {
                messages: [
                    {
                        speaker: "Ember Salamander",
                        text: "*Flames dance as a fierce voice speaks* Another seeks the Fire Spirit's power? Many have tried. All have failed."
                    },
                    {
                        speaker: "Ember Salamander",
                        text: "Fire is not just destruction - it is rebirth, passion, and the will to overcome any obstacle. Do you possess such fierce determination?",
                        choices: [
                            {
                                text: "I have the will of fire within me!",
                                nextDialogue: window.NPCData.fireSalamander.dialogues.trial
                            },
                            {
                                text: "Teach me about fire's true nature.",
                                nextDialogue: window.NPCData.fireSalamander.dialogues.wisdom
                            }
                        ]
                    }
                ]
            },
            trial: {
                messages: [
                    {
                        speaker: "Ember Salamander",
                        text: "The Fire Trial will test your courage and determination. You must light the three Sacred Braziers while volcanic spirits try to extinguish your flame."
                    },
                    {
                        speaker: "Ember Salamander",
                        text: "Remember - fire spreads when fed, but dies when smothered. Keep your inner flame burning bright!",
                        choices: [
                            {
                                text: "My flame will never be extinguished!",
                                action: {
                                    type: "addQuest",
                                    quest: {
                                        id: "fire_trial",
                                        title: "Trial of Fire", 
                                        description: "Light the 3 Sacred Braziers in the Ember Peaks"
                                    }
                                }
                            }
                        ]
                    }
                ]
            },
            wisdom: {
                messages: [
                    {
                        speaker: "Ember Salamander",
                        text: "Fire is transformation itself. Where others see destruction, fire sees the chance for new growth. A forest burns, but from the ashes, new life springs forth."
                    },
                    {
                        speaker: "Ember Salamander",
                        text: "The Fire Spirit embodies this endless cycle of endings and beginnings. To earn its blessing, you must embrace change and transformation.",
                        choices: [
                            {
                                text: "I understand. I'm ready to be transformed.",
                                nextDialogue: window.NPCData.fireSalamander.dialogues.trial
                            }
                        ]
                    }
                ]
            }
        }
    },
    
    // Wind Keeper - Wind Valleys
    windKeeper: {
        name: "Zephyr the Wind Keeper",
        sprite: "wind_keeper",
        position: { x: 500, y: 200 },
        zone: "air",
        dialogues: {
            initial: {
                messages: [
                    {
                        speaker: "Zephyr the Wind Keeper",
                        text: "*A voice carried on the wind reaches your ears* Welcome, earthbound one, to the realm where thoughts take flight and spirits soar free."
                    },
                    {
                        speaker: "Zephyr the Wind Keeper",
                        text: "The Air Spirit values freedom above all else. To earn its blessing, you must prove you understand the nature of liberty and adaptation.",
                        choices: [
                            {
                                text: "I seek the freedom of the winds!",
                                nextDialogue: window.NPCData.windKeeper.dialogues.trial
                            },
                            {
                                text: "What does it mean to be truly free?",
                                nextDialogue: window.NPCData.windKeeper.dialogues.philosophy
                            }
                        ]
                    }
                ]
            },
            trial: {
                messages: [
                    {
                        speaker: "Zephyr the Wind Keeper",
                        text: "The Air Trial requires you to collect Wind Essences from the floating platforms while storm spirits test your resolve."
                    },
                    {
                        speaker: "Zephyr the Wind Keeper",
                        text: "Remember - the wind cannot be grasped, only guided. Move with the currents, not against them.",
                        choices: [
                            {
                                text: "I will ride the winds to victory!",
                                action: {
                                    type: "addQuest",
                                    quest: {
                                        id: "air_trial",
                                        title: "Trial of Air",
                                        description: "Collect 3 Wind Essences from the floating platforms"
                                    }
                                }
                            }
                        ]
                    }
                ]
            },
            philosophy: {
                messages: [
                    {
                        speaker: "Zephyr the Wind Keeper",
                        text: "True freedom is not the absence of obstacles, but the ability to flow around them. The wind does not fight the mountain - it finds a way over, under, or around."
                    },
                    {
                        speaker: "Zephyr the Wind Keeper",
                        text: "The Air Spirit teaches us that liberation comes not from breaking chains, but from learning to dance despite them.",
                        choices: [
                            {
                                text: "I understand. Let me prove my freedom.",
                                nextDialogue: window.NPCData.windKeeper.dialogues.trial
                            }
                        ]
                    }
                ]
            }
        }
    },
    
    // Light Keeper - Radiant Grove
    lightKeeper: {
        name: "Solaris the Light Keeper",
        sprite: "light_keeper",
        position: { x: 600, y: 300 },
        zone: "light",
        dialogues: {
            initial: {
                messages: [
                    {
                        speaker: "Solaris the Light Keeper",
                        text: "*A warm, golden voice fills the air* Child of seeking, you have come to the realm where truth shines eternal and shadows dare not linger."
                    },
                    {
                        speaker: "Solaris the Light Keeper",
                        text: "The Light Spirit reveals all things as they truly are. But beware - not all who seek truth are prepared for what they might find.",
                        choices: [
                            {
                                text: "I am ready to face any truth!",
                                nextDialogue: window.NPCData.lightKeeper.dialogues.trial
                            },
                            {
                                text: "What truths does the light reveal?",
                                nextDialogue: window.NPCData.lightKeeper.dialogues.revelation
                            }
                        ]
                    }
                ]
            },
            trial: {
                messages: [
                    {
                        speaker: "Solaris the Light Keeper",
                        text: "The Light Trial will test your courage to face truth. You must gather Light Shards while shadow creatures try to obscure your vision."
                    },
                    {
                        speaker: "Solaris the Light Keeper",
                        text: "Remember - light does not destroy darkness, it reveals what was always there. Seek understanding, not victory.",
                        choices: [
                            {
                                text: "I will let truth be my guide!",
                                action: {
                                    type: "addQuest",
                                    quest: {
                                        id: "light_trial",
                                        title: "Trial of Light",
                                        description: "Gather 3 Light Shards while maintaining clarity of vision"
                                    }
                                }
                            }
                        ]
                    }
                ]
            },
            revelation: {
                messages: [
                    {
                        speaker: "Solaris the Light Keeper",
                        text: "Light reveals that every shadow has its purpose, every flaw its lesson, every failure its wisdom. The brightest truth is that perfection is not the absence of darkness, but the acceptance of the whole."
                    },
                    {
                        speaker: "Solaris the Light Keeper",
                        text: "When you have faced your own shadows and emerged with compassion intact, then you will understand the Light Spirit's gift.",
                        choices: [
                            {
                                text: "I accept this challenge of truth.",
                                nextDialogue: window.NPCData.lightKeeper.dialogues.trial
                            }
                        ]
                    }
                ]
            }
        }
    },
    
    // Shadow Guardian - Shadow Depths
    shadowGuardian: {
        name: "Nyx the Shadow Guardian",
        sprite: "shadow_guardian",
        position: { x: 400, y: 350 },
        zone: "darkness",
        dialogues: {
            initial: {
                messages: [
                    {
                        speaker: "Nyx the Shadow Guardian",
                        text: "*A voice emerges from the darkness, neither threatening nor welcoming* So... another light-bearer enters the realm of shadows. Do you come to banish us, or to understand us?"
                    },
                    {
                        speaker: "Nyx the Shadow Guardian",
                        text: "Many fear the darkness, thinking it evil. But darkness is simply the absence waiting to be filled, the rest between breaths, the pause between notes that gives music meaning.",
                        choices: [
                            {
                                text: "I seek to understand, not to banish.",
                                nextDialogue: window.NPCData.shadowGuardian.dialogues.trial
                            },
                            {
                                text: "Why do people fear the darkness?",
                                nextDialogue: window.NPCData.shadowGuardian.dialogues.wisdom
                            }
                        ]
                    }
                ]
            },
            trial: {
                messages: [
                    {
                        speaker: "Nyx the Shadow Guardian",
                        text: "The Darkness Trial asks you to collect Void Crystals while navigating by feeling alone. In this realm, your eyes will not serve you - you must trust your other senses."
                    },
                    {
                        speaker: "Nyx the Shadow Guardian",
                        text: "Darkness is not the enemy of light - it is its companion. Learn to move in harmony with shadows, and they will become your allies.",
                        choices: [
                            {
                                text: "I will embrace the darkness as my ally.",
                                action: {
                                    type: "addQuest",
                                    quest: {
                                        id: "darkness_trial",
                                        title: "Trial of Darkness",
                                        description: "Navigate the shadow maze and collect 3 Void Crystals"
                                    }
                                }
                            }
                        ]
                    }
                ]
            },
            wisdom: {
                messages: [
                    {
                        speaker: "Nyx the Shadow Guardian",
                        text: "People fear darkness because they cannot see what lies within it. But darkness is where rest comes, where dreams are born, where potential waits to be awakened."
                    },
                    {
                        speaker: "Nyx the Shadow Guardian",
                        text: "The Darkness Spirit protects the hidden things - not because they are evil, but because they are not yet ready to be revealed. Sometimes, secrecy is kindness.",
                        choices: [
                            {
                                text: "I want to learn this protective wisdom.",
                                nextDialogue: window.NPCData.shadowGuardian.dialogues.trial
                            }
                        ]
                    }
                ]
            }
        }
    },
    
    // Time Keeper - Island of Time
    timeKeeper: {
        name: "Chronos the Time Keeper",
        sprite: "time_keeper",
        position: { x: 640, y: 200 },
        zone: "timeIsland",
        dialogues: {
            initial: {
                messages: [
                    {
                        speaker: "Chronos the Time Keeper",
                        text: "*A voice that seems to echo from past and future simultaneously* Welcome, Spirit Keeper, to the place where all moments converge. Here, you will face the source of the great disturbance."
                    },
                    {
                        speaker: "Chronos the Time Keeper",
                        text: "Time is not a river flowing in one direction - it is an ocean, and here the currents have become turbulent. Are you prepared to witness what was, what is, and what might be?",
                        choices: [
                            {
                                text: "Show me the truth of the disturbance.",
                                nextDialogue: window.NPCData.timeKeeper.dialogues.revelation
                            },
                            {
                                text: "I need to understand time's nature first.",
                                nextDialogue: window.NPCData.timeKeeper.dialogues.teaching
                            }
                        ]
                    }
                ]
            },
            revelation: {
                messages: [
                    {
                        speaker: "Chronos the Time Keeper",
                        text: "Behold the truth - the great disturbance was not caused by an external force. It was born from the island's own collective despair when hope and despair fell out of balance."
                    },
                    {
                        speaker: "Chronos the Time Keeper",
                        text: "The spirits withdrew not from anger, but from overwhelming sorrow. Their absence created a void that manifested as the Nightmare Entity in the Dream Archipelago.",
                        choices: [
                            {
                                text: "Then I must heal this collective wound.",
                                action: {
                                    type: "unlockZone",
                                    zone: "dreamArchipelago"
                                }
                            }
                        ]
                    }
                ]
            },
            teaching: {
                messages: [
                    {
                        speaker: "Chronos the Time Keeper",
                        text: "Time is not just duration - it is the canvas upon which all existence paints its story. Every moment contains infinite potential, but only one path is chosen."
                    },
                    {
                        speaker: "Chronos the Time Keeper",
                        text: "Here, you can see the echoes of decisions unmade, the shadows of paths untaken. This knowledge is both gift and burden.",
                        choices: [
                            {
                                text: "I accept this burden of knowledge.",
                                nextDialogue: window.NPCData.timeKeeper.dialogues.revelation
                            }
                        ]
                    }
                ]
            }
        }
    },
    
    // Dream Weaver - Dream Archipelago
    dreamWeaver: {
        name: "Oneiros the Dream Weaver",
        sprite: "dream_weaver",
        position: { x: 500, y: 400 },
        zone: "dreamArchipelago",
        dialogues: {
            initial: {
                messages: [
                    {
                        speaker: "Oneiros the Dream Weaver",
                        text: "*A voice like shifting dreams speaks softly* Welcome to the realm where thoughts take form and emotions become landscape. You have come to face the island's deepest wound."
                    },
                    {
                        speaker: "Oneiros the Dream Weaver",
                        text: "The Nightmare Entity is not evil - it is the manifestation of collective sorrow and abandonment. To heal it, you must show it that hope and despair can coexist.",
                        choices: [
                            {
                                text: "How do I heal something born of pure sorrow?",
                                nextDialogue: window.NPCData.dreamWeaver.dialogues.wisdom
                            },
                            {
                                text: "I'm ready to face the Nightmare Entity.",
                                nextDialogue: window.NPCData.dreamWeaver.dialogues.preparation
                            }
                        ]
                    }
                ]
            },
            wisdom: {
                messages: [
                    {
                        speaker: "Oneiros the Dream Weaver",
                        text: "Healing does not mean erasing sorrow - it means embracing it as part of the whole. The Nightmare Entity needs to understand that sadness and joy, darkness and light, are both necessary."
                    },
                    {
                        speaker: "Oneiros the Dream Weaver",
                        text: "Your journey through the elemental realms has taught you balance. Now you must apply that wisdom to the realm of emotions.",
                        choices: [
                            {
                                text: "I understand. Balance, not elimination.",
                                nextDialogue: window.NPCData.dreamWeaver.dialogues.preparation
                            }
                        ]
                    }
                ]
            },
            preparation: {
                messages: [
                    {
                        speaker: "Oneiros the Dream Weaver",
                        text: "Gather the Dream Essences, Memory Crystals, and Hope Fragments scattered throughout this realm. Each represents a different aspect of the island's psyche."
                    },
                    {
                        speaker: "Oneiros the Dream Weaver",
                        text: "When you have collected them all, you will be ready for the final confrontation. Remember - you seek not to destroy, but to integrate and heal.",
                        choices: [
                            {
                                text: "I will heal the island's heart.",
                                action: {
                                    type: "addQuest",
                                    quest: {
                                        id: "final_healing",
                                        title: "Heal the Nightmare",
                                        description: "Collect all emotional essences and face the Nightmare Entity"
                                    }
                                }
                            }
                        ]
                    }
                ]
            }
        }
    },
    
    // Wind Keeper - Wind Valleys
    windKeeper: {
        name: "Zephyr the Wind Keeper",
        sprite: "wind_keeper",
        position: { x: 500, y: 200 },
        zone: "air",
        dialogues: {
            initial: {
                messages: [
                    {
                        speaker: "Zephyr the Wind Keeper",
                        text: "*A voice carried on the wind reaches your ears* Welcome, earthbound one, to the realm where thoughts take flight and spirits soar free."
                    },
                    {
                        speaker: "Zephyr the Wind Keeper",
                        text: "The Air Spirit values freedom above all else. To earn its blessing, you must prove you understand the nature of liberty and adaptation.",
                        choices: [
                            {
                                text: "I seek the freedom of the winds!",
                                nextDialogue: window.NPCData.windKeeper.dialogues.trial
                            },
                            {
                                text: "What does it mean to be truly free?",
                                nextDialogue: window.NPCData.windKeeper.dialogues.philosophy
                            }
                        ]
                    }
                ]
            },
            trial: {
                messages: [
                    {
                        speaker: "Zephyr the Wind Keeper",
                        text: "The Air Trial requires you to collect Wind Essences from the floating platforms while storm spirits test your resolve."
                    },
                    {
                        speaker: "Zephyr the Wind Keeper",
                        text: "Remember - the wind cannot be grasped, only guided. Move with the currents, not against them.",
                        choices: [
                            {
                                text: "I will ride the winds to victory!",
                                action: {
                                    type: "addQuest",
                                    quest: {
                                        id: "air_trial",
                                        title: "Trial of Air",
                                        description: "Collect 3 Wind Essences from the floating platforms"
                                    }
                                }
                            }
                        ]
                    }
                ]
            },
            philosophy: {
                messages: [
                    {
                        speaker: "Zephyr the Wind Keeper",
                        text: "True freedom is not the absence of obstacles, but the ability to flow around them. The wind does not fight the mountain - it finds a way over, under, or around."
                    },
                    {
                        speaker: "Zephyr the Wind Keeper",
                        text: "The Air Spirit teaches us that liberation comes not from breaking chains, but from learning to dance despite them.",
                        choices: [
                            {
                                text: "I understand. Let me prove my freedom.",
                                nextDialogue: window.NPCData.windKeeper.dialogues.trial
                            }
                        ]
                    }
                ]
            }
        }
    },
    
    // Light Keeper - Radiant Grove
    lightKeeper: {
        name: "Solaris the Light Keeper",
        sprite: "light_keeper",
        position: { x: 600, y: 300 },
        zone: "light",
        dialogues: {
            initial: {
                messages: [
                    {
                        speaker: "Solaris the Light Keeper",
                        text: "*A warm, golden voice fills the air* Child of seeking, you have come to the realm where truth shines eternal and shadows dare not linger."
                    },
                    {
                        speaker: "Solaris the Light Keeper",
                        text: "The Light Spirit reveals all things as they truly are. But beware - not all who seek truth are prepared for what they might find.",
                        choices: [
                            {
                                text: "I am ready to face any truth!",
                                nextDialogue: window.NPCData.lightKeeper.dialogues.trial
                            },
                            {
                                text: "What truths does the light reveal?",
                                nextDialogue: window.NPCData.lightKeeper.dialogues.revelation
                            }
                        ]
                    }
                ]
            },
            trial: {
                messages: [
                    {
                        speaker: "Solaris the Light Keeper",
                        text: "The Light Trial will test your courage to face truth. You must gather Light Shards while shadow creatures try to obscure your vision."
                    },
                    {
                        speaker: "Solaris the Light Keeper",
                        text: "Remember - light does not destroy darkness, it reveals what was always there. Seek understanding, not victory.",
                        choices: [
                            {
                                text: "I will let truth be my guide!",
                                action: {
                                    type: "addQuest",
                                    quest: {
                                        id: "light_trial",
                                        title: "Trial of Light",
                                        description: "Gather 3 Light Shards while maintaining clarity of vision"
                                    }
                                }
                            }
                        ]
                    }
                ]
            },
            revelation: {
                messages: [
                    {
                        speaker: "Solaris the Light Keeper",
                        text: "Light reveals that every shadow has its purpose, every flaw its lesson, every failure its wisdom. The brightest truth is that perfection is not the absence of darkness, but the acceptance of the whole."
                    },
                    {
                        speaker: "Solaris the Light Keeper",
                        text: "When you have faced your own shadows and emerged with compassion intact, then you will understand the Light Spirit's gift.",
                        choices: [
                            {
                                text: "I accept this challenge of truth.",
                                nextDialogue: window.NPCData.lightKeeper.dialogues.trial
                            }
                        ]
                    }
                ]
            }
        }
    },
    
    // Shadow Guardian - Shadow Depths
    shadowGuardian: {
        name: "Nyx the Shadow Guardian",
        sprite: "shadow_guardian",
        position: { x: 400, y: 350 },
        zone: "darkness",
        dialogues: {
            initial: {
                messages: [
                    {
                        speaker: "Nyx the Shadow Guardian",
                        text: "*A voice emerges from the darkness, neither threatening nor welcoming* So... another light-bearer enters the realm of shadows. Do you come to banish us, or to understand us?"
                    },
                    {
                        speaker: "Nyx the Shadow Guardian",
                        text: "Many fear the darkness, thinking it evil. But darkness is simply the absence waiting to be filled, the rest between breaths, the pause between notes that gives music meaning.",
                        choices: [
                            {
                                text: "I seek to understand, not to banish.",
                                nextDialogue: window.NPCData.shadowGuardian.dialogues.trial
                            },
                            {
                                text: "Why do people fear the darkness?",
                                nextDialogue: window.NPCData.shadowGuardian.dialogues.wisdom
                            }
                        ]
                    }
                ]
            },
            trial: {
                messages: [
                    {
                        speaker: "Nyx the Shadow Guardian",
                        text: "The Darkness Trial asks you to collect Void Crystals while navigating by feeling alone. In this realm, your eyes will not serve you - you must trust your other senses."
                    },
                    {
                        speaker: "Nyx the Shadow Guardian",
                        text: "Darkness is not the enemy of light - it is its companion. Learn to move in harmony with shadows, and they will become your allies.",
                        choices: [
                            {
                                text: "I will embrace the darkness as my ally.",
                                action: {
                                    type: "addQuest",
                                    quest: {
                                        id: "darkness_trial",
                                        title: "Trial of Darkness",
                                        description: "Navigate the shadow maze and collect 3 Void Crystals"
                                    }
                                }
                            }
                        ]
                    }
                ]
            },
            wisdom: {
                messages: [
                    {
                        speaker: "Nyx the Shadow Guardian",
                        text: "People fear darkness because they cannot see what lies within it. But darkness is where rest comes, where dreams are born, where potential waits to be awakened."
                    },
                    {
                        speaker: "Nyx the Shadow Guardian",
                        text: "The Darkness Spirit protects the hidden things - not because they are evil, but because they are not yet ready to be revealed. Sometimes, secrecy is kindness.",
                        choices: [
                            {
                                text: "I want to learn this protective wisdom.",
                                nextDialogue: window.NPCData.shadowGuardian.dialogues.trial
                            }
                        ]
                    }
                ]
            }
        }
    },
    
    // Time Keeper - Island of Time
    timeKeeper: {
        name: "Chronos the Time Keeper",
        sprite: "time_keeper",
        position: { x: 640, y: 200 },
        zone: "timeIsland",
        dialogues: {
            initial: {
                messages: [
                    {
                        speaker: "Chronos the Time Keeper",
                        text: "*A voice that seems to echo from past and future simultaneously* Welcome, Spirit Keeper, to the place where all moments converge. Here, you will face the source of the great disturbance."
                    },
                    {
                        speaker: "Chronos the Time Keeper",
                        text: "Time is not a river flowing in one direction - it is an ocean, and here the currents have become turbulent. Are you prepared to witness what was, what is, and what might be?",
                        choices: [
                            {
                                text: "Show me the truth of the disturbance.",
                                nextDialogue: window.NPCData.timeKeeper.dialogues.revelation
                            },
                            {
                                text: "I need to understand time's nature first.",
                                nextDialogue: window.NPCData.timeKeeper.dialogues.teaching
                            }
                        ]
                    }
                ]
            },
            revelation: {
                messages: [
                    {
                        speaker: "Chronos the Time Keeper",
                        text: "Behold the truth - the great disturbance was not caused by an external force. It was born from the island's own collective despair when hope and despair fell out of balance."
                    },
                    {
                        speaker: "Chronos the Time Keeper",
                        text: "The spirits withdrew not from anger, but from overwhelming sorrow. Their absence created a void that manifested as the Nightmare Entity in the Dream Archipelago.",
                        choices: [
                            {
                                text: "Then I must heal this collective wound.",
                                action: {
                                    type: "unlockZone",
                                    zone: "dreamArchipelago"
                                }
                            }
                        ]
                    }
                ]
            },
            teaching: {
                messages: [
                    {
                        speaker: "Chronos the Time Keeper",
                        text: "Time is not just duration - it is the canvas upon which all existence paints its story. Every moment contains infinite potential, but only one path is chosen."
                    },
                    {
                        speaker: "Chronos the Time Keeper",
                        text: "Here, you can see the echoes of decisions unmade, the shadows of paths untaken. This knowledge is both gift and burden.",
                        choices: [
                            {
                                text: "I accept this burden of knowledge.",
                                nextDialogue: window.NPCData.timeKeeper.dialogues.revelation
                            }
                        ]
                    }
                ]
            }
        }
    },
    
    // Dream Weaver - Dream Archipelago
    dreamWeaver: {
        name: "Oneiros the Dream Weaver",
        sprite: "dream_weaver",
        position: { x: 500, y: 400 },
        zone: "dreamArchipelago",
        dialogues: {
            initial: {
                messages: [
                    {
                        speaker: "Oneiros the Dream Weaver",
                        text: "*A voice like shifting dreams speaks softly* Welcome to the realm where thoughts take form and emotions become landscape. You have come to face the island's deepest wound."
                    },
                    {
                        speaker: "Oneiros the Dream Weaver",
                        text: "The Nightmare Entity is not evil - it is the manifestation of collective sorrow and abandonment. To heal it, you must show it that hope and despair can coexist.",
                        choices: [
                            {
                                text: "How do I heal something born of pure sorrow?",
                                nextDialogue: window.NPCData.dreamWeaver.dialogues.wisdom
                            },
                            {
                                text: "I'm ready to face the Nightmare Entity.",
                                nextDialogue: window.NPCData.dreamWeaver.dialogues.preparation
                            }
                        ]
                    }
                ]
            },
            wisdom: {
                messages: [
                    {
                        speaker: "Oneiros the Dream Weaver",
                        text: "Healing does not mean erasing sorrow - it means embracing it as part of the whole. The Nightmare Entity needs to understand that sadness and joy, darkness and light, are both necessary."
                    },
                    {
                        speaker: "Oneiros the Dream Weaver",
                        text: "Your journey through the elemental realms has taught you balance. Now you must apply that wisdom to the realm of emotions.",
                        choices: [
                            {
                                text: "I understand. Balance, not elimination.",
                                nextDialogue: window.NPCData.dreamWeaver.dialogues.preparation
                            }
                        ]
                    }
                ]
            },
            preparation: {
                messages: [
                    {
                        speaker: "Oneiros the Dream Weaver",
                        text: "Gather the Dream Essences, Memory Crystals, and Hope Fragments scattered throughout this realm. Each represents a different aspect of the island's psyche."
                    },
                    {
                        speaker: "Oneiros the Dream Weaver",
                        text: "When you have collected them all, you will be ready for the final confrontation. Remember - you seek not to destroy, but to integrate and heal.",
                        choices: [
                            {
                                text: "I will heal the island's heart.",
                                action: {
                                    type: "addQuest",
                                    quest: {
                                        id: "final_healing",
                                        title: "Heal the Nightmare",
                                        description: "Collect all emotional essences and face the Nightmare Entity"
                                    }
                                }
                            }
                        ]
                    }
                ]
            }
        }
    }
};

// Initialize self-referencing dialogues after object creation
setTimeout(() => {
    // Fix the circular reference issue
    window.NPCData.elderSage.dialogues.initial.messages[1].choices[0].nextDialogue = window.NPCData.elderSage.dialogues.backstory;
    window.NPCData.elderSage.dialogues.initial.messages[1].choices[1].nextDialogue = window.NPCData.elderSage.dialogues.quest;
    window.NPCData.elderSage.dialogues.backstory.messages[1].choices[0].nextDialogue = window.NPCData.elderSage.dialogues.firstQuest;
    window.NPCData.elderSage.dialogues.quest.messages[0].choices[0].nextDialogue = window.NPCData.elderSage.dialogues.encouragement;
}, 100);
