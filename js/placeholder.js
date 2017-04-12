
$(document).ready(function(){

	$('input[type="text"], input[type="password"], input[type="radio"], textarea').each(function() {
		$(this).val( $(this).attr('placeholder') );
    });

});
