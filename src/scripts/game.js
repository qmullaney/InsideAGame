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
        this.startGame = false;
        this.frame = 0;
        this.dir = document.querySelector("#directions");
        this.enter = document.querySelector("#enter");
        this.day = document.querySelector("#day");
        this.dayFrame = 0;
        this.restart = false;

        setUpKeyHandlers(this.player, this);
    }

    drawGame(ctx){
        this.frame++;
        if (this.frame < 100){
            this.titleScreen.drawBlank(ctx);
        }else if (this.frame < 400){
            this.titleScreen.drawSSRI(ctx);
        }else if (this.frame < 500){
            this.titleScreen.drawBlank(ctx);
        }else if (this.frame < 5000 && !this.startGame){
            this.titleScreen.drawInside(ctx);
            if (this.frame > 700){
                this.enter.style.display = 'block';
            }
        }else{
            if (this.dayFrame > 50 && this.dayFrame < 400){
                // debugger
                this.day.style.display = "block";
            }else{
                this.day.style.display = "none";
                if (this.dayFrame > 420 ){
                    this.dir.style.display = 'block';
                }
            }
            if (this.player.over){
                this.dir.style.display = 'none';
            }
            this.dayFrame++;
            this.enter.style.display = 'none';
            this.player.updatePlayer(this.surface, this.actionZone);
            this.player.drawPlayer(ctx);
            
        }
    }
}

// module.exports = Game;