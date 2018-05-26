

$('.toggled-nav-wrapper').on('click', function(e){
e.stopPropagation();
});

$('.nav-toggle-open-wrapper, .nav-toggle-close-wrapper, header .nav-toggle-body-overlay').on('click', function(){
  $('html').toggleClass('nav-open');
});

$(function(){
  setTimeout(function(){
    $('.text-animation').removeClass('hidden').delay(4000).fadeOut('slow');
  }, 500);
});

    $('.confirmation').on('click', function () {
        return confirm('Hi there! thanks for visiting my portfolio! Im still in the process of adding projects thats why the page is a bit empty. Soonish will be done thanks!<3 OK?');
    });



  
