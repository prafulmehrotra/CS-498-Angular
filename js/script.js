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