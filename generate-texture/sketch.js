/*
 * Creare una texture con grafica per poi usarlo in uno sprite
 * GameObjectCreator (https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.GameObjectCreator.html)  
 */

gameOptions = {
    squareSize: 15
}

Scene = class extends Phaser.Scene {
    constructor() {
        super({
            key: "scene"
        })
    }

    create() {
        //usando this.add.graphics() il rettangolo viene ANCHE aggiunto alla scena
        let makeGraphics = this.make.graphics();
        makeGraphics.fillStyle(0x995632, 1);
        makeGraphics.fillRect(0, 0, gameOptions.squareSize, gameOptions.squareSize);
        makeGraphics.generateTexture("square", gameOptions.squareSize, gameOptions.squareSize);

        //sprite con la texture create con makeGraphics.generateTexture
        this.add.sprite(game.config.width / 2, game.config.height / 2, "square");
    }

}