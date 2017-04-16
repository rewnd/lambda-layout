$(document).ready(function() {
  /* датапикер */
  $('#booking-form-date').attr('readonly', true).appendDtpicker();

  /* карусель */
  $('.reviews-section__content-carousel').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3700,
    speed: 800
  });

  /* мобильное меню */

  $('.main-header__mobile-menu').on('click', function(e) {
    $(this).hide();
    $('.main-header__nav').show();
    $('.main-header__container').css('position', 'static');
    return false;
  });

  $('.main-header__nav-mobile-close').on('click', function(e) {
    $('.main-header__nav').hide();
    $('.main-header__mobile-menu').show();
    $('.main-header__container').css('position', 'relative');
    return false;
  });


  /* плавный переход по якорям */
  $('a[href^="#"]').on('click', function(e) {
    var link = $(this);
    if(link.attr('href').length > 1) {
      var el = link.attr('href');
      $('body').animate({
        scrollTop: $(el).offset().top}, 1000);
    }
    return false;
  });
});


