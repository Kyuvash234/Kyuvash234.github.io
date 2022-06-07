$(window).scroll(() => {
    let scrollDistance = $(window).scrollTop();
    $(".container").each(i, el) => {
        if ($(el).offset().top = $("nav").outerHeight() <= scrollDistnace){
            $("nav a").each((i, el) =>{
                if ($(el).hasClass("active")){
                    $(el).removeClass("active");
                }
            });
        };
    };
    $("nav li:eq('+ i +')").find('a').addClass('active');
});