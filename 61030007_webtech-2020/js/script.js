//navbar manu
$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
    });

});

//santa script
context = c.getContext('2d');
const santa = new Image();
santa.src = "https://pngimg.com/uploads/santa_claus/santa_claus_PNG38508.png"
santaX = santaDY = score = bestScore = 0;
santaSize = 100;
pipeWidth = topPipeBottomY = 50;
interval = 25;
santaY = pipeGap = 200;
canvasSize = pipeX = 500;
c.onclick = () => { santaDY = 8 }
setInterval(() => {
    context.fillStyle = "skyblue";
    context.fillRect(0, 0, canvasSize, canvasSize); // Draw sky
    santaY -= santaDY -= 0.5; // Gravity
    context.drawImage(santa, santaX, santaY, santaSize, santaSize); // Draw santa
    context.fillStyle = "brown";
    pipeX -= 10; // Move pipe
    pipeX < -pipeWidth && ((pipeX = canvasSize), (topPipeBottomY = pipeGap * Math.random()))
    // reset pipe and random pipe gap
    context.fillRect(pipeX, 0, pipeWidth, topPipeBottomY); // Draw top pipe
    context.fillRect(pipeX, topPipeBottomY + pipeGap, pipeWidth, canvasSize); // Draw bottom pipe
    context.fillStyle = "black";
    context.fillText(score++, 10, 15); // Increase and draw score
    bestScore = bestScore < score ? score : bestScore; // New best score
    context.fillText(`Best: ${bestScore}`, 10, 25); // Draw best score
    (((santaY < topPipeBottomY || santaY > topPipeBottomY + pipeGap) && pipeX < santaSize) // santa hit pipe
    || santaY > canvasSize) && // santa falls of screen
    ((santaDY = 0), (santaY = 200), (pipeX = canvasSize), (score = 0)); // santa died
}, interval)