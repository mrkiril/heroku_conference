document.onreadystatechange = function () {
if (document.readyState == "complete") 
{
    $('a[href^="#"]').click(function()
    {
        //Сохраняем значение атрибута href в переменной:
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        return false;
});
}
}
