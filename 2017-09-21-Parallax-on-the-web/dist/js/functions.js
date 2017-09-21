$(window).scroll(function() {

  var wScroll = $(this).scrollTop();

  $('.logo').css({
    'transform': 'translate(0px, ' + wScroll / 8 + '%)'
  })
  $('.fore-cine').css({
    'transform': 'translate(0px, -' + wScroll / 40 + '%)'
  })

  if (wScroll > $('.directors-pics').offset().top / 1.5) {

    $('.directors-pics figure').each(function(i) {

      setTimeout(function() {
        $('.directors-pics figure').eq(i).addClass('is-showing');
      }, 130 * (i+1));
    });
  }
  
  if(wScroll > $('.video-container').offset().top/2){
    $('.overlay-header').css({'opacity': '0.'+ (wScroll * 3.5)})
    $('.overlay-text').css({'opacity': '0.'+ (wScroll * 3.5)})

  }
});