$(document).ready(function(){

	$('#toogle-sidebar').click(function(){
		UIkit.toggle('#aside').toggle().fadeIn();
	});



	let = anchor = window.location.hash;
	if(anchor !== '' && anchor !== undefined){
		$('section').addClass('uk-hidden');
		let section = "section"+anchor;
		$(section).removeClass('uk-hidden');
	}

	$('aside a').click(function(){
		$('section').addClass('uk-hidden');
		$('aside li').removeClass('uk-active');
		let section = "section"+$(this).attr('href');
		$(section).removeClass('uk-hidden');
		$($(this).parent('li')).addClass('uk-active');
	});
});