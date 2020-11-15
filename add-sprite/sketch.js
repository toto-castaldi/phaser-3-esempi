Scene = class extends Phaser.Scene {
    constructor() {
        super({
            key: "scene"
        })
    }

    preload() {
        this.load.image("boxer", "assets/boxer_idle_000.png");
    }

    create() {
        this.graphics = this.add.sprite(this.game.config.width / 2, this.game.config.height / 2, "boxer");
    }

}