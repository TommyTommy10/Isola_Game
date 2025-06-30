// Non usiamo più "import Phaser from 'phaser';" qui
// Phaser sarà disponibile globalmente come "Phaser"

class BootScene extends Phaser.Scene { // Phaser è disponibile direttamente
    constructor() {
        super('BootScene');
    }

    preload() {
        const loadingText = this.add.text(
            this.cameras.main.width / 2,
            this.cameras.main.height / 2,
            'Caricamento...',
            {
                fontSize: '32px',
                fill: '#ffffff'
            }
        ).setOrigin(0.5);

        this.load.on('complete', () => {
            console.log('Caricamento asset completato. Avvio MapScene...');
            this.scene.start('MapScene');
        });
    }

    create() {
        // Non c'è molto da fare qui
    }
}
// Non usiamo più "export default BootScene;"
// Dobbiamo assicurare che sia disponibile per il gioco, lo faremo nel main script
