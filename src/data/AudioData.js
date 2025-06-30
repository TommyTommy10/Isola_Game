// Audio Data for L'Isola degli Spiriti
// Since we can't directly implement audio files, this provides the framework and descriptions

window.AudioData = {
    // Background music for each zone
    backgroundMusic: {
        sanctuary_ambient: {
            file: "sanctuary_ambient.ogg",
            description: "Peaceful, mystical ambient music with soft chimes and flowing melodies",
            mood: "Serene, welcoming, mysterious",
            instruments: "Strings, soft percussion, wind chimes, flute"
        },
        earth_ambient: {
            file: "earth_ambient.ogg", 
            description: "Deep, grounding music with cave echoes and crystal resonances",
            mood: "Stable, ancient, powerful",
            instruments: "Low drums, crystal singing bowls, didgeridoo, stone percussion"
        },
        water_ambient: {
            file: "water_ambient.ogg",
            description: "Flowing, adaptive music with water sounds and gentle currents",
            mood: "Fluid, emotional, cleansing",
            instruments: "Flowing synthesizers, water sounds, soft piano, rain sticks"
        },
        fire_ambient: {
            file: "fire_ambient.ogg",
            description: "Passionate, transformative music with crackling warmth",
            mood: "Energetic, transformative, intense",
            instruments: "Aggressive drums, brass, crackling sounds, electric guitar"
        },
        air_ambient: {
            file: "air_ambient.ogg",
            description: "Light, ethereal music with wind sounds and floating melodies",
            mood: "Free, uplifting, inspiring",
            instruments: "Flutes, wind sounds, light strings, ascending arpeggios"
        },
        light_ambient: {
            file: "light_ambient.ogg",
            description: "Radiant, clarifying music with pure tones and harmonics",
            mood: "Pure, revealing, uplifting",
            instruments: "Bright synths, choir, bells, crystalline sounds"
        },
        darkness_ambient: {
            file: "darkness_ambient.ogg",
            description: "Mysterious, deep music with hidden depths and whispered secrets",
            mood: "Mysterious, protective, contemplative",
            instruments: "Deep bass, whispered vocals, subtle percussion, minor keys"
        },
        time_ambient: {
            file: "time_ambient.ogg",
            description: "Temporal, shifting music with time distortion effects",
            mood: "Surreal, nostalgic, disorienting",
            instruments: "Reversed sounds, tempo changes, clock ticking, echo effects"
        },
        dream_ambient: {
            file: "dream_ambient.ogg",
            description: "Surreal, emotional music with dreamlike sequences",
            mood: "Emotional, surreal, cathartic",
            instruments: "Emotional strings, dream pads, vocal textures, gentle percussion"
        }
    },
    
    // Sound effects for interactions
    soundEffects: {
        // Player actions
        footsteps: {
            file: "footsteps.ogg",
            description: "Soft footsteps with slight magical resonance"
        },
        ability_use: {
            file: "ability_use.ogg", 
            description: "Magical whoosh with elemental undertones"
        },
        level_up: {
            file: "level_up.ogg",
            description: "Ascending magical chimes with sparkle effects"
        },
        
        // Item interactions
        item_collect: {
            file: "item_collect.ogg",
            description: "Gentle chime with magical sparkle"
        },
        quest_complete: {
            file: "quest_complete.ogg",
            description: "Triumphant musical flourish"
        },
        trial_complete: {
            file: "trial_complete.ogg",
            description: "Majestic orchestral swell with elemental harmonics"
        },
        
        // Spirit interactions
        spirit_awaken: {
            file: "spirit_awaken.ogg",
            description: "Deep, resonant tone with elemental characteristics"
        },
        spirit_blessing: {
            file: "spirit_blessing.ogg",
            description: "Warm, enveloping harmonic with power undertones"
        },
        
        // Environmental
        portal_activate: {
            file: "portal_activate.ogg",
            description: "Dimensional shift with magical energy buildup"
        },
        zone_transition: {
            file: "zone_transition.ogg",
            description: "Transitional sweep with new zone's elemental preview"
        },
        
        // UI sounds
        menu_open: {
            file: "menu_open.ogg",
            description: "Soft magical chime"
        },
        menu_select: {
            file: "menu_select.ogg",
            description: "Gentle confirmation tone"
        },
        dialogue_advance: {
            file: "dialogue_advance.ogg",
            description: "Subtle page turn with magical whisper"
        }
    },
    
    // Dynamic music system
    musicLayers: {
        base: "Main ambient track for the zone",
        elemental: "Elemental power layer that intensifies with abilities",
        tension: "Tension layer for challenges and enemies",
        triumph: "Victory layer for completed trials"
    },
    
    // Audio settings and implementation
    audioSettings: {
        masterVolume: 0.7,
        musicVolume: 0.8,
        sfxVolume: 0.9,
        fadeInDuration: 2000,
        fadeOutDuration: 1500,
        crossfadeDuration: 3000
    },
    
    // Functions for audio management (framework)
    playBackgroundMusic: function(zoneKey) {
        console.log(`Playing background music for zone: ${zoneKey}`);
        // Implementation would load and play the appropriate background music
        // this.currentMusic = this.backgroundMusic[`${zoneKey}_ambient`];
    },
    
    playSoundEffect: function(effectKey) {
        console.log(`Playing sound effect: ${effectKey}`);
        // Implementation would play the specified sound effect
        // this.game.sound.play(this.soundEffects[effectKey].file);
    },
    
    stopAllMusic: function() {
        console.log("Stopping all background music");
        // Implementation would stop all currently playing music
    },
    
    adjustMusicForMood: function(mood) {
        console.log(`Adjusting music for mood: ${mood}`);
        // Implementation would layer additional tracks based on game state
        // Moods: normal, tense, triumphant, mysterious, emotional
    },
    
    // Elemental sound themes
    elementalThemes: {
        earth: {
            bass: "Deep, grounding bass frequencies",
            percussion: "Stone and crystal percussion",
            melody: "Stable, repeating patterns"
        },
        water: {
            flow: "Flowing, adaptive melodies",
            ambience: "Water sounds and gentle currents",
            emotion: "Emotional string sections"
        },
        fire: {
            intensity: "Aggressive, passionate rhythms",
            transformation: "Building and releasing tension",
            energy: "High-energy percussion and brass"
        },
        air: {
            freedom: "Light, floating melodies",
            movement: "Ascending and descending patterns",
            clarity: "Clear, pure tones"
        },
        light: {
            purity: "Bright, clean harmonies",
            revelation: "Sudden musical illuminations",
            guidance: "Leading melodic lines"
        },
        darkness: {
            mystery: "Hidden, subtle harmonic layers",
            depth: "Deep, resonant undertones",
            protection: "Comforting, enveloping sounds"
        }
    }
};

