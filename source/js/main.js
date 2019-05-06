$(".menu-collapsed").click(function() {
  $(this).toggleClass("menu-expanded");
});

$(function() {
  $( ".calendar" ).datepicker({
		dateFormat: 'dd/mm/yy',
		firstDay: 1
	});
	
	$(document).on('click', '.date-picker .input', function(e){
		var $me = $(this),
				$parent = $me.parents('.date-picker');
		$parent.toggleClass('open');
	});
	
	
	$(".calendar").on("change",function(){
		var $me = $(this),
				$selected = $me.val(),
				$parent = $me.parents('.date-picker');
		$parent.find('.result').children('span').html($selected);
	});
});

$('.slider-programm').slick({
  autoplay: false,
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  sliderToScroll: 1,
  arrows: true
});



  

