$(function(){


	"use strict";
	//Dropdown


	var toggles = $(".c-hamburger");


	for (var i = toggles.length - 1; i >= 0; i--) {
		var toggle = toggles[i];
		toggleHandler(toggle);
	};

	function toggleHandler(toggle) {
		toggle.addEventListener( "click", function(e) {
			e.preventDefault();

			if(this.classList.contains("is-active") === true){
				this.classList.remove("is-active");
				$('.dropdown').slideUp();

			} else{
				this.classList.add("is-active");
				$('.dropdown').slideDown();

				$('.dropdown li').on('click', function(){
					$('.dropdown').css('display', 'none');
					toggles.removeClass("is-active");
				});

			}
		});
	}

	//Click Btn
	var btn = $('#begin');

	btn.on('click', function(){
		$('.clickHide').fadeOut();
		$('body').attr('class', '');
		$('#set-bg').addClass('clicked');
		$('.wrapper').removeClass('hide');

	});


	

});

