
export function renderBKG(ctx){
   
    var img = new Image();

    img.src = './src/assets/backg.png';
    
    img.onload = function(){
        ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
    }
};

