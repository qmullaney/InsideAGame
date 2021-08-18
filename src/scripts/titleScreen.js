class TitleScreen{
    constructor(){
        this.ssri = new Image(); this.ssri.src = './src/assets/titleScreen/ssri.png';
        this.inside = new Image(); this.inside.src = './src/assets/titleScreen/inside.png';
        // this.newGame = new Image(); this.newGame.src = "";
    }

    drawSSRI(ctx){
        ctx.drawImage(this.ssri, 0,0,ctx.canvas.width, ctx.canvas.height);
    }
    
    drawInside(ctx){
        ctx.drawImage(this.inside, 0,0,ctx.canvas.width, ctx.canvas.height);
    }
}

module.exports = TitleScreen;