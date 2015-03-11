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

		var ahref = $(this).attr('href');
		var $c = $('#content');
		var $cc = $('#content_container');

		$c.fadeTo('fast', 0.0, function() {
			$cc.animate({height: 'hide'}, 500);
			$c.load(ahref + '#content', function(){
				$cc.animate({height: 'show'}, 500, function(){
					$c.fadeTo('slow', 1.0);
				});
			});
		});

		return false;

	});

});

//]]>