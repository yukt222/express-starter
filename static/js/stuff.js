alert('Long time no see!'); // edit me!

// Problem 1 (Say Hello!) ---------------------------------------------------
$('#say_hello').click(function() {
  alert("Hello world!");
});


// Problem 2 (Houdini) ------------------------------------------------------
$('#disappear').click(function() {
  $('#houdini_text').hide();
});

$('#reappear').click(function() {
  $('#houdini_text').show();
});

// Problem 3 (Tickle Me Pink) -----------------------------------------------
// WRITE CODE HERE
$('#change_color').click(function() {
  $('#tickled_text').css('color','pink');
});


// Problem 4 (Greet Me) -----------------------------------------------------
// WRITE CODE HERE
$('#greet').click(function() {
  var name = $('#my_name').val();
  alert('Hello ' + name + '!')
});