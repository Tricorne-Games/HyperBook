//<![CDATA[

/*

	HyperBook: Portable Browser-Powered Book System
	2015 by Tricorne Games

	Page Rendering Mechanism

	This script renders the HTML data of a page into the index.htm content body.

*/

$(document).ready(function() {

	// Start-Up Page Load (Cover, ToC, etc.)
	$('#content').load('pages/page1.htm');

	// Navigating Pages
	$(document).on('click', 'a', function(e) {

		e.preventDefault();

		$('#content_container').animate({height: 'hide'}, 500);
		$('#navigation').animate({height: 'min-height'}, 500);

		$('#content').fadeOut(500);

		var ahref = $(this).attr('href');
		$('#content').load(ahref);

		$('#content').fadeIn(500);

		$('#content_container').animate({height: 'show'}, 500);

		return false;

	});

});

//]]>