//Page and resources loaded.
$(window).bind("load", function() {

	$('#submit_button').click(function(){
		var link   = 'http://' + $('#url_input').val(), 
			domain = $('#dropdownMenu').attr('domain-value');
		$.post( "shorten.php", {link: link, domain: domain}, function( data ) { addResult(data.result); });
	});

	$('.menuitem').click(function(){
		var domain = $(this).attr('domain-value');
		$("#dropdownMenu").attr('domain-value', domain);
		$("#domain_label").text(domain);
	});

});

function addResult(result){
	var html = "<div class='alert alert-warning alert-dismissible' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button>" + result.long_url + " &#8209; <strong><a href='" + result.url + "' target='_blank'>" + result.url + "</a></strong></div>"
	$('#results_wrapper').prepend(html);
}