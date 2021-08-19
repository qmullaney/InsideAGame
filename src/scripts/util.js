export function setUpKeyHandlers(player, game){
    document.addEventListener('keydown', e => {
        switch (e.keyCode) {
            case 37:
                player.left = true;
                break
            case 39:
                player.right = true;
                break
            case 38:
                player.up = true;
                break
            case 40:
                player.down = true;
                break
            case 83: //s
                if (player.status == 'SITTING'){
                    player.inputStatus = 'STANDING'
                    player.x = 665;
                    player.y = 595;
                }else{
                    player.inputStatus = 'SITTING'
                }
                break;
            case 65: //a
                player.cryFrame = 1
                break
            case 90: //z
                player.musicFrame = 1
                player.doorFrame = 1
                player.inputStatus = 'SHINING'
                break
            

        }
    })

    document.addEventListener('keyup', e => {
        switch (e.keyCode) {
            case 37:
                player.left = false;
                break
            case 39:
                player.right = false;
                break
            case 38:
                player.up = false;
                break
            case 40:
                player.down = false;
                break
        }
    })
    document.addEventListener('click', e => {
        if (game.frame >= 500){
            game.startGame = true;
        }
        if (player.over){
            game.restart = true;
        }
    })
}

