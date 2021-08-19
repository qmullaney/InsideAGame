class Player{
    constructor(){
        this.boSitting = new Image(); this.boSitting.src = './src/assets/bo-sitting.png';
        this.boSittingP1 = new Image(); this.boSittingP1.src = './src/assets/piano/bo-piano-1.png';
        this.boSittingP2 = new Image(); this.boSittingP2.src = './src/assets/piano/bo-piano-2.png';
        this.boSittingP3 = new Image(); this.boSittingP3.src = './src/assets/piano/bo-piano-3.png';
        this.boSittingP4 = new Image(); this.boSittingP4.src = './src/assets/piano/bo-piano-4.png';
        this.boSittingMusic = new Image(); this.boSitting.src = './src/assets/bo-sitting.png';
        this.boSittingCrying1 = new Image(); this.boSittingCrying1.src = './src/assets/crying/bo-sitting-crying1.png';
        this.boSittingCrying2 = new Image(); this.boSittingCrying2.src = './src/assets/crying/bo-sitting-crying2.png';
        this.boStanding = new Image(); this.boStanding.src = './src/assets/standing/bo-standing-forewards.png';
        this.boStandingCrying1 = new Image(); this.boStandingCrying1.src = './src/assets/crying/bo-standing-crying1.png';
        this.boStandingCrying2 = new Image(); this.boStandingCrying2.src = './src/assets/crying/bo-standing-crying2.png';
        this.boStandingDoor1 = new Image(); this.boStandingDoor1.src = './src/assets/door/bo-handle-up.png';
        this.boStandingDoor2 = new Image(); this.boStandingDoor2.src = './src/assets/door/bo-handle-down.png';
        this.boStandingLeft = new Image(); this.boStandingLeft.src = './src/assets/standing/bo-standing-left.png';
        this.boStandingRight = new Image(); this.boStandingRight.src = './src/assets/standing/bo-standing-right.png';
        this.boShining = new Image(); this.boShining.src = './src/assets/shining/bo-flashlight-front.png';
        this.boShiningLeft = new Image(); this.boShiningLeft.src = './src/assets/shining/bo-flashlight-left.png';
        this.boShiningRight = new Image(); this.boShiningRight.src = './src/assets/shining/bo-flashlight-right.png';
        this.flashlight = new Image(); this.flashlight.src = './src/assets/flashlight.png';
        this.inputStatus = "STANDING";
        this.status = "STANDING";
        this.x = 665;
        this.y = 595;
        this.speed = 4;
        this.up = false;
        this.down = false;
        this.left = false;
        this.right = false;
        this.lastMoved = "front";
        this.leftIsh = false;
        this.cryFrame = 0;
        this.doorFrame = 0;
        this.musicFrame = 0;
        this.accomplishments = {flashlight: false, piano: false, door: false, cry: false};
        this.over = false;
        this.end = document.querySelector("#end");
        this.end.style.display = "none";
    }



    updatePlayer(surface, actionZone){
        if (this.status != 'SITTING' && this.cryFrame == 0){
            if (this.up) {
                this.lastMoved = "back";
                this.y -= this.speed;
                if (surface.collision(this)){
                    this.y += this.speed;
                }
            }
            if (this.left) {
                this.lastMoved = "left";
                this.leftIsh = true;
                this.x -= this.speed;
                if (surface.collision(this)){
                    this.x += this.speed;
                }
            }
            if (this.right) {
                this.leftIsh = false;
                this.lastMoved = "right";
                this.x += this.speed;
                if (surface.collision(this)){
                    this.x -= this.speed;
                }
            }
            if (this.down) {
                this.lastMoved = "front";
                this.y += this.speed;
                if (surface.collision(this)){
                    this.y -= this.speed;
                }
            }
        }
        console.log(this.x + ", " + this.y);
        let area = actionZone.getPosition(this);

        if (this.cryFrame > 0){
            if (this.status == 'SHINING') this.status = 'STANDING';
            this.cryFrame += .5;
            if (this.cryFrame > 99){
                this.cryFrame = 0;
            }
        }

        if (this.doorFrame == 1 && area != 'door'){
            this.doorFrame = 0;
        }

        if (this.doorFrame > 0){
            this.status = 'STANDING';
            this.x = 460;
            this.y = 510
            this.doorFrame++;
            if (this.doorFrame > 99){
                this.doorFrame = 0;
            }
        }
        if (this.musicFrame == 1 && this.status != "SITTING"){
            this.musicFrame = 0;
        }

        if (this.musicFrame > 0){
            this.musicFrame += 2;
            if (this.musicFrame > 500){
                this.musicFrame = 0;
            }
        }

        if (this.inputStatus == 'SITTING' && (this.status == 'STANDING' || this.status == 'SHINING') && area == 'chair'){
            this.status = 'SITTING';
            this.x = 725;
            this.y = 595;
        }

        if (this.inputStatus == 'SHINING' && area == 'flashlight'){
            this.status = 'SHINING';
        }

        if (this.inputStatus == 'STANDING' && this.status == 'SITTING'){
            this.status = 'STANDING';
            this.x = 725;
            this.y = 620;
        }

        if (this.accomplishments.piano && this.accomplishments.door && this.accomplishments.cry && this.accomplishments.flashlight){
            this.over = true;
        }

        this.inputStatus = "";

    }
        
        


    drawPlayer(ctx){

        if (this.over){
            this.end.style.display = "block";
        }

        if (this.status != 'SHINING'){
            ctx.drawImage(this.flashlight, 180, 225);
        }
        
        if (this.status == 'SITTING'){
            if (this.cryFrame > 0){
                let tens = Math.floor(this.cryFrame / 10);
                tens = tens % 10;
                if (tens % 2 == 0){
                    ctx.drawImage(this.boSittingCrying1, this.x - 85, this.y - 285);
                }else{
                    ctx.drawImage(this.boSittingCrying2, this.x - 85, this.y - 285);
                }
                this.accomplishments.cry = true;
            }else if (this.musicFrame > 0){
                let tens = Math.floor(this.musicFrame / 30);
                tens %= 4;
                console.log(tens);
                this.accomplishments.piano = true;
                switch (tens){
                    case 0:
                        ctx.drawImage(this.boSittingP1, this.x - 70, this.y - 300);
                        break
                    case 1:
                        ctx.drawImage(this.boSittingP2, this.x - 70, this.y - 300);
                        break
                    case 2:
                        ctx.drawImage(this.boSittingP3, this.x - 70, this.y - 300);
                        break
                    case 3:
                        ctx.drawImage(this.boSittingP4, this.x - 70, this.y - 300);
                        break
                }
            }else{
                ctx.drawImage(this.boSitting, this.x - 110, this.y - 300);
            }
        }else if (this.status == 'STANDING'){
            if (this.cryFrame > 0){
                let tens = Math.floor(this.cryFrame / 10);
                tens = tens % 10;
                
                if (tens % 2 == 0){
                    // ctx.drawImage(this.boStandingCrying1, this.x - 70, this.y - 380);
                    ctx.drawImage(this.boStandingCrying1, this.x - 70 - (this.xScale()/2), this.y - 380 - this.yScale(), this.boStandingCrying1.width + this.xScale(), this.boStandingCrying1.height + this.yScale());
                }else{
                    ctx.drawImage(this.boStandingCrying2, this.x - 70 - (this.xScale()/2), this.y - 380 - this.yScale(), this.boStandingCrying2.width + this.xScale(), this.boStandingCrying2.height + this.yScale());
                }
                this.accomplishments.cry = true;
            }else if (this.doorFrame > 0){
                let tens = Math.floor(this.doorFrame / 10);
                tens = tens % 10;
                if (tens % 2 == 0){
                    ctx.drawImage(this.boStandingDoor1, this.x - 110, this.y - 400);
                }else {
                    ctx.drawImage(this.boStandingDoor2, this.x - 110, this.y - 400);
                }
                this.accomplishments.door = true;
            }else if (this.lastMoved == 'front'){
                ctx.drawImage(this.boStanding, this.x - 110 - (this.xScale()/2), this.y - 420 - this.yScale(), this.boStanding.width + this.xScale(), this.boStanding.height + this.yScale());
            }else if (this.lastMoved == 'left'){
                ctx.drawImage(this.boStandingLeft, this.x - 110 - (this.xScale()/2), this.y - 400 - this.yScale(), this.boStandingLeft.width + this.xScale(), this.boStandingLeft.height + this.yScale());
            }else if (this.lastMoved == 'right'){
                ctx.drawImage(this.boStandingRight, this.x - 110 - (this.xScale()/2), this.y - 400 - this.yScale(), this.boStandingRight.width + this.xScale(), this.boStandingRight.height + this.yScale());
            }else if (this.lastMoved == 'back'){
                if (this.leftIsh){
                    ctx.drawImage(this.boStandingLeft, this.x - 110 - (this.xScale()/2), this.y - 400 - this.yScale(), this.boStandingLeft.width + this.xScale(), this.boStandingLeft.height + this.yScale());
                }else{
                    ctx.drawImage(this.boStandingRight, this.x - 110 - (this.xScale()/2), this.y - 400 - this.yScale(), this.boStandingRight.width + this.xScale(), this.boStandingRight.height + this.yScale());
                }
            }
        }else if (this.status == 'SHINING'){
            this.accomplishments.flashlight = true;
            if (this.cryFrame > 0){
                ctx.drawImage(this.boStandingCrying, this.x - 110 - (this.xScale()/2), this.y - 400 - this.yScale(), this.boStandingCrying.width + this.xScale(), this.boStandingCrying.height + this.yScale());
            }else if (this.doorFrame > 0){
                // ctx.drawImage(this.boStandingDoor, this.x - 110, this.y - 400);
                ctx.drawImage(this.boStandingDoor, this.x - 110 - (this.xScale()/2), this.y - 400 - this.yScale(), this.boStandingDoor.width + this.xScale(), this.boStandingDoor.height + this.yScale());
            }else if (this.lastMoved == 'front'){
                // ctx.drawImage(this.boShining, this.x - 110, this.y - 400);
                ctx.drawImage(this.boShining, this.x - 110 - (this.xScale()/2), this.y - 400 - this.yScale(), this.boShining.width + this.xScale(), this.boShining.height + this.yScale());
            }else if (this.lastMoved == 'left'){
                // ctx.drawImage(this.boShiningLeft, this.x - 180, this.y - 400);
                ctx.drawImage(this.boShiningLeft, this.x - 180 - (this.xScale()/2), this.y - 400 - this.yScale(), this.boShiningLeft.width + this.xScale(), this.boShiningLeft.height + this.yScale());
            }else if (this.lastMoved == 'right'){
                // ctx.drawImage(this.boShiningRight, this.x - 80, this.y - 400);
                ctx.drawImage(this.boShiningRight, this.x - 80 - (this.xScale()/2), this.y - 400 - this.yScale(), this.boShiningRight.width + this.xScale(), this.boShiningRight.height + this.yScale());
            }else if (this.lastMoved == 'back'){
                if (this.leftIsh){
                    // ctx.drawImage(this.boShiningLeft, this.x - 110, this.y - 400);
                    ctx.drawImage(this.boShiningLeft, this.x - 180 - (this.xScale()/2), this.y - 400 - this.yScale(), this.boShiningLeft.width + this.xScale(), this.boShiningLeft.height + this.yScale());

                }else{
                    // ctx.drawImage(this.boShiningRight, this.x - 110, this.y - 400);
                    ctx.drawImage(this.boShiningRight, this.x - 80 - (this.xScale()/2), this.y - 400 - this.yScale(), this.boShiningRight.width + this.xScale(), this.boShiningRight.height + this.yScale());

                }
            }
        }
    }

    yScale(){
        return (this.y - 500)* .5;
    }
    xScale(){
        return this.yScale()*(1/3)
    }
}

module.exports = Player;