
$(document).ready(function()
{
    $('a[href*=#]').bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
        return false;
    });
    

    $("body").on("click", "#register", function(event) {
        event.preventDefault();
        window.open("https://goo.gl/forms/nKeJU4x9zxOj3vgJ2",'_blank');
        return false;
    });

    $("body").on("click", "#facebook_icon", function(event) {
        event.preventDefault();
        window.open("https://www.facebook.com/events/1868487270077027/",'_blank');
        return false;
    });
    

    $("body").on("click", "#e_dem_banner", function(event) {
        event.preventDefault();
        window.open("http://ed.org.ua/",'_blank');
        return false;
    });
});



