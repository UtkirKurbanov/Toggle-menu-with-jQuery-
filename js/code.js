$(function() {
    $('.menu_btn').click(function () { 
        $('.menu_li').toggleClass('active');
    })    
})

$(window).resize(function() {
    if($(window).width() < 992) {
        $('.menu_li').removeClass('active');
    }
})