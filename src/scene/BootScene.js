import Phaser from 'phaser';

class BootScene extends Phaser.Scene {
    constructor() {
        super('BootScene');
    }

    preload() {
        // Qui caricheremo tutti i nostri asset. Per ora, non abbiamo nulla di specifico.
        // Simuliamo un asset per vedere il caricamento.
        // Quando avrai immagini vere, le caricherai qui:
        // this.load.image('sfondoMappa', 'src/assets/images/sfondo_mappa.png');
        // this.load.spritesheet('giocatore', 'src/assets/images/giocatore.png', { frameWidth: 32, frameHeight: 32 });

        // Un semplice "logo" testuale o una barra di caricamento (molto rudimentale)
        const loadingText = this.add.text(this.cameras.main.width / 2, this.cameras.main.height / 2, 'Caricamento...', {
            fontSize: '32px',
            fill: '#ffffff'
        }).setOrigin(0.5);

        // Questo simula un tempo di caricamento (rimuovilo quando avrai asset reali)
        this.load.on('complete', () => {
            console.log('Caricamento completato. Avvio MapScene...');
            this.scene.start('MapScene');
        });
    }

    create() {
        // Non c'è molto da fare qui, passiamo direttamente alla prossima scena dopo il caricamento
        // (gestito in preload.on('complete'))
    }
}

export default BootScene;
