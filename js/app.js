$(document).ready(function(){
	$('.image-thumbnail__item img').on('click', function(){
		var thumbnailItem = $(this).closest('.image-thumbnail__item');
		if (!thumbnailItem.hasClass('image-thumbnail__active')) {
			$('.image-carousel').css({'margin-left': thumbnailItem.index() * -707});
			$('.image-carousel li').removeClass('image-carousel__active');
			$('.image-carousel li:eq(' + thumbnailItem.index() + ')').addClass('image-carousel__active');
		}
	});
	
	$('.image-thumbnail').on('click', '.image-thumbnail__item', function(){
		$('.image-thumbnail .image-thumbnail__item').removeClass('image-thumbnail__active');
		$(this).addClass('image-thumbnail__active');
	});
	
	$('.size-variation').on('click', '.size-variation__item', function(){
		$('.size-variation .size-variation__item').removeClass('size-variation__item-selected');
		$(this).addClass('size-variation__item-selected');
	});

/*	Slide Panel */
	function openSlidePanel(slidePanel, slidePanelDisabled){
		if(slidePanel.hasClass(slidePanelDisabled)) {
			
			var pageHeight = $(document).height();
			var pageWidth = $(document).width();
			var panelHeight = $(window).height();
			var divOverlay = $('<div/>').addClass('overlay').height(pageHeight).width(pageWidth);
			$('body').append(divOverlay).addClass('overlay-enabled');
			
			slidePanel.removeClass(slidePanelDisabled).height(panelHeight - 113).animate({"width": '+=498'});
		}
	}

	function closeSlidePanel(slidePanel, slidePanelDisabled, slidePanelCloseButton, evenTarget){
		
		if(!slidePanel.hasClass(slidePanelDisabled) && !evenTarget.not('.side-panel__close').closest('.side-panel').length) {
			slidePanel.addClass(slidePanelDisabled).animate({"width": '-=498'});
			setTimeout(function() {
				$('.overlay').remove();
			}, 850);
			$('body').removeClass('overlay-enabled');
		}
	}
	
//	Slide Panel - Quick customization 	
	$('.color-variation__customise').click(function(event) {
		event.stopPropagation();
		var sizeVariationOverlay = $('.customise-overlay');
		openSlidePanel(sizeVariationOverlay, 'customise-overlay_dicabled');
	});

	
	$('body, .side-panel__close').click(function(event) {
		event.stopPropagation();
		var sizeVariationOverlay = $('.customise-overlay');
		var slidePanelCloseButton = $('body, .side-panel__close');
		var evenTarget = $(event.target);
		closeSlidePanel(sizeVariationOverlay, 'customise-overlay_dicabled', slidePanelCloseButton, evenTarget);
	});
	
//	Slide Panel - Quick personalization 
	$('.personalize-link').click(function(event) {
		event.stopPropagation();
		var sizeVariationOverlay = $('.personalize-overlay');
		openSlidePanel(sizeVariationOverlay, 'personalize-overlay_dicabled');
	});

	
	$('body, .side-panel__close').click(function(event) {
		event.stopPropagation();
		var sizeVariationOverlay = $('.personalize-overlay');
		var slidePanelCloseButton = $('body, .side-panel__close');
		var evenTarget = $(event.target);
		closeSlidePanel(sizeVariationOverlay, 'personalize-overlay_dicabled', slidePanelCloseButton, evenTarget);
	}); 	
	
//	Slide Panel - Select Size 
	$('.size-variation-link').click(function(event) {
		event.stopPropagation();
		var sizeVariationOverlay = $('.size-variation-overlay');
		openSlidePanel(sizeVariationOverlay, 'size-variation-overlay_dicabled');
	});

	
	$('body, .side-panel__close').click(function(event) {
		event.stopPropagation();
		var sizeVariationOverlay = $('.size-variation-overlay');
		var slidePanelCloseButton = $('body, .side-panel__close');
		var evenTarget = $(event.target);
		closeSlidePanel(sizeVariationOverlay, 'size-variation-overlay_dicabled', slidePanelCloseButton, evenTarget);
	});
	
	$('.move-to-reviews').click(function() {
		var target = $('.reviews-certona-link');
			
		if (target.length) {
			$('html, body').animate({
			  scrollTop: target.offset().top
			}, 1500);
			return false;
		}
	});	
	
});