// Audio recommendation system
window.AudioData.getRecommendedMusic = function(gameState) {
    const zone = gameState.currentZone;
    const mood = gameState.currentMood || 'normal';
    const abilities = Object.values(gameState.playerAbilities || {}).filter(Boolean).length;
    
    let recommendations = [];
    
    // Base zone music
    recommendations.push(this.backgroundMusic[`${zone}_ambient`]);
    
    // Mood adjustments
    if (mood === 'tense') {
        recommendations.push("Add tension layer");
    } else if (mood === 'triumphant') {
        recommendations.push("Add triumph layer");
    }
    
    // Ability-based layering
    if (abilities > 3) {
        recommendations.push("Add elemental harmony layer");
    }
    
    return recommendations;
};

// Simple audio manager placeholder
window.AudioManager = {
    currentMusic: null,
    musicVolume: 0.7,
    sfxVolume: 0.8,
    
    playMusic: function(musicKey) {
        console.log(`🎵 Now playing: ${musicKey}`);
        this.currentMusic = musicKey;
    },
    
    playSFX: function(sfxKey) {
        console.log(`🔊 Sound effect: ${sfxKey}`);
    },
    
    stopMusic: function() {
        console.log("🔇 Music stopped");
        this.currentMusic = null;
    },
    
    setMusicVolume: function(volume) {
        this.musicVolume = Math.max(0, Math.min(1, volume));
        console.log(`🎚️ Music volume: ${this.musicVolume}`);
    },
    
    setSFXVolume: function(volume) {
        this.sfxVolume = Math.max(0, Math.min(1, volume));
        console.log(`🎚️ SFX volume: ${this.sfxVolume}`);
    }
};
