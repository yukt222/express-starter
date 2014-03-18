$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  var drawSquare = function(x, y, sideLen, color) {
    context.beginPath();
    context.strokeStyle=color;
    context.strokeRect(x,y,sideLen,sideLen);
    context.closePath();
  };

  var drawCircle = function(x, y, radius, color) {
    context.beginPath();
    context.strokeStyle=color;
    context.arc(x,y,radius,0,Math.PI*2);
    context.stroke();
    context.closePath();
  };

  var drawTriplet = function(x, y, radius, color) {
    drawCircle(x,y,radius,color);
    drawCircle(x-radius/1.732,y+radius,radius,color);
    drawCircle(x+radius/1.732,y+radius,radius,color);
  };

  // Write drawTriplet function here

  // Challenge:
  // Write drawTriangle, drawTriforce, drawTripleTriforce,
  // drawSierpinski functions here

  $('#p1').click(function() {
    drawSquare(100, 200, 50, 'blue');
  });

  $('#p2').click(function() {
    drawSquare(300, 100, 25, 'green');
  });

  $('#p3').click(function() {
    drawCircle(100, 200, 50, 'red');
  });

  $('#p4').click(function() {
    drawCircle(300, 100, 25, 'black');
  });

  $('#p5').click(function() {
    drawCircle(250, 300, 50, 'green');
    drawCircle(350, 300, 50, 'green');
    drawCircle(300, 250, 50, 'green');
    drawCircle(300, 350, 50, 'green');
    drawCircle(300, 300, 50, 'blue');
    drawSquare(250, 250, 100, 'red');
  });
  $('#p6').click(function() {
    drawTriplet(200,200,50,'green');
  });
  $('#p7').click(function() {
    drawTriplet(400,200,50,'blue');
  });
  $('#p8').click(function() {
    drawTriplet(100,100,20,'green');
    drawTriplet(100,400,20,'red');
    drawTriplet(450,100,20,'black');
    drawTriplet(450,400,20,'yellow');
  });


});
