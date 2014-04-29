$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;
  var color = ['red','green','yellow','blue','black'];

  var reactions =[];
  var numBalls = 10;
  var balls = [];
  var radius = 30;
  for ( var i = 0; i<numBalls;i++){
    var bi = {x:Math.random()*canvas.width, y:Math.random()*canvas.height, radius:radius, vx: (Math.random()-0.5)*10, vy: (Math.random()-0.5)*10, color: color[Math.floor(Math.random()*5)]};
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
    for (var i =0;i<reactions.length;i++){
      drawCircle(reactions[i].x,reactions[i].y,reactions[i].radius,reactions[i].color);
    }
    for (var i=0;i<reactions.length;i++){
      if(reactions[i].radius<30){
        reactions[i].radius++;
      }
    }
    for (var i = 0; i < balls.length; i++) {
      var collided = "False" ;
      for (var j = 0; j < reactions.length; j++) {
        xdiff= balls[i].x-reactions[j].x;
        ydiff= balls[i].y-reactions[j].y;
        dist = Math.sqrt(xdiff*xdiff+ydiff*ydiff);
        if(dist<(balls[i].radius+reactions[j].radius)){
          collided = "True";
        }
      }
      if (collided == "True"){
        balls[i].raidus=1;
        var x = balls[i].x;
        var y = balls[i].y;
        var b = {x: x, y: y, radius:1, color: color[Math.floor(Math.random()*5)]};
        reactions.push(b);
        balls.splice(i,1);
        i--;
      }
    }    
  requestAnimationFrame(updateGame);
  };

  // Handle a canvas click event
  $('#game_canvas').click(function(e) {
    // Find the mouse x and y relative to the top-left corner of the canvas
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    var b = {x: x, y: y, radius:1, color: color[Math.floor(Math.random()*5)]};
    reactions.push(b)
  });

  updateGame();
});
