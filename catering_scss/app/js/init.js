;(function ($){
	$(window).on('load', function(){
		// init modal
		$('._order-modal-open').on('click', function() {
			$('#order').bPopup({
				closeClass:'close',
				onOpen: function(){
					setTimeout(function(){
						// formstyler
						$('select').styler();
					}, 50);
				}
			});
		});
		//slick nav
		$('.menu-nav').slicknav({
			prependTo: '.header .container',
			label: '',
		});
	})
})(jQuery)
