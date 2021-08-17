class Player{
    constructor(){
        this.imgStanding = new Image();
        this.imgStanding.src = './src/assets/bo-standing-forewards.png';
        this.imgSitting = new Image();
        this.imgSitting.src = './src/assets/bo-sitting.png'
        this.status = "STANDING";
        this.x = 665;
        this.y = 595;
        this.speed = 5;
        this.up = false;
        this.down = false;
        this.left = false;
        this.right = false;
        
    }

    drawPlayer(ctx, surface){
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

        if (this.status == 'STANDING') {
            ctx.drawImage(this.imgStanding, this.x - 110, this.y - 400);
        }else if (this.status == 'SITTING'){
            this.x = 725;
            this.y = 595;
            ctx.drawImage(this.imgSitting, this.x - 110, this.y - 300);
        }
    }
}

module.exports = Player;