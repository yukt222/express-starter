$(document).ready(function() {
  //initialize canvas
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var width = canvas.width;
  var height = canvas.height;

  var ball = {
    x: 20,
    y: 20,
    radius: 20,
    vx: 5,
    vy: 5
  }
  var drawCircle = function(x, y, radius, color) {
    context.beginPath();
    context.strokeStyle=color;
    context.arc(x,y,radius,0,Math.PI*2);
    context.stroke();
    context.fillStyle='red';
    context.fill();
    context.closePath();
  };

  //PUT STUFF HERE

  //run an iteration of the game
  var updateGame = function() {
    if((ball.vx>0 && ball.x+ball.radius+ball.vx>=canvas.width)
      ||(ball.vx<0 && ball.x-ball.radius+ball.vx<=0)){
      ball.vx = -ball.vx;
    }
    if((ball.vy>0 && ball.y+ball.radius+ball.vy>=canvas.height)
      ||(ball.vy<0 && ball.y-ball.radius+ball.vy<=0)){
      ball.vy = -ball.vy;
    }
    context.clearRect(0,0,canvas.width,canvas.height);
    drawCircle(ball.x,ball.y,ball.radius,'red');
    ball.x += ball.vx;
    ball.y += ball.vy;
    setTimeout(updateGame,10);
  };

  updateGame();
});
