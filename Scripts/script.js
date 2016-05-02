var slickResponsiveBreakPoint = [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
]

$('.caroussel').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 400,
    cssEase: 'linear',
    dots: true,
    arrows: false,
    responsive: slickResponsiveBreakPoint
});

var hash = document.location.hash;

if (hash) {
    setPage(hash.split('#')[1]);
} else {
    setPage('cv');
}

function setPage(hash) {
    $(".page").hide();
    $("#" + hash).show();
    $(".page").css("visibility", "visible");
    $(".menu-box").removeClass("active");
    $(".menu-box[data-url='" + hash + "']").addClass("active");
    $(".menu-bar-item").removeClass("active");
    $(".menu-bar-item[data-url='" + hash + "']").addClass("active");
    document.location.hash = "#" + hash
    window.scrollTo(0, 0);

    $('.caroussel').each(function (i, e) { e.slick.setPosition(); })
}

$(".menu-box").click(function () {
    setPage($(this).data("url"));
});

$(".menu-bar-item").click(function () {
    setPage($(this).data("url"));
});

window.scrollTo(0, 0);