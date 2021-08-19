import { renderBKG } from "./scripts/background";

import { Game } from './scripts/game'

let bkg_width = 1100
document.addEventListener("DOMContentLoaded", function(e){
    var bkg = document.querySelector("#canvas1");
    bkg.width = bkg_width;
    bkg.height = bkg.width * .6;

    var bkg_ctx = bkg.getContext('2d');

    renderBKG(bkg_ctx);

    
    var canvas = document.querySelector("#canvas2");
    canvas.width = bkg_width;
    canvas.height = bkg_width * .6;
    var ctx = canvas.getContext('2d');

    // let walkable = new Surface();
    // let dr = walkable.draw.bind(walkable);

    let g = new Game(ctx);
    
    function step(){
        ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);

        if (g.restart){
            g = new Game(ctx);
        }
        g.drawGame(ctx);

        window.requestAnimationFrame(step);


    };
    window.requestAnimationFrame(step);
 
})