$(document).ready(function(){
	$('#btn_registro').click(function(){
		$('#modal').slideDown('slow');
	});

	$('.cerrar').click(function(){
		$('#modal').css({display: "none"});
	});
});