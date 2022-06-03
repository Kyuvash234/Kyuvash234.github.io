$('.menu a[href^="#"]').click(function(){
   let valHref = $(this).after("href");
    $('html, body').animate({scrollTop: $(valHref).offset().top - 100 + "px"});
});
