$(function () {

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

    $(".menu-box").click(function () {

        $(".menu-box").removeClass("active");
        $(this).addClass("active");
        $('.caroussel').resize();

        var pageUrl = $(this).data("url");

        $(".page").hide();
        $("#" + pageUrl).show();
        window.location.hash = pageUrl;
        //$('body,html,document').scrollTop(0);
        window.scrollTo(0, 0);
    });

    var hash = document.location.hash;

    if (hash === "#android") {
        $("#cv").hide();
        $("#android").show();
        $("#web").hide();

    } else if (hash === "#web") {
        $("#cv").hide();
        $("#android").hide();
        $("#web").show();
    } else {
        $("#cv").show();
        $("#android").hide();
        $("#web").hide();
    }

    $("#cv").css("visibility", "visible");
    $("#android").css("visibility", "visible");
    $("#web").css("visibility", "visible");

    var isAnchor = false;
    $(".menu-box").each(function () {
        if ("#" + $(this).data("url") === hash) {
            $(this).addClass("active");
            isAnchor = true;
        }
    });
    if (!isAnchor) {
        $(".menu-box[data-url='cv']").addClass("active");
    }

    window.scrollTo(0, 0);

    $(".menu-bar-item").click(function () {

        $(".menu-box").removeClass("active");
        $(this).addClass("active");
        $('.caroussel').resize();
        var pageUrl = $(this).data("url");

        $(".page").hide();
        $("#" + pageUrl).show();
        window.location.hash = pageUrl;
        //$('body,html,document').scrollTop(0);
        window.scrollTo(0, 0);
    });




});



window.scrollTo(0, 0);