class Player{
    constructor(){
        this.imgStanding = new Image();
        this.imgStanding.src = './src/assets/bo-standing-forewards.png';
        this.imgSitting = new Image();
        this.imgSitting.src = './src/assets/bo-sitting.png'
        this.inputStatus = "STANDING";
        this.status = "STANDING";
        this.x = 665;
        this.y = 595;
        this.speed = 5;
        this.up = false;
        this.down = false;
        this.left = false;
        this.right = false;
        this.lastMoved = "front";
        this.leftIsh = false;
        this.frame = 0;
        this.cryFrame = 0;
        this.doorFrame = 0;
        this.musicFrame = 0;
    }



    updatePlayer(surface, actionZone){
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

        console.log(this.x + ", " + this.y);
        let area = actionZone.getPosition(this);

        if (this.cryFrame > 0){
            this.cryFrame++;
            if (this.cryFrame > 99){
                this.cryFrame = 0;
            }
        }

        if (this.doorFrame == 1 && area != 'door'){
            this.doorFrame = 0;
        }

        if (this.doorFrame > 0){
            this.doorFrame++;
            if (this.doorFrame > 99){
                this.doorFrame = 0;
            }
        }
        if (this.musicFrame == 1 && this.status != "SITTING"){
            this.musicFrame = 0;
        }

        if (this.musicFrame > 0){
            this.musicFrame++;
            if (this.musicFrame > 99){
                this.musicFrame = 0;
            }
        }

        if (this.inputStatus == 'SITTING' && (this.status == 'STANDING' || this.status == 'SHINING') && area == 'chair'){
            this.status == 'SITTING';
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

        

    }
        
        


    drawPlayer(ctx){

        if (this.status != 'SHINING'){
            ctx.drawImage(this.flashlight, 200, 200);
        }

        if (this.status == 'SITTING'){
            if (this.cryFrame > 0){
                ctx.drawImage(this.boSitting, this.x - 110, this.y - 300);
            }else if (this.musicFrame > 0){
                ctx.drawImage(this.boSittingMusic, this.x - 110, this.y - 300);
            }else{
                ctx.drawImage(this.boSitting, this.x - 110, this.y - 300);
            }
        }else if (this.status == 'STANDING'){
            if (this.cryFrame > 0){
                ctx.drawImage(this.imgStandingCrying, this.x - 110, this.y - 400);
            }else if (this.doorFrame > 0){
                ctx.drawImage(this.imgStandingDoor, this.x - 110, this.y - 400);
            }else if (this.lastMoved == 'front'){
                ctx.drawImage(this.boStanding, this.x - 110, this.y - 400);
            }else if (this.lastMoved == 'left'){
                ctx.drawImage(this.boStandingLeft, this.x - 110, this.y - 400);
            }else if (this.lastMoved == 'right'){
                ctx.drawImage(this.boStandingRight, this.x - 110, this.y - 400);
            }else if (this.lastMoved == 'back'){
                if (this.leftIsh){
                    ctx.drawImage(this.boStandingLeft, this.x - 110, this.y - 400);
                }else{
                    ctx.drawImage(this.boStandingRight, this.x - 110, this.y - 400);
                }
            }
        }else if (this.status == 'SHINING'){
            if (this.cryFrame > 0){
                ctx.drawImage(this.imgStandingCrying, this.x - 110, this.y - 400);
            }else if (this.doorFrame > 0){
                ctx.drawImage(this.imgStandingDoor, this.x - 110, this.y - 400);
            }else if (this.lastMoved == 'front'){
                ctx.drawImage(this.boShining, this.x - 110, this.y - 400);
            }else if (this.lastMoved == 'left'){
                ctx.drawImage(this.boShiningLeft, this.x - 110, this.y - 400);
            }else if (this.lastMoved == 'right'){
                ctx.drawImage(this.boShiningRight, this.x - 110, this.y - 400);
            }else if (this.lastMoved == 'back'){
                if (this.leftIsh){
                    ctx.drawImage(this.boShiningLeft, this.x - 110, this.y - 400);
                }else{
                    ctx.drawImage(this.boShiningRight, this.x - 110, this.y - 400);
                }
            }
        }





        // if (this.status == 'STANDING') {
        //     if (this.lastMoved == "right"){
        //         ctx.drawImage(this.boStandingRight, this.x - 110, this.y - 400);
        //     }else if(this.lastMoved == "left"){
        //         ctx.drawImage(this.boStandingLeft, this.x - 110, this.y - 400);
        //     }else {
        //         ctx.drawImage(this.boStanding, this.x - 110, this.y - 400);
        //     }

        //     // ctx.drawImage(this.flashlight, )
        // }else if (this.status == 'SITTING'){
        //     if (position == 'chair'){
        //         if (this.cry){
        //             this.cryFrame += 1;
        //             if (this.cryFrame < 200){
        //                 this.x = 725;
        //                 this.y = 595;
        //                 ctx.drawImage(this.boSittingCrying, this.x - 110, this.y - 300);
        //             }else {
        //                 this.x = 725;
        //                 this.y = 595;
        //                 ctx.drawImage(this.boSitting, this.x - 110, this.y - 300);
        //                 this.cry = false;
        //                 this.cryFrame = 0;
        //             }
        //         }else{
        //             this.x = 725;
        //             this.y = 595;
        //             ctx.drawImage(this.boSitting, this.x - 110, this.y - 300);
        //         }
        //         // ctx.drawImage(this.flashlight, )
        //     }else{
        //         this.status = 'STANDING';
        //         ctx.drawImage(this.imgStanding, this.x - 110, this.y - 400);
        //         // ctx.drawImage(this.flashlight, )
        //     }
            
        // }else if (this.status == 'SHINING'){
        //     if (position == 'flashlight'){
        //         if (this.)
        //         ctx.drawImage(this.imgFlashlight, this.x - 110, this.y - 400);
        //     }
        // }
    }

    // direction(){
    //     let dir = "";
    //     if (this.down){
    //         dir = "down";
    //     }else if (this.up && this.movedLeft){
    //         dir = "left";
    //     }else if (this.up && !this.movedLeft){
    //         dir = "right";
    //     }
    //     return dir;
    // }
}

module.exports = Player;