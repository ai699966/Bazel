$(window).scroll(function(){
    let windowScroll = $(window).scrollTop();
    let aboutOffSet = $('#about').offset().top;
    console.log(windowScroll);

    // console.log();
    if (windowScroll > aboutOffSet - 100) {
        $('.navContent').css('backgroundColor' , 'rgba(0, 0, 0, 0.3)')
    } else {
        $('.navContent').css('backgroundColor' , 'transparent')

    }
})