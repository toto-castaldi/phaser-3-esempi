let gameOptions = {
    squareSize: 15
}

class Scene extends Phaser.Scene {
    constructor() {
        super({
            key: "scene"
        })
    }

    create() {
        //usando this.add.graphics(); il rettangolo viene ANCHE aggiunto alla scena
        let makeGraphics = this.make.graphics();
        makeGraphics.fillStyle(0x995632, 1);
        makeGraphics.fillRect(0, 0, gameOptions.squareSize, gameOptions.squareSize);
        makeGraphics.generateTexture("square", gameOptions.squareSize, gameOptions.squareSize);

        //sprite con la texture create con makeGraphics.generateTexture
        this.add.sprite(game.config.width / 2, game.config.height / 2, "square");
    }

}

let game = new Phaser.Game({
    type: Phaser.AUTO,
    backgroundColor: 0x222222,
    width: 800,
    height: 800,
    scene: [Scene],
    parent : "sketch-holder"
});