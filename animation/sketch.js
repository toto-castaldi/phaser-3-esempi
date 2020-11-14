Scene = class extends Phaser.Scene {
    constructor() {
        super({
            key: "scene"
        })
    }

    preload() {
        for (let i = 0; i < 10; i++) {
            this.load.image(`walk${i}`, `assets/Boxer Game Sprite OGA/2-Walk/1-Forward/__Boxer2_Forward_00${i}.png`);
        }
        this.load.image(`idle`, `assets/Boxer Game Sprite OGA/1-Idle/__Boxer2_Idle_000.png`);
    }

    create() {
        const sprite = this.add.sprite(this.game.config.width / 2, this.game.config.height / 2, "idle");

        this.anims.create({
            key: "walk",
            frames: [{ key: "walk", frame: "0" }, { key: "walk", frame: 1 }]
        });

        sprite.anims.play({ key: 'walk', repeat: 7 });


    }

}