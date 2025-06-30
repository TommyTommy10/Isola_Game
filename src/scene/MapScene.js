import Phaser from 'phaser';

class MapScene extends Phaser.Scene {
    constructor() {
        super('MapScene');
        this.player = null;
        this.cursors = null;
        this.moveSpeed = 200; // Velocità di movimento del giocatore
    }

    create() {
        // Sfondo della mappa (per ora un colore solido)
        // Quando avrai un'immagine, userai: this.add.image(0, 0, 'sfondoMappa').setOrigin(0);
        this.add.rectangle(0, 0, this.sys.game.config.width, this.sys.game.config.height, 0x87CEEB)
            .setOrigin(0); // Un bel blu cielo come sfondo

        // Il nostro "giocatore" (un cerchio per ora)
        // Quando avrai uno spritesheet, userai: this.add.sprite(X, Y, 'giocatore');
        this.player = this.add.circle(
            this.cameras.main.width / 2, // Inizia al centro orizzontale
            this.cameras.main.height / 2, // Inizia al centro verticale
            20, // Raggio del cerchio
            0xFF0000 // Colore rosso
        );
        this.physics.add.existing(this.player); // Aggiunge la fisica al giocatore
        this.player.body.setCollideWorldBounds(true); // Non può uscire dallo schermo

        // Controlli da tastiera (frecce o WASD)
        this.cursors = this.input.keyboard.createCursorKeys();
        this.wasd = {
            up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
            down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
            left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
            right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
        };

        // Testo di istruzioni
        this.add.text(10, 10, 'Muoviti con WASD o Frecce', {
            fontSize: '24px',
            fill: '#ffffff'
        });
    }

    update() {
        // Reset della velocità del giocatore
        this.player.body.setVelocity(0);

        // Movimento in base ai tasti premuti
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
    }
}

export default MapScene;
