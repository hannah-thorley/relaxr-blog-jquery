//delay code from executing until all assets loaded
//if read more is clicked
//prevent default action
	//slide p down
	//hide read more
	//show show less

$(document).ready(function() {

$('.readmore').on('click', function(event) {
	event.preventDefault();
	$('#show-this-on-click').slideDown();
	$('.readmore').hide();
	$('.readless').show();
});

//if read less is clicked
//prevent default action
	//slide p up
	//hide read less
	//show read more

$('.readless').on('click', function(event) {
	event.preventDefault();
	$('#show-this-on-click').slideUp();
	$('.readless').hide();
	$('.readmore').show();
});

//if learn more is clicked
//prevent default action
	//slide span down
	//hide learn more

$('.learnmore').on('click', function(event) {
	event.preventDefault();
	$('#learnmoretext').slideDown();
	$('.learnmore').hide();
});
});
