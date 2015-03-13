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
	
	$('li').each(function() {
		var curr = this.id;
		console.log(curr);
		var pos = $(curr).position();
		
		if(pos.top <= position && (pos.top + $(curr).height()) >= position)
		{
			$('li').removeClass("active");
			var elem = $(this).attr("class");
			$("."+elem).addClass("active");
		}
		else if(position > 1700)
		{
			//$('li').removeClass("active");
			//$('.fifth').addClass("active");
		}
		else
		{
			/*var m = $(this).attr("class");
			$("."+m).css({"background":"#000000"});*/
		}
	});
});
});





/*var divs = document.getElementsByClassName('alert');
for(var i=0; i<divs.length; i++) {
  divs[i].addEventListener("click", highlightThis);
  /*
  divs[i].addEventListener("click", highlightThis, true);
  divs[i].addEventListener("click", highlightThis, false);*/
/*}

function highlightThis(event) {
    //event.stopPropagation();
  
    var backgroundColor = this.style.backgroundColor;
    this.style.backgroundColor='yellow';
    alert(this.className);
    this.style.backgroundColor=backgroundColor;
}*/