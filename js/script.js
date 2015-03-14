$(document).ready(function() {
	var width = $(window).width();
		if(width > 920)
			{
				$('.modal').css({"height":"100px"});
				//$('.background').css({"height":"500px"})
			}
		else if(width > 640)
			{
				$('.modal').css({"height":"100px"});
				//$('.background').css({"height":"200px"})
			}
		else {}	
	});


$(document).ready(function() {
	$(window).resize(function() {
		var width = $(window).width();
		if(width > 920)
			{
				$('.modal').css({"height":"100px"});
				//$('.background').css({"height":"500px"});
			}
		else if(width > 640)
			{
				$('.modal').css({"height":"100px"});
				//$('.background').css({"height":"200px"});
			}
		else {}	
	});
});

$('li').on('click', function(event) {
    var target = $(this.id);
    console.log(target);
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top - 35
        }, 1000);
    }
});


$(document).ready(function() {
	$(document).scroll(function () {
	var position = $(document).scrollTop();
	
	$('.left li').each(function() {
		console.log(this.id);
		var curr = this.id;
		var pos = $(curr).position() + 10;
		
		if(pos.top <= position && (pos.top + $(curr).height()) >= position)
		{
			$('.left li').removeClass("active");
			var elem = $(this).attr("class");
			$("."+elem).addClass("active");
		}
		   /*}*/
	});
});
});
