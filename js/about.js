// $(function() {
// 	setFadeIn();
// 	$('#about-text').hide();
// 	$('#profile').hide();
// });

function setFadeIn() {
	$(window).scroll(function() {
		if ($(window).scrollTop() > 320) {
			$('#about-text').fadeIn(500);
			$('#profile').fadeIn(500);
		}
	});
}
