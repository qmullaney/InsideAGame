const Player = require("./player");
const ActionZone = require("./actionZone");
const TitleScreen = require("./titleScreen")
// const Surface = require("./surface");
import { Surface } from "./surface";
const { setUpKeyHandlers } = require("./util");

export class Game{
    constructor(ctx){
        this.player = new Player();
        this.surface = new Surface(ctx);
        this.actionZone = new ActionZone();
        this.titleScreen = new TitleScreen();
        this.frame = 0;
        
        setUpKeyHandlers(this.player, this.surface);
    }

    drawGame(ctx){
        this.frame++;
        if (this.frame < 300){
            this.titleScreen.drawSSRI(ctx);
        }else{
            this.player.updatePlayer(this.surface, this.actionZone);
            this.player.drawPlayer(ctx);
        }
    }
}

// module.exports = Game;