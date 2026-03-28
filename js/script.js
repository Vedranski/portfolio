// skrolanjem dobivamo boju pozadine na navigaciji nakon 20px 

$(document).ready(function() {
	$(window).scroll(function() {
		if(this.scrollY > 20) {
			$('.navbar').addClass("sticky");
		} else {
			$('.navbar').removeClass("sticky");
		}

		// skrolanje na vrh stranice - pojavljuje se gumb

		if(this.scrollY > 500) {
			$('.scroll-up-btn').addClass("show");
		} else {
			$('.scroll-up-btn').removeClass("show");
		}
	});

	// kod za skrol na vrh

	$('.scroll-up-btn').click(function() {
		$('body').animate({scrollTop: 0});
	});

	// klik na menu za otvaranje mobilne navigacije

	$('.menu-btn').click(function() {
		$('.navbar .menu').toggleClass("active"); // na klik se pojavljuje navigacija
		$('.menu-btn i').toggleClass("active"); // hamburger se pretvara u krizic
	});

	// kod za animirani ispis teksta

	var typed = new Typed(".typing", {
		strings: ["Developer", "Freelancer"],
		typeSpeed: 100,
		backSpeed: 60,
		loop: true
	});

	// kod za drugi animirani ispis teksta

	var typed = new Typed(".typing-2", {
		strings: ["Developer", "Freelancer"],
		typeSpeed: 100,
		backSpeed: 60,
		loop: true
	});

	// owl carousel skripta (https://cdnjs.com/libraries/OwlCarousel2)

	$('.carousel').owlCarousel({
		margin: 20,
		loop: true,
		autoplayTimeOut: 2000,
		autoplayhoverPause: true,
		responsive: {
			0:{
				items: 1,
				nav: false
			},
			600:{
				items: 2,
				nav: false
			},
			1000:{
				items: 3,
				nav: false
			}
		}
	});
});