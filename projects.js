let projectIndex = 0;
let projects = [];
$(function() {
	initSlick();
});

function initSlick() {
	$('.slide').slick({
		dots: false,
		autoplay: true,
		arrows: false,
		autoplaySpeed: 7000,
		centermode: true
	});
}
