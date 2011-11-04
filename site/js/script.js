$('#works').imagesLoaded( function() {
  $(this).isotope({
  itemSelector: '.work',
  layoutMode : 'masonry'});
  $('#loader').hide();
  $('#works').css('visibility', 'visible');
});

$(document).ready(function() { 
    var $container = $('#works');
    $('#home-slider').nivoSlider({
              effect: 'fade',
              directionNavHide: false,
              pauseTime:5000,
            });

    $('#codemountain-slider').nivoSlider({
              effect: 'fade',
              directionNavHide: false,
              manualAdvance: true
            });

    $('#pixemo-slider').nivoSlider({
              effect: 'fade',
              directionNavHide: false,
              manualAdvance: true
            });

    $('#envision-slider').nivoSlider({
              effect: 'fade',
              directionNavHide: false,
              manualAdvance: true
            });

    $('#uqp-slider').nivoSlider({
              effect: 'fade',
              directionNavHide: false,
              manualAdvance: true
            });

    $('#designaday-slider').nivoSlider({
              effect: 'fade',
              directionNavHide: false,
              manualAdvance: true
            });
        
    $('#filters a').click(function() {
      var selector = $(this).attr('data-filter');
      $container.isotope({ filter: selector });
      return false;
    });
});

$(window).load(function() {
  
  // $container

  $('a#fancy').fancybox({
    'autoDimensions'  : false,
    'transitionIn'    : 'none',
    'transitionOut'   : 'none',
    'titleShow'       : 'none',
  });

});
