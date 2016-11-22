$("#oe").hover(function(){
    $('#oe-img').css('opacity','1');
},function(){
    $('#oe-img').css('opacity','0');
});
$("#oe").hover(function(){
    $('#oe-about').css('opacity','1');
},function(){
    $('#oe-about').css('opacity','0');
});


$("#skrjabin").hover(function(){
    $('#skrjabin-img').css('opacity','1');
},function(){
    $('#skrjabin-img').css('opacity','0');
});
$("#skrjabin").hover(function(){
    $('#skrjabin-about').css('opacity','1');
},function(){
    $('#skrjabin-about').css('opacity','0');
});


$("#tartak").hover(function(){
    $('#tartak-img').css('opacity','1');
},function(){
    $('#tartak-img').css('opacity','0');
});
$("#tartak").hover(function(){
    $('#tartak-about').css('opacity','1');
},function(){
    $('#tartak-about').css('opacity','0');
});


$("#skaj").hover(function(){
    $('#skaj-img').css('opacity','1');
},function(){
    $('#skaj-img').css('opacity','0');
});
$("#skaj").hover(function(){
    $('#skaj-about').css('opacity','1');
},function(){
    $('#skaj-about').css('opacity','0');
});


$("#bumbox").hover(function(){
    $('#bumbox-img').css('opacity','1');
},function(){
    $('#bumbox-img').css('opacity','0');
});
$("#bumbox").hover(function(){
    $('#bumbox-about').css('opacity','1');
},function(){
    $('#bumbox-about').css('opacity','0');
});


$("#tnmk").hover(function(){
    $('#tnmk-img').css('opacity','1');
},function(){
    $('#tnmk-img').css('opacity','0');
});
$("#tnmk").hover(function(){
    $('#tnmk-about').css('opacity','1');
},function(){
    $('#tnmk-about').css('opacity','0');
});


$("#pt").hover(function(){
    $('#pt-img').css('opacity','1');
},function(){
    $('#pt-img').css('opacity','0');
});
$("#pt").hover(function(){
    $('#pt-about').css('opacity','1');
},function(){
    $('#pt-about').css('opacity','0');
});

//------ soft scrolling  -----------------//

$(function() {
	var $page = $('html, body');
	$('a[href*="#"]').click(function() {
		$page.animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		-13}, 2000);
		return false;
	});
});

//-------------------  fixed player -------------------------//

$(document).ready(function () {
      var offset = $('#fixed-player').offset();
    var topPadding = 95, bottomPadding = 192;
    $(window).scroll(function() {
        if ($(window).scrollTop() > offset.top) {
        if ($(document).height() - bottomPadding > $(window).scrollTop() + 
        $("#fixed-player").height()) $("#fixed-player").stop().animate({
            marginTop: $(window).scrollTop() - offset.top + topPadding
            });
            } else {
            $('#fixed-player').stop().animate({marginTop: 40});
        }
    });
});

