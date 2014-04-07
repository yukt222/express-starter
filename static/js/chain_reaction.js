$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;
  var color = ['red','green','yellow','blue','black'];

  var numBalls = 10
  var balls = [];
  for ( var i = 0; i<numBalls;i++){
    var bi = {x:Math.random()*canvas.width, y:Math.random()*canvas.height, radius:10, vx: (Math.random()-0.5)*20, vy: (Math.random()-0.5)*20, color: color[Math.floor(Math.random()*5)]};
    balls.push(bi)
  }
  var drawCircle = function(x, y, radius, color) {
    context.beginPath();
    context.strokeStyle=color;
    context.arc(x,y,radius,0,Math.PI*2);
    context.stroke();
    context.fillStyle= color;
    context.fill();
    context.closePath();
  };
  

  // PUT STUFF HERE

  // Run an interation of the game
  var updateGame = function() {
    context.clearRect(0,0,canvas.width,canvas.height);
    for (var i = 0;i<balls.length;i++){
    if((balls[i].vx>0 && balls[i].x+balls[i].radius+balls[i].vx>=canvas.width)
      ||(balls[i].vx<0 && balls[i].x-balls[i].radius+balls[i].vx<=0)){
      balls[i].vx = -balls[i].vx;
    }
    if((balls[i].vy>0 && balls[i].y+balls[i].radius+balls[i].vy>=canvas.height)
      ||(balls[i].vy<0 && balls[i].y-balls[i].radius+balls[i].vy<=0)){
      balls[i].vy = -balls[i].vy;
    }
    drawCircle(balls[i].x,balls[i].y,balls[i].radius,balls[i].color);
    balls[i].x += balls[i].vx;
    balls[i].y += balls[i].vy;
  };
  requestAnimationFrame(updateGame);
  };

  // Handle a canvas click event
  $('#game_canvas').click(function(e) {
    // Find the mouse x and y relative to the top-left corner of the canvas
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    var b = {x: x, y: y, radius:10, vx: (Math.random()-0.5)*20, vy: (Math.random()-0.5)*20, color: color[Math.floor(Math.random()*5)]};
    balls.push(b)
  });

  updateGame();
});
