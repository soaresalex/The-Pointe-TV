var player;

function onYouTubePlayerAPIReady() {
	player = new YT.Player('player', {
		playerVars: {
			'autoplay': 1,
			'controls': 0,
			'autohide': 1,
			'wmode': 'opaque',
			'showinfo': 0,
			'loop': 1,
			'mute': 1,
			'end': 25,
			'playlist': 'p0BGIyPD0jo'
		},
		videoId: 'p0BGIyPD0jo',
		events: {
			'onReady': onPlayerReady
		}
	});
}

function onPlayerReady(event) {
	event.target.mute();
}

//this pauses the video when it's out of view, just wrap your video in .m-//video
$(window).scroll(function () {
	var hT = $('.m-video').height(),
		wS = $(this).scrollTop();
	if (wS > hT) {
		player.pauseVideo();
	} else {
		player.playVideo();
	}
});



// SCROLL WITH CLICK
var nav = $('ul');
var nav_height = nav.outerHeight();

$(window).on('scroll', function () {
	var cur_pos = $(this).scrollTop();

	$('section').each(function () {
		var top = $(this).offset().top - nav_height,
			bottom = top + $(this).outerHeight();

		if (cur_pos >= top && cur_pos <= bottom) {
			nav.find('a').removeClass('active');
			$('section').removeClass('active');

			$(this).addClass('active');
			nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
		}
	});
});

nav.find('a').on('click', function () {
	var $el = $(this),
		id = $el.attr('href');

	$('html, body').animate({
		scrollTop: $(id).offset().top - nav_height
	}, 1000);

	return false;
});

// VIDEO LINKS

$(document).ready(function () {
	$("#teaser").click(function (e) {
		e.preventDefault();
		$("#vid-title").text("The Pointe Teaser");
		$("#vid-displaying").attr("src", "https://www.youtube.com/embed/JN-qec7Awrs?rel=0&amp;showinfo=0");
	});
	$("#jasons-cpr-class").click(function (e) {
		e.preventDefault();
		$("#vid-title").text("Jason's CPR class");
		$("#vid-displaying").attr("src", "https://www.youtube.com/embed/ne3q_f1Cg7s?rel=0&amp;showinfo=0");
	});
	$("#indiegogo-campaign").click(function (e) {
		e.preventDefault();
		$("#vid-title").text("The Pointe TV Show - Indiegogo Campaign");
		$("#vid-displaying").attr("src", "https://www.youtube.com/embed/wQAQdv5P_LQ?rel=0&amp;showinfo=0");
	});
	$("#austins-little-screenplay").click(function (e) {
		e.preventDefault();
		$("#vid-title").text("Austins little screeplay");
		$("#vid-displaying").attr("src", "https://www.youtube.com/embed/mrFnbsWx0-4?rel=0&amp;showinfo=0");
	});
});

/* ------- CHANGE MENU TO CLOSE ICON ------- */
$(document).ready(function () {
	$("#menu").click(function (e) {
		e.preventDefault();
		if ($("#menu").hasClass("unclicked")) {
			$(this).removeClass("unclicked");
			$(this).addClass("clicked");
			$("#first-line").addClass("top-slant");
			$("#second-line").addClass("bottom-slant");
			$("#third-line").css("display", "none");
			$("#popup-menu").css("display", "block");
			$("body").css("overflow", "hidden");
		} else {
			$(this).addClass("unclicked");
			$(this).removeClass("clicked");
			$("#first-line").removeClass("top-slant");
			$("#second-line").removeClass("bottom-slant");
			$("#third-line").css("display", "block");
			$("#popup-menu").css("display", "none");
			$("body").css("overflow", "scroll");
		}
	});
});

$(document).ready(function () {
	$("#popup-menu li a").click(function (e) {
		e.preventDefault();
		if ($("#menu").hasClass("unclicked")) {
			$(this).removeClass("unclicked");
			$(this).addClass("clicked");
			$("#first-line").addClass("top-slant");
			$("#second-line").addClass("bottom-slant");
			$("#third-line").css("display", "#FFF");
			$("#popup-menu").css("display", "none");
			$("body").css("overflow", "hidden");
		} else {
			$(this).addClass("unclicked");
			$(this).removeClass("clicked");
			$("#first-line").removeClass("top-slant");
			$("#second-line").removeClass("bottom-slant");
			$("#third-line").css("background", "#FFF");
			$("#popup-menu").css("display", "none");
			$("body").css("overflow", "scroll");
		}
	});
});


/* ---------- FADE IN BETWEEN PAGES ----------*/
$(document).ready(function () {
	$('body').css('display', 'none');
	$('body').fadeIn(1000);
	var newLocation = this.href;
	$('.link').click(function () {
		event.preventDefault();
		$('body').fadeOut(500, newpage);
	});
	function newpage() {
		window.location = newLocation;
	}
});