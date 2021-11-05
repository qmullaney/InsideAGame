# Inside: A Game
Check out 
## About the game
In March of 2021, Bo Burnham released his Netflix 
special, "Inside", in the middle of the pandemic. 
Written, recorded, and filmed in one room by on man, 
the special revolves around the comic's sense of isolation 
and depression and his general pessimistic view of society.

After the intermission and another song about anxiety,
Bo Burnham pretends to live stream a video game called 
'Inside' by SSRI Interactive. Bo plays himself stuck in
a room, where his character's only options are to cry,
find a flashlight, and play the piano. I will recreate
this game. 

---

## Technologies, Libraries, APIs
- Javascript for game logic
- The Canvas API to manage images and draw invisible boundaries with circles and squares
- Webpack to manage JS code
- Npm to manage project dependencies 

## Brief Look at Inside
Start your day stuck inside a room     
![Inside: A Game at a glance](/src/assets/ezgif-7-a4eaefffe1ab.gif)


Finish your day when you complete all of the activities    
![Inside: A Game at a glance](/src/assets/ezgif-6-9ee97d54bd88.gif)

## Boundary Checking Code
Here we have the boundary checking loop. This for loop cycles though the different boundaries checks whether player has encroached onto them.
```jsx
for (let i = 0; i < this.boundaries.length; i++){
            let el = this.boundaries[i];
            if (el.type == "circle"){
                let dx = player.x - el.x;
                let dy = player.y - el.y;
                
                let dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < el.radius) {
                    collided = true;
                }

            }else if (el.type == "lineTop"){
                if (el.y > player.y) {
                    collided = true;
                }

            }else if (el.type == "lineBot"){
                if (el.y <= player.y) {
                    collided = true;
                }
            }else{
                if (el.x <= player.x && el.y >= player.y) {
                    collided = true;
                }
            }
        }
```
Below is an example of how the above code gets used. ```collision()``` is comprised in part by the code above.    
We apply the ```this.speed``` to ```this.y``` and check whether the player collides into a boundary. If it does, we remove that ```this.y``` change.
```jsx
if (this.up) {
                this.lastMoved = "back";
                this.y -= this.speed;
                if (surface.collision(this)){
                    this.y += this.speed;
                }
            }
```
