Scene = class extends Phaser.Scene {
    constructor() {
        super({
            key: "scene"
        })
    }

    preload() {
        this.load.image("boxer", "assets/Boxer Game Sprite OGA/1-Idle/__Boxer2_Idle_000.png");
        console.log(this.load);
    }

    create() {
        this.graphics = this.add.sprite(this.game.config.width / 2, this.game.config.height / 2,"boxer");
        
    }

}