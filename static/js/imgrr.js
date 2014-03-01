// Problem 2 (Peekaboo) ------------------------------------------------------
$('#toggle_img').click(function() {
	if ($('#toggle_img').text() === 'Go Away!'){
		$('#main_img').hide();
		$('#toggle_img').text('Come Back!');
	} else {
		$('#main_img').show();
		$('#toggle_img').text('Go Away!');
	};
});

// Problem 3 (Swap Em) -----------------------------------------------
$('#change_img').click(function(){
	$('#main_img').attr('src','/static/img/' + $('#new_img_file').val());
});
// Problem 4 (Find the Source) -------------------------------------------------
$('.clickable').click(function() {
  alert($(this).attr('src'));
});

// Problem 5 (Imgrr) -------------------------------------------------
$('.clickable2').click(function() {
	var path = $(this).attr('src');
	$(this).attr('src',$('#main_img2').attr('src'));
	$('#main_img2').attr('src',path);
});
