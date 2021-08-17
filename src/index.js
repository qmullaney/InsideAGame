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

        g.drawGame(ctx);
        window.requestAnimationFrame(step);

        // begin drawing boundaries
        // let wallCircle = {type: "circle", radius: 300, x: 200, y: 250};
        // let leftStuffCircle = {type: "circle", radius: 400, x: 0, y: 900};
        // let rightStuffCircle = {type: "circle", radius: 500, x: 1100, y: 1000};

        // let wallLine = {type: "lineTop", y: ctx.canvas.height * .75}
        // let closeLine = {type: "lineBot", y: ctx.canvas.height * .99}

        // let chair = {type: "bot", x: ctx.canvas.width * .58, y: ctx.canvas.height * .9}

        // ctx.beginPath()
        // ctx.arc(wallCircle.x, wallCircle.y, wallCircle.radius, 0, 2*Math.PI, true);
        // ctx.fill();
        // ctx.beginPath();
        // ctx.arc(leftStuffCircle.x, leftStuffCircle.y, leftStuffCircle.radius, 0, 2*Math.PI, true);
        // ctx.fill();
        // ctx.beginPath();
        // ctx.arc(rightStuffCircle.x, rightStuffCircle.y, rightStuffCircle.radius, 0, 2*Math.PI, true);
        // ctx.fill();
        // ctx.closePath();
        
        
        
        // ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        // ctx.fillRect(0, wallLine.y, 1000, 5);
        // ctx.fillRect(0, closeLine.y, 1000, 5);
        // ctx.fillRect(chair.x, chair.y, 500, -100);


        // let chairInteraction = {type: "chair", radius: 150, x: 730, y: 560}
        // let doorInteraction = {type: "door", radius: 250, x: 390, y: 285}
        // let flashlightInteraction = {type: "flashlight", radius: 90, x: 200, y: 580}


        // ctx.beginPath();
        // ctx.arc(chairInteraction.x, chairInteraction.y, chairInteraction.radius, 0, 2*Math.PI, true);
        // ctx.fill();

        // ctx.beginPath();
        // ctx.arc(doorInteraction.x, doorInteraction.y, doorInteraction.radius, 0, 2*Math.PI, true);
        // ctx.fill();

        // ctx.beginPath();
        // ctx.arc(flashlightInteraction.x, flashlightInteraction.y, flashlightInteraction.radius, 0, 2*Math.PI, true);
        // ctx.fill();

    };
    window.requestAnimationFrame(step);


    

    
})