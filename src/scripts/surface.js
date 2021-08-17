const Player = require("./player")
export class Surface{
    constructor(ctx){
        this.boundaries = [];

        let wallCircle = {type: "circle", radius: 300, x: 200, y: 250};
        let leftStuffCircle = {type: "circle", radius: 400, x: 0, y: 900};
        let rightStuffCircle = {type: "circle", radius: 500, x: 1100, y: 1000};
        let wallLine = {type: "lineTop", y: ctx.canvas.height * .75}
        let closeLine = {type: "lineBot", y: ctx.canvas.height * .99}
        let chair = {type: "box", x: ctx.canvas.width * .58, y: ctx.canvas.height * .9}

        this.boundaries.push(wallCircle, leftStuffCircle, rightStuffCircle, wallLine, closeLine, chair);
        
    }

    collision(player){
        let collided = false;
        // this.boundaries.forEach(el => {
        //     console.log("hi");
        // })
        for (let i = 0; i < this.boundaries.length; i++){
            let el = this.boundaries[i];
            if (el.type == "circle"){
                let dx = player.x - el.x;
                let dy = player.y - el.y;
                
                let dist = Math.sqrt(dx * dx + dy * dy);
                // console.log(dist)
                if (dist < el.radius) {
                    collided = true;
                    
                    // console.log(`${el.radius} rad, ${el.x}, ${el.y}, player: $el`)
                }

            }else if (el.type == "lineTop"){
                if (el.y > player.y) {

                    // console.log('collided lineTop: ' + el.y + ", " + player.y);
                    collided = true;
                }

            }else if (el.type == "lineBot"){
                if (el.y <= player.y) {
                    collided = true;
                    // console.log('collided lineBot')
                }

            }else{
                if (el.x <= player.x && el.y >= player.y) {
                    collided = true;
                    // console.log('collided box: ' + el.x + " " + el.y + ", " + player.x + " " + player.y);

                }
            }
        }
        
        return collided;
    }
}

// module.exports = Surface;
// export { Surface };