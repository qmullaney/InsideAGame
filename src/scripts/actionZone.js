class ActionZone {
    constructor(){
        this.actions = [];
        let chairInteraction = {type: "chair", radius: 150, x: 730, y: 560};
        let doorInteraction = {type: "door", radius: 250, x: 390, y: 285};
        let flashlightInteraction = {type: "flashlight", radius: 90, x: 200, y: 580};
        this.actions.push(chairInteraction, doorInteraction, flashlightInteraction);
    }

    getPosition(player){
        let position = 'floor';
        for (let i = 0; i < this.actions.length; i++){
            let el = this.actions[i];

            let dx = player.x - el.x;
            let dy = player.y - el.y;

            let dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < el.radius){
                position = el.type;
            }
        }
        return position;
    }
}

module.exports = ActionZone;