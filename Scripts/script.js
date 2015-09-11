$(function () {

    var mainCarourel = {
        responsive: true,
        circular: false,
        auto: false,
        items: {
            visible: 1,
            width: 200,
            height: '56%'
        },
        scroll: {
            easing: "quadratic",
            fx: 'directscroll'
        }
    };

    $('.carousel-1').carouFredSel(mainCarourel);
    $('.carousel-2').carouFredSel(mainCarourel);
    $('.carousel-3').carouFredSel(mainCarourel);

    function getChildCarouselOptions(prev, next) {
        return {
            responsive: true,
            circular: false,
            infinite: false,
            auto: false,
            prev: prev,
            next: next,
            items: {
                visible: {
                    min: 2,
                    max: 6
                },
                width: 150,
                height: '66%'
            },
            scroll: {
                easing: "quadratic"
            }
        };
    };

    $('.thumbs-1').carouFredSel(getChildCarouselOptions(".prev-1", ".next-1"));
    $('.thumbs-2').carouFredSel(getChildCarouselOptions(".prev-2", ".next-2"));
    $('.thumbs-3').carouFredSel(getChildCarouselOptions(".prev-3", ".next-3"));

    $('.thumbs-1 a').click(function (e) {
        $('.carousel-1').trigger('slideTo', '#' + this.href.split('#').pop());
        $('.thumbs-1 a').removeClass('selected');
        $(this).addClass('selected');
        return false;
    });

    $('.thumbs-2 a').click(function (e) {
        $('.carousel-2').trigger('slideTo', '#' + this.href.split('#').pop());
        $('.thumbs-2 a').removeClass('selected');
        $(this).addClass('selected');
        return false;
    });

    $('.thumbs-3 a').click(function (e) {
        $('.carousel-3').trigger('slideTo', '#' + this.href.split('#').pop());
        $('.thumbs-3 a').removeClass('selected');
        $(this).addClass('selected');
        return false;
    });

    $(".menu-box").click(function () {

        $(".menu-box").removeClass("active");
        $(this).addClass("active");

        var pageUrl = $(this).data("url");

        $(".page").hide();
        $("#" + pageUrl).show();
        window.location.hash = pageUrl;
        $('html').scrollTop(0);
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

    $('html').scrollTop(0);

});



