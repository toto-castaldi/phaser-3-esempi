Scene = class extends Phaser.Scene {
    constructor() {
        super({
            key: "scene"
        })
    }

    preload() {
        this.load.image("arrow", "assets/arrow.png");
    }

    create() {
        this.sprite = this.physics.add.image(this.game.config.width / 2, this.game.config.height / 2, "arrow");
        this.sprite.displayWidth = 50;
        this.sprite.displayHeight = 50;
    }

    update() {
        //distanza tra oggetti
        if (Phaser.Math.Distance.Between(this.sprite.x, this.sprite.y, this.input.x, this.input.y) > 10) {
            const rotation = Phaser.Math.Angle.Between(this.sprite.x, this.sprite.y, this.input.x, this.input.y);
            this.sprite.setRotation(rotation);
            //muovre un oggetto verso una destinazione
            this.physics.moveTo(this.sprite, this.input.x, this.input.y);
        } else {
            this.sprite.setVelocity(0);
        }
    }
}

Scene.gameConfig = {
    type: Phaser.AUTO,
    backgroundColor: 0x222222,
    width: 800,
    height: 800,
    scene: [Scene],
    parent: "sketch-holder",
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    }
}