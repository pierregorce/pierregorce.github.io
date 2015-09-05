$(function () {

    $('#carousel').carouFredSel({
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
    });



    $('#thumbs').carouFredSel({
        responsive: true,
        circular: false,
        infinite: false,
        auto: false,
        prev: '.prev',
        next: '.next',
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
    });

    $('#thumbs a').click(function (e) {
        $('#carousel').trigger('slideTo', '#' + this.href.split('#').pop());
        $('#thumbs a').removeClass('selected');
        $(this).addClass('selected');
        return false;
    });


    $(".menu-box").click(function() {
        $(".menu-box").removeClass("active");
        $(this).addClass("active");

        var pageUrl = $(this).data("url");

        $(".page").hide();
        $("#" + pageUrl).show();

    });

});


