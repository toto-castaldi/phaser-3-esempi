Scene = class extends Phaser.Scene {
    constructor() {
        super({
            key: "scene"
        })
    }

    preload() {
        this.load.image("pentagon", "assets/pentagon.png");
    }

    create() {
        this.sprite = this.add.sprite(this.game.config.width / 2, this.game.config.height / 2, "pentagon");
        this.sprite.displayWidth = 50;
        this.sprite.displayHeight = 50;
    }

    update() {
        this.sprite.x = this.input.x;
        this.sprite.y = this.input.y;
        this.sprite.angle += 1;
    }
}