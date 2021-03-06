/*
 * Creare elementi grafici con https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Graphics.html
 */

gameOptions = {
    squareRotation: 0.02,
}

Scene = class extends Phaser.Scene {
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

        //cancella la grafica creata prima
        this.graphics.clear();
        //stile linea
        this.graphics.lineStyle(1, 0x00ff44);

        const lines = 10;

        for (let i = 0; i < lines; i++) {
            let destX = this.playerData.x + game.config.width / 2 * Math.cos(this.playerData.rotation + 2 * Math.PI / lines * i);
            let destY = this.playerData.y + game.config.width / 2 * Math.sin(this.playerData.rotation + 2 * Math.PI / lines * i);

            //una linea
            this.graphics.lineBetween(this.playerData.x, this.playerData.y, destX, destY);
        }



    }
}