// Non usiamo più "import Phaser from 'phaser';" qui
// Phaser sarà disponibile globalmente come "Phaser"

class MapScene extends Phaser.Scene {
    constructor() {
        super('MapScene');
        this.player = null;
        this.cursors = null;
        this.wasd = null;
        this.moveSpeed = 200;
    }

    create() {
        this.add.rectangle(
            0,
            0,
            this.sys.game.config.width,
            this.sys.game.config.height,
            0x87CEEB
        ).setOrigin(0, 0);

        this.player = this.add.circle(
            this.cameras.main.width / 2,
            this.cameras.main.height / 2,
            20,
            0xFF0000
        );
        this.physics.add.existing(this.player);
        this.player.body.setCollideWorldBounds(true);

        this.cursors = this.input.keyboard.createCursorKeys();
        this.wasd = {
            up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
            down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
            left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
            right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
        };

        this.add.text(10, 10, 'Muoviti con WASD o Frecce', {
            fontSize: '24px',
            fill: '#ffffff'
        });
    }

    update() {
        this.player.body.setVelocity(0);

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
// Non usiamo più "export default MapScene;"
