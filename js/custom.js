(function($){

	$(function(){
		$('.flexslider').flexslider();   
	});
	$( document ).on( 'wp-custom-header-video-loaded', function() {
		$('body').addClass( 'has-header-video' );
	});


})(jQuery);
