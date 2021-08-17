export function setUpKeyHandlers(player, surface){
    document.addEventListener('keydown', e => {
        switch (e.keyCode) {
            case 37:
                player.left = true;
                // if (surface.collision(player)) player.left = false;
                break
            case 39:
                player.right = true;
                // if (surface.collision(player)) player.right = false;
                break
            case 38:
                player.up = true;
                // if (surface.collision(player)) player.up = false;
                break
            case 40:
                player.down = true;
                // if (surface.collision(player)) player.down = false;
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

