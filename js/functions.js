$(document).ready(function(){

	/* viewport */
	function setViewport(){
		windowWidth = $(window).width();
		windowHeight = $(window).height();

		if (windowWidth >= 990) {
			$(".viewport").width(windowWidth);
			$(".viewport").height(windowHeight);
		} else {
			$(".viewport").width("990px");
			$(".viewport").height(windowHeight);
		}
	}

	setViewport();

	/* content */
	function setContent() {
		$('.introduction-content').css('marginTop', ($('.introduction-container').height() - $('.introduction-content').height()) / 2);
		$('.profile-content').css('marginTop', (($('.profile-container').height() - 111) - $('.profile-content').height()) / 2);
		$('.contact-content').css('marginTop', (($('.contact-container').height() - 111) - $('.contact-content').height()) / 2);
	}

	setContent();

	/* map */
	function setMap (){
		$("#contact iframe").width($(window).width());
		$("#contact iframe").height($(window).height());
	}

	setMap();

	/* resize */
	$(window).resize(function(){
		setViewport();
		setContent();
		setMap();
	});

	/* scroll */
	var actualSection = $("#introduction");

	$(window).scroll(function(){
		hasScrolled = $(window).scrollTop();
		viewportHeight = $(window).height();

		if (hasScrolled <= viewportHeight) {
			actualSection = "introduction";
		} else if (hasScrolled > viewportHeight && hasScrolled < viewportHeight * 2) {
			actualSection = "profile";
		} else if (hasScrolled > viewportHeight && hasScrolled < viewportHeight * 3) {
			actualSection = "portfolio";
		} else if (hasScrolled == $(window).height() - viewportHeight) {
			actualSection = "contact";
		}
	});

	$("#scrollbar .scroll").on("click", function(){
		if ($(this).hasClass("up")) {
			if (actualSection == "profile") {
				$("body").scrollTo($("#introduction"), 750);
				return false;
			}

			if (actualSection == "portfolio") {
				$("body").scrollTo($("#profile"), 750);
				return false;
			}

			if (actualSection == "contact") {
				$("body").scrollTo($("#portfolio"), 750);
				return false;
			}

		} else if ($(this).hasClass("down")) {
			if (actualSection == "introduction") {
				$("body").scrollTo($("#profile"), 750);
				return false;
			}

			if (actualSection == "profile") {
				$("body").scrollTo($("#portfolio"), 750);
				return false;
			}

			if (actualSection == "portfolio") {
				$("body").scrollTo($("#contact"), 750);
				return false;
			}
		}
	});

	/* controls */
	setInterval(function() {
    	var newVal = $("input[type=range]").val(function(i, val){
    			return + val + 1;
    	});
	}, 2, "easeOutQuad");

	$("input[type=range]").mousemove(function(e){
		$(this).parent().find('span').html($(this).val());
	});


	/* submenu */
	$("#submenu li a").on("click", function(){
		$("#submenu li a").removeClass("active");
		$(this).addClass("active");
	});

	/* workspace */
	setTimeout(function(){
		$(".workspace ul").css("width", "100%");
	}, 100);

	$(".all").click(function(){
		$(".workspace li").animate({opacity: "1"});
	});

	$(".art-direction").click(function(){
		setTimeout(function(){
			$(".workspace li").not(".art-direction").animate({opacity: "0.25"});
				$(".workspace li.art-direction").animate({opacity: "1"});
		}, 200);
	});

	$(".print").click(function(){
		setTimeout(function(){
			$(".workspace li").not(".print").animate({opacity: "0.25"});
				$(".workspace li.print").animate({opacity: "1"});
		}, 200);
	});

	$(".html-css").click(function(){
		setTimeout(function(){
			$(".workspace li").not(".html-css").animate({opacity: "0.25"});
				$(".workspace li.html-css").animate({opacity: "1"});
		}, 200);
	});

	$(".javascript").click(function(){
		setTimeout(function(){
			$(".workspace li").not(".javascript").animate({opacity: "0.25"});
				$(".workspace li.javascript").animate({opacity: "1"});
		}, 200);
	});

	$(".wordpress").click(function(){
		setTimeout(function(){
			$(".workspace li").not(".wordpress").animate({opacity: "0.25"});
				$(".workspace li.wordpress").animate({opacity: "1"});
		}, 200);
	});

	/* Google Maps */
	$("#contact iframe").width($(window).width());
	$("#contact iframe").height($(window).height());

});