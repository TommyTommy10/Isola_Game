// Zone Configuration for L'Isola degli Spiriti
window.ZoneData = {
    hub: {
        name: "Spirit Sanctuary",
        description: "The sacred heart of the island where all elemental energies converge",
        backgroundColor: 0x87CEEB,
        tilesetColors: {
            ground: 0x90EE90,
            path: 0xDEB887,
            structures: 0xD3D3D3
        },
        bgMusic: "sanctuary_ambient",
        npcs: ["elderSage"],
        items: [],
        portals: [
            { to: "earth", x: 800, y: 300, unlocked: false },
            { to: "water", x: 640, y: 150, unlocked: false },
            { to: "fire", x: 480, y: 300, unlocked: false },
            { to: "air", x: 640, y: 450, unlocked: false },
            { to: "light", x: 850, y: 200, unlocked: false },
            { to: "darkness", x: 430, y: 400, unlocked: false }
        ],
        layout: {
            width: 1280,
            height: 720,
            specialAreas: [
                { type: "altar", x: 640, y: 200, radius: 50 },
                { type: "garden", x: 300, y: 500, radius: 80 },
                { type: "library", x: 980, y: 500, radius: 60 }
            ]
        }
    },
    
    earth: {
        name: "Stone Gardens", 
        description: "Ancient gardens of crystalline formations and sacred stones",
        backgroundColor: 0x8B4513,
        tilesetColors: {
            ground: 0x654321,
            rocks: 0x696969,
            crystals: 0x9932CC
        },
        bgMusic: "earth_ambient",
        npcs: ["earthGuardian"],
        items: [
            { type: "sacred_stone", x: 200, y: 300, collected: false },
            { type: "sacred_stone", x: 600, y: 150, collected: false },
            { type: "sacred_stone", x: 900, y: 400, collected: false }
        ],
        enemies: [
            { type: "stone_sentinel", x: 400, y: 200 },
            { type: "stone_sentinel", x: 700, y: 350 }
        ],
        layout: {
            width: 1280,
            height: 720,
            specialAreas: [
                { type: "altar", x: 640, y: 600, radius: 60 },
                { type: "crystal_cave", x: 100, y: 100, radius: 70 },
                { type: "stone_maze", x: 800, y: 200, radius: 100 }
            ]
        }
    },
    
    water: {
        name: "Crystal Falls",
        description: "Cascading waterfalls and pools of liquid crystal",
        backgroundColor: 0x4682B4,
        tilesetColors: {
            water: 0x00BFFF,
            mist: 0xB0E0E6,
            crystals: 0x48D1CC
        },
        bgMusic: "water_ambient",
        npcs: ["waterNymph"],
        items: [
            { type: "crystal_tear", x: 300, y: 400, collected: false },
            { type: "crystal_tear", x: 700, y: 200, collected: false },
            { type: "crystal_tear", x: 500, y: 500, collected: false }
        ],
        enemies: [
            { type: "water_wisp", x: 350, y: 250 },
            { type: "water_wisp", x: 650, y: 450 }
        ],
        layout: {
            width: 1280,
            height: 720,
            specialAreas: [
                { type: "altar", x: 640, y: 100, radius: 60 },
                { type: "flowing_maze", x: 400, y: 350, radius: 120 },
                { type: "crystal_pool", x: 900, y: 500, radius: 80 }
            ]
        }
    },
    
    fire: {
        name: "Ember Peaks",
        description: "Volcanic peaks with eternal flames and molten streams",
        backgroundColor: 0x8B0000,
        tilesetColors: {
            lava: 0xFF4500,
            ember: 0xFFD700,
            rock: 0x2F4F4F
        },
        bgMusic: "fire_ambient",
        npcs: ["fireSalamander"],
        items: [
            { type: "sacred_brazier", x: 250, y: 200, lit: false },
            { type: "sacred_brazier", x: 750, y: 300, lit: false },
            { type: "sacred_brazier", x: 500, y: 550, lit: false }
        ],
        enemies: [
            { type: "fire_imp", x: 400, y: 350 },
            { type: "volcanic_spirit", x: 800, y: 450 }
        ],
        layout: {
            width: 1280,
            height: 720,
            specialAreas: [
                { type: "altar", x: 640, y: 650, radius: 60 },
                { type: "lava_pools", x: 300, y: 450, radius: 90 },
                { type: "ember_fields", x: 900, y: 200, radius: 100 }
            ]
        }
    },
    
    air: {
        name: "Wind Valleys",
        description: "Floating islands connected by bridges of solidified wind",
        backgroundColor: 0x87CEEB,
        tilesetColors: {
            clouds: 0xF0F8FF,
            wind: 0xE0FFFF,
            sky: 0x87CEFA
        },
        bgMusic: "air_ambient",
        npcs: ["windKeeper"],
        items: [
            { type: "wind_essence", x: 200, y: 300, collected: false },
            { type: "wind_essence", x: 600, y: 150, collected: false },
            { type: "wind_essence", x: 900, y: 400, collected: false }
        ],
        enemies: [
            { type: "storm_sprite", x: 450, y: 250 },
            { type: "wind_wraith", x: 750, y: 350 }
        ],
        layout: {
            width: 1280,
            height: 720,
            specialAreas: [
                { type: "altar", x: 640, y: 360, radius: 60 },
                { type: "floating_platforms", x: 400, y: 200, radius: 100 },
                { type: "wind_temple", x: 800, y: 500, radius: 80 }
            ]
        }
    },
    
    light: {
        name: "Radiant Grove",
        description: "A grove where pure light takes physical form among golden trees",
        backgroundColor: 0xFFFFE0,
        tilesetColors: {
            light: 0xFFFFFF,
            gold: 0xFFD700,
            radiance: 0xFFF8DC
        },
        bgMusic: "light_ambient",
        npcs: ["lightKeeper"],
        items: [
            { type: "light_shard", x: 300, y: 250, collected: false },
            { type: "light_shard", x: 700, y: 400, collected: false },
            { type: "light_shard", x: 500, y: 500, collected: false }
        ],
        enemies: [
            { type: "shadow_shade", x: 400, y: 300 },
            { type: "void_whisper", x: 800, y: 200 }
        ],
        layout: {
            width: 1280,
            height: 720,
            specialAreas: [
                { type: "altar", x: 640, y: 360, radius: 60 },
                { type: "light_prisms", x: 300, y: 400, radius: 90 },
                { type: "radiant_tree", x: 900, y: 300, radius: 70 }
            ]
        }
    },
    
    darkness: {
        name: "Shadow Depths",
        description: "Deep caverns where darkness itself has consciousness and form",
        backgroundColor: 0x191970,
        tilesetColors: {
            shadow: 0x2F2F2F,
            void: 0x000000,
            purple: 0x4B0082
        },
        bgMusic: "darkness_ambient",
        npcs: ["shadowGuardian"],
        items: [
            { type: "void_crystal", x: 250, y: 300, collected: false },
            { type: "void_crystal", x: 650, y: 200, collected: false },
            { type: "void_crystal", x: 800, y: 450, collected: false }
        ],
        enemies: [
            { type: "shadow_beast", x: 400, y: 350 },
            { type: "void_stalker", x: 700, y: 250 }
        ],
        layout: {
            width: 1280,
            height: 720,
            specialAreas: [
                { type: "altar", x: 640, y: 360, radius: 60 },
                { type: "void_portal", x: 200, y: 200, radius: 80 },
                { type: "shadow_maze", x: 900, y: 400, radius: 100 }
            ]
        }
    },
    
    timeIsland: {
        name: "Island of Time",
        description: "A mysterious island where past, present, and future converge",
        backgroundColor: 0x663399,
        tilesetColors: {
            temporal: 0x9966CC,
            fracture: 0xCC99FF,
            void: 0x330066
        },
        bgMusic: "time_ambient",
        npcs: ["timeKeeper"],
        items: [
            { type: "time_fragment", x: 300, y: 300, collected: false },
            { type: "time_fragment", x: 700, y: 200, collected: false },
            { type: "time_fragment", x: 500, y: 500, collected: false }
        ],
        enemies: [
            { type: "temporal_echo", x: 400, y: 250 },
            { type: "time_wraith", x: 800, y: 400 }
        ],
        layout: {
            width: 1280,
            height: 720,
            specialAreas: [
                { type: "altar", x: 640, y: 360, radius: 60 },
                { type: "time_rift", x: 300, y: 500, radius: 90 },
                { type: "chronos_shrine", x: 900, y: 200, radius: 80 }
            ]
        }
    },
    
    dreamArchipelago: {
        name: "Dream Archipelago",
        description: "Floating islands of crystallized dreams and memories",
        backgroundColor: 0x8A2BE2,
        tilesetColors: {
            dream: 0xDA70D6,
            memory: 0xDDA0DD,
            nightmare: 0x4B0082
        },
        bgMusic: "dream_ambient",
        npcs: ["dreamWeaver"],
        items: [
            { type: "dream_essence", x: 250, y: 250, collected: false },
            { type: "memory_crystal", x: 650, y: 350, collected: false },
            { type: "hope_fragment", x: 800, y: 500, collected: false }
        ],
        enemies: [
            { type: "nightmare_shade", x: 400, y: 300 },
            { type: "memory_wraith", x: 750, y: 200 },
            { type: "despair_entity", x: 600, y: 450 }
        ],
        layout: {
            width: 1280,
            height: 720,
            specialAreas: [
                { type: "altar", x: 640, y: 360, radius: 60 },
                { type: "dream_pool", x: 300, y: 400, radius: 100 },
                { type: "memory_garden", x: 900, y: 300, radius: 90 }
            ]
        }
    }
};
