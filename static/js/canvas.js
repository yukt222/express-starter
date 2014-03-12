$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  $('#p1').click(function() {
    context.strokeRect(50,50,100,30);
  });

  $('#p2').click(function() {
    context.strokeRect(100,100,30,30);
  });
  $('#p3').click(function() {
    context.beginPath();
    context.arc(0,0,50,0.1,Math.PI/2);
    context.closePath();
    context.stroke();
  });
  $('#p4').click(function() {
    context.beginPath();
    context.arc(100,100,50,0,Math.PI*2);
    context.closePath();
    context.stroke();
  });
  $('#p5').click(function() {
    context.beginPath();
    context.moveTo(100,100);
    context.lineTo(1000,1000);
    context.closePath();
    context.stroke();
  });
  $('#p6').click(function() {
    context.strokeStyle='green';
    context.strokeRect(200,50,100,30);
  });
  $('#p7').click(function() {
    context.beginPath();
    context.strokeStyle='red';
    context.arc(200,100,50,0,Math.PI*2);
    context.stroke();
    context.fillStyle='red';
    context.fill();
    context.closePath();
  });
  $('#p8').click(function() {
    context.beginPath();
    context.strokeStyle='blue';
    context.strokeRect(350,50,100,30);
    context.fillStyle='yellow';
    context.fillRect(350,50,100,30);
    context.closePath();
  });
  $('#p9').click(function() {
    context.beginPath();
    for (var i=1; i<=5; i++){
      context.strokeRect(50*(i-1),100,50,50);
    }
    context.closePath();
  });
  $('#p10').click(function() {
    context.beginPath();
    for (var i=1; i<=100; i++){
      context.strokeRect(5*(i-1),50,5,5);
    }
    context.closePath();
  });
  $('#p11').click(function() {
    context.beginPath();
    for (var i=1; i<=100; i++){
      for (var j=1; j<=100; j++){
        context.strokeRect(5*(i-1),50*(j-1),5,5);
      }
    }
    context.closePath();
  });
  $('#p12').click(function() {
    for (var i=1; i<=20; i++){
      context.beginPath();
      context.arc(300,300,5+5*i,0,Math.PI*2);
      context.stroke();
      context.closePath();
    }
  });



 



  //---------------------------------------------------------------------------
  //Write your code for p1-p12 here
  //

});
