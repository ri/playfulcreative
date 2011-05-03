$('#works').imagesLoaded( function() {
  $(this).isotope({
  itemSelector: '.work',
  layoutMode : 'masonry'});
  $('#loader').hide();
  $('#works').css('visibility', 'visible');
});

$(document).ready(function() { 
     
    $('#slider').nivoSlider({
              effect: 'fade',
              directionNavHide: false,
              pauseTime:5000,
            });
        
    $('#filters a').click(function() {
      var selector = $(this).attr('data-filter');
      $container.isotope({ filter: selector });
      return false;
    });
});

$(window).load(function() {
  var $container = $('#works');
  
  // $container

  $('a#fancy').fancybox();

});
