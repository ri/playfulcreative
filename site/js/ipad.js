$("#home").live('swipeleft', function() {
     $.mobile.changePage("#visual", "slide");
});

(function(window, $, PhotoSwipe){
			
			$(document).ready(function(){
				
				$('div.project')
					.live('pageshow', function(e){
						
						var 
							currentPage = $(e.target),
							options = {},
							photoSwipeInstance = $(".project-images a", e.target).photoSwipe(options,  currentPage.attr('id'));
							
						return true;
						
					})
					
					.live('pagehide', function(e){
						
						var 
							currentPage = $(e.target),
							photoSwipeInstance = PhotoSwipe.getInstance(currentPage.attr('id'));

						if (typeof photoSwipeInstance != "undefined" && photoSwipeInstance != null) {
							PhotoSwipe.detatch(photoSwipeInstance);
						}
						
						return true;
						
					});
				
				});
			}(window, window.jQuery, window.Code.PhotoSwipe)
);