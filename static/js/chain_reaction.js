$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;
  var gameState = "menu";
  var menuText = "Click to play!";
  var levels = [];
  var num = [1,2,3,4,5,6,7,8,9];
  var minReactions = [1,5,10,15,20,30,40,50,60];
  var numBalls = [5,15,24,30,35,40,48,55,64];
  for (var i =0;i<9;i++){
    var level = {num:num[i],minReactions:minReactions[i],numBalls:numBalls[i]};
    levels.push(level);
  }
  var begin = "True";

  var curLevel = 7;
  var levelText = "Level 1 - React 1 out of 5 balls";
  var color = ['red','green','yellow','blue','black'];

  var reactions =[];
  var reacting = "False";
  var numReacted = 0;
  var balls = [];
  var radius = 10;
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
    if (gameState == "menu"){
      if (begin == "True"){
      context.fillStyle = "black";
      context.font = "20px Arial";
      context.fillText(menuText,300,280);
      }
      else if (begin == "Done"){
        menuText1 = "Congratulations! You won the game";
        curLevel = 0;
        numReacted = 0;
        context.fillStyle = "black";
        context.font = "20px Arial";
        context.fillText(menuText,300,280);
        context.fillText(menuText1,300,300);
      }
      else {
        if(numReacted>=levels[curLevel].minReactions){
          if ( levels[curLevel].num == 9){begin = "Done";}
          menuText1 = "Great! Click to next level";
        }
        else {menuText1 = "Click to try again!"}
      context.fillStyle = "black";
      context.font = "20px Arial";
      context.fillText(menuText,300,280);
      context.fillText(menuText1,300,300);
      }
    }
    
    else if (gameState == "playing"){
    
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
      reactions[i].timer++;
      if (reactions[i].timer>200){
        reactions[i].radius--;
      } else if(reactions[i].radius<30){
        reactions[i].radius++;
      }
      if (reactions[i].radius == 0){
        reactions.splice(i,1);
        i--;
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
        var col = balls[i].color;
        var b = {x: x, y: y, radius:1, color: col,timer:0};
        reactions.push(b);
        balls.splice(i,1);
        i--;
        numReacted++;
      }
    }  
    if(reacting == "True" && reactions.length == 0){
      menuText = "Game over! You reacted "+numReacted+" balls";
      gameState = "menu"
      context.fillStyle = "black";
      context.font = "20px Arial"
      context.fillText(menuText,300,280);
    }  
  }
  requestAnimationFrame(updateGame);
  context.fillStyle = "black";
  context.fillText("Reactions: "+numReacted,10,20);
  context.fillText(levelText,10,40);
  };

  // Handle a canvas click event
  $('#game_canvas').click(function(e) {
    // Find the mouse x and y relative to the top-left corner of the canvas
    if (gameState == "menu"){
      gameState = "playing";
      reacting = "False";
      begin = "False";
      if (numReacted>=levels[curLevel].minReactions){
        curLevel++;
      }
      numReacted = 0;
      levelText = "Level "+levels[curLevel].num+" - React "+levels[curLevel].minReactions+" out of "+levels[curLevel].numBalls+" balls";
      balls=[];
      for ( var i = 0; i<levels[curLevel].numBalls;i++){
        var bi = {x:Math.random()*canvas.width, y:Math.random()*canvas.height, radius:radius, vx: (Math.random()-0.5)*10, vy: (Math.random()-0.5)*10, color: color[Math.floor(Math.random()*5)]};
        balls.push(bi)
      }
    }
    else
      {if (reacting == "False") {
      var x = e.pageX - $(this).offset().left;
      var y = e.pageY - $(this).offset().top;
      var b = {x: x, y: y, radius:1, color: color[Math.floor(Math.random()*5)], timer:0};
      reactions.push(b)
    }
    reacting = "True";}
  });

  updateGame();
});
