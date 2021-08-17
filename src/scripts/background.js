
export function renderBKG(ctx){
   
    var img = new Image();

    img.src = './src/assets/back-bo-finalish.png';
    
    img.onload = function(){
        ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
    }
};

