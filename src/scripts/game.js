const Player = require("./player");
const ActionZone = require("./actionZone");
// const Surface = require("./surface");
import { Surface } from "./surface";
const { setUpKeyHandlers } = require("./util");

export class Game{
    constructor(ctx){
        this.player = new Player();
        this.surface = new Surface(ctx);
        this.actionZone = new ActionZone();

        setUpKeyHandlers(this.player, this.surface);
    }

    drawGame(ctx){
        
        this.player.drawPlayer(ctx, this.surface, this.actionZone);
    }
}

// module.exports = Game;