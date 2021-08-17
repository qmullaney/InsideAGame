export function setUpKeyHandlers(player, surface){
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
            case 68:
                player.status = 'SITTING'
                break
            case 69:
                if (player.status == 'SITTING'){
                    player.status = 'STANDING'
                    player.x = 665;
                    player.y = 595;
                }
                break;
            case 88:
                player.cryFrame = 1;
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
}

