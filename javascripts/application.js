// Generated by CoffeeScript 1.6.3
(function() {
  $(function() {
    var galleries;
    $('#content.about').fadeIn();
    galleries = $('#content').find('.gallery');
    galleries.find('img').lazyload({
      effect: "fadeIn"
    });
    galleries.masonry({
      columnWidth: 300,
      itemSelector: 'a',
      gutter: 20
    });
    return galleries.magnificPopup({
      closeOnContentClick: true,
      titleSrc: 'title',
      mainClass: 'mfp-with-zoom',
      delegate: 'a',
      type: 'image',
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true,
        duration: 300,
        easing: "ease-in-out",
        opener: function(openerElement) {
          if (openerElement.is("img")) {
            return openerElement;
          } else {
            return openerElement.find("img");
          }
        }
      }
    });
  });

}).call(this);

/*
//@ sourceMappingURL=application.map
*/