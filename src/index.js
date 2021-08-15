import { renderBKG } from "./scripts/background";
import Surface from "./scripts/surface";

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

    let walkable = new Surface();
    let dr = walkable.draw.bind(walkable);
    
    function step(){
        dr(ctx);
        window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);


    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(10, 10, 50, 50);

    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(30, 30, 50, 50);

   
})