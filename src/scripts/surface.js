export default class Surface{
    constructor(){
        this.speed = 10;
        this.circle1 = {radius: 20, x: 5, y: 5};
        this.circle2 = {radius: 800, x: -100, y: 1000};
        let that = this;
        document.addEventListener('keydown', e => {
            switch (e.keyCode) {
                case 37:
                    that.circle1.x -= this.speed
                    if (this.collision()) that.circle1.x += this.speed
                    break
                case 39:
                    that.circle1.x += this.speed
                    if (this.collision()) that.circle1.x -= this.speed
                    break
                case 38:
                    that.circle1.y -= this.speed
                    if (this.collision()) that.circle1.y += this.speed
                    break
                case 40:
                    that.circle1.y += this.speed
                    if (this.collision()) that.circle1.y -= this.speed
                    break
            }
        })


        document.addEventListener('keyup', e => {
            // debugger
            switch (e.keyCode) {
                case 37:
                    that.circle1.x += 0
                    break
                case 39:
                    that.circle1.x += 0
                    break
                case 38:
                    that.circle1.y += 0
                    break
                case 40:
                    that.circle1.y -= 0
                    break
            }
        });
        

       
    }

    collision(){
  
        let dx = this.circle1.x - this.circle2.x;
        let dy = this.circle1.y - this.circle2.y;

        let dist = Math.sqrt(dx * dx + dy * dy);
        return dist < this.circle1.radius + this.circle2.radius;

    }

    draw(ctx){
        ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);

        ctx.beginPath();
        ctx.arc(this.circle1.x, this.circle1.y, this.circle1.radius, 0, 2*Math.PI, true);
        ctx.fill();
        // ctx.stroke();

        // ctx.beginPath();
        // ctx.arc(this.circle2.x, this.circle2.y, this.circle2.radius, 0, 2*Math.PI, true);
        // ctx.fill();
        // ctx.stroke();

        
    }

}

 // let cnvsW = ctx.canvas.width;
        // let cnvsH = ctx.canvas.height;

        // this.leftCornerX = cnvsW * .325;
        // this.leftCornerY = cnvsH * .78;

        // this.dresserX = cnvsW * .19;
        // this.dresserY = cnvsH * .82;

        // this.stuffLeftX = cnvsW * .36;
        // this.stuffLeftY = cnvsH * .99;

        // this.chairX = cnvsW * .58;
        // this.chairY = cnvsH * .9;

        // this.stuffRightX = cnvsW * .7;
        // this.stuffRightY = cnvsH * .99;

        // this.midWallX = cnvsW * .57;
        // this.midWallY = cnvsH * .78;

        // this.pianoX = cnvsW * .8;
        // this.pianoY = cnvsH * .9;


        // ctx.beginPath();
        // ctx.moveTo(this.leftCornerX, this.leftCornerY);
        // ctx.lineTo(this.dresserX, this.dresserY);
        // ctx.lineTo(this.stuffLeftX, this.stuffLeftY);
        // ctx.lineTo(this.stuffRightX, this.stuffRightY);
        // ctx.lineTo(this.pianoX, this.pianoY);
        // ctx.lineTo(this.chairX, this.chairY);
        // ctx.lineTo(this.midWallX, this.midWallY);
        
        // ctx.fill();