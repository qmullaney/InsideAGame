const Player = require("./player");
// const Surface = require("./surface");
import { Surface } from "./surface";
const { setUpKeyHandlers } = require("./util");

export class Game{
    constructor(ctx){
        this.player = new Player();
        this.surface = new Surface(ctx);

        setUpKeyHandlers(this.player, this.surface);
    }

    drawGame(ctx){
        
        this.player.drawPlayer(ctx, this.surface);
    }
}

// module.exports = Game;