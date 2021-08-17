class Player{
    constructor(){
        this.img = new Image();
        this.img.src = './src/assets/bo-standing-forewards.png';
        this.status = "SITTING";
        this.x = 665;
        this.y = 595;
        this.speed = 5;
        this.up = false;
        this.down = false;
        this.left = false;
        this.right = false;
    }

    drawPlayer(ctx, surface){
        // debugger
        if (this.up) {
            this.y -= this.speed;
            if (surface.collision(this)){
                this.y += this.speed;
            }
        }
        if (this.down) {
            this.y += this.speed;
            if (surface.collision(this)){
                this.y -= this.speed;
            }
        }
        if (this.left) {
            this.x -= this.speed;
            if (surface.collision(this)){
                this.x += this.speed;
            }
        }
        if (this.right) {
            this.x += this.speed;
            if (surface.collision(this)){
                this.x -= this.speed;
            }
        }
        
    
        console.log(this.x + ", " + this.y)

        // ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
        ctx.drawImage(this.img, 400, 200, 5, 5, this.x, this.y, 10, 300);
    }
}

module.exports = Player;