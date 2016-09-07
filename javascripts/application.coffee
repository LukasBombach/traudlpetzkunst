$ ->

  # About
  $('#content.about').fadeIn()

  # Galleries

  galleries = $('#content').find('.gallery')

  galleries.find('img').lazyload
    effect : "fadeIn"

  galleries.masonry
    columnWidth: 300
    itemSelector: 'a'
    gutter: 20

  galleries.magnificPopup
    closeOnContentClick : true
    titleSrc  : 'title',
    mainClass : 'mfp-with-zoom'
    delegate  : 'a'
    type      : 'image'
    gallery   :
      enabled : true
    zoom:
      enabled: true
      duration: 300
      easing: "ease-in-out"
      opener: (openerElement) ->
        (if openerElement.is("img") then openerElement else openerElement.find("img"))


