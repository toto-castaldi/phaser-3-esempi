let gameOptions = {
    squareRotation: 0.02,
}

class Scene extends Phaser.Scene {
    constructor() {
        super({
            key: "scene"
        })
    }

    create() {
        this.graphics = this.add.graphics();

        this.playerData = {
            x: game.config.width / 2,
            y: game.config.height / 2,
            rotation: 0
        }
    }

    update() {
        this.playerData.rotation += gameOptions.squareRotation;

        this.graphics.clear();
        this.graphics.lineStyle(1, 0x00ff44);

        const lines = 10;

        for (let i = 0; i < lines; i++) {
            let destX = this.playerData.x + game.config.width / 2 * Math.cos(this.playerData.rotation + 2 * Math.PI / lines * i);
            let destY = this.playerData.y + game.config.width / 2 * Math.sin(this.playerData.rotation + 2 * Math.PI / lines * i);
            this.graphics.lineBetween(this.playerData.x, this.playerData.y, destX, destY);
        }



    }
}

let game = new Phaser.Game({
    type: Phaser.AUTO,
    backgroundColor: 0x222222,
    width: 800,
    height: 800,
    scene: [Scene]
});