(function($) {
	"use strict";
	//add class on focus in label
	$('.input').focus(function(){
		$(this).parents('.form_group').addClass('focused');
	});
	//Remove class on focus in label
	$('.input').blur(function(){
		var inputValue = $(this).val();
		if ( inputValue == "" ) {
			$(this).parents('.form_group').removeClass('focused');  
		}
	});
	//Remove class on load event
	$(window).on('load', function() {
		$('.input').each(function(){
			var inputValues = $(this).val();
			if (inputValues.length > 0 ) {
				$(this).parents('.form_group').addClass('focused');  
			}
		});
	});
	//wow animation js
	new WOW().init();
})(jQuery);