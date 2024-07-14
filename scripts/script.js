//fullpage
$('#wrap').fullpage({
    scrollBar:true,
    scrollingSpeed:400,
    // responsiveWidth:1650,
    showActiveTooltip:true,
    menu:'nav',
    anchors:['intro', 'profile', 'web', 'app', 'sns', 'illust', 'video']
})

//web swiper
const web = new Swiper('.web .swiper', {
    // autoplay:{delay:2000},
    loop:true,
    navigation:{
        nextEl:'.web .swiper-button-next',
        prevEl:'.web .swiper-button-prev',
    }
})
