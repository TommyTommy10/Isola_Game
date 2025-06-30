// Le scene sono ora disponibili globalmente (non più importate)
// Assicurati che BootScene.js e MapScene.js siano stati caricati prima di questo script.

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
    // Dobbiamo riferirci alle classi delle scene che ora sono globali.
    scene: [BootScene, MapScene]
};

// Inizializza l'istanza del gioco Phaser
const game = new Phaser.Game(config);
