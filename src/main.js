// Importa Phaser direttamente dal CDN (Content Delivery Network)
import Phaser from 'https://cdn.jsdelivr.net/npm/phaser@3.80.1/dist/phaser.min.js.';

// Importa le scene del tuo gioco
// I percorsi sono stati corretti per la struttura: Isola_Game/src/scene/BootScene.js
import BootScene from './scene/BootScene.js'; // 'BootScene.js' è dentro la cartella 'scene', che è nella stessa cartella di 'main.js' (cioè 'src')
import MapScene from './scene/MapScene.js';   // Idem per 'MapScene.js'
// Qui importerai le altre scene dei minigiochi man mano che le creerai, es:
// import Minigame1Scene from './scene/Minigame1Scene.js';

// Configurazione base del gioco
const config = {
    type: Phaser.AUTO, // Sceglie automaticamente WebGL o Canvas per il rendering
    width: 1280, // Larghezza del gioco in pixel
    height: 720, // Altezza del gioco in pixel
    scale: {
        mode: Phaser.Scale.FIT, // Scala il gioco per adattarsi allo schermo del dispositivo
        autoCenter: Phaser.Scale.CENTER_BOTH // Centra il gioco sia orizzontalmente che verticalmente
    },
    physics: {
        default: 'arcade', // Utilizza il motore fisico Arcade (leggero e veloce per giochi 2D)
        arcade: {
            gravity: { y: 0 }, // Gravità verticale (0 per la mappa, puoi cambiarla nei minigiochi)
            debug: false // Imposta a true per visualizzare i contorni di collisione (utile in sviluppo)
        }
    },
    // Le scene del gioco, nell'ordine in cui verranno caricate.
    // La BootScene è la prima perché si occupa del precaricamento degli asset.
    scene: [BootScene, MapScene]
};

// Inizializza l'istanza del gioco Phaser
const game = new Phaser.Game(config);
