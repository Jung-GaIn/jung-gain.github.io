$(function () {

    // 고정 메뉴바 이벤트
    var $nav = $("#sub_nav");
    var navTop = $nav.offset().top;
    var $window = $(window);

    $window.on("scroll", function () {
        var scrollTop = $(window).scrollTop();

        if (scrollTop > navTop)
            $nav.addClass("on");

        else
            $nav.removeClass("on");
    });

    // 메뉴 스크롤 이벤트
    var bestTop = $("#best").offset().top - 150;
    var newsTop  = $("#news").offset().top - 100;
    var instaTop  = $("#insta").offset().top;

    var $html = $("html");

    $("#top").on("click", function (event) {
        event.preventDefault();

        $html.animate({ scrollTop: 0}, 600);
    });
    $("#m_story").on("click", function (event) {
        event.preventDefault();

        $html.animate({ scrollTop: navTop }, 600);
    });
    $("#m_best").on("click", function (event) {
        event.preventDefault();

        $html.animate({ scrollTop: bestTop }, 600);
    });
    $("#m_news").on("click", function (event) {
        event.preventDefault();

        $html.animate({ scrollTop: newsTop }, 600);
    });
    $("#m_insta").on("click", function (event) {
        event.preventDefault();

        $html.animate({ scrollTop: instaTop }, 600);
    });

    // 사이드바 메뉴
    var $sidebar =$("#sidebar > aside");


    $("#o_btn").on("click", function () {
        $sidebar.css("left", 0);
    });

    $("#x_btn").on("click", function () {
        $sidebar.removeAttr("style");
    });

    // 모바일웹-뉴스 슬라이드

    
    if (matchMedia("screen and (max-width: 768px)").matches) {
        
        var $newsSlide = $("#news_wrap");
    
        var timerId = window.setInterval(slideImage, 3000);

        function slideImage() {

            $newsSlide.animate({
                marginLeft: "-100%"
            }, function () {
                $newsSlide.children().first().appendTo($newsSlide);
                $newsSlide.removeAttr("style");
            });
        }

        $newsSlide.hover(
            function () {
                window.clearInterval(timerId);
            },
            function () {
                timerId = window.setInterval(slideImage, 3000);
            }
        );

    }

    // 스크롤 인디케이터
    if (matchMedia("screen and (min-width: 768px) and (max-width: 1199px)").matches) {

        var $story = $("#story");
        var $indicator = $("#move_line");
        var $breadFade = $("#bread_fade");
        
        var storyScrollTop = $story.height();
        var indicatorHeight = $indicator.height();
        var maxIndicatorHeiight = 865;
        
        $window.on("scroll", function () {

            var scrollTop = $window.scrollTop();
            var scrollingTop = scrollTop - navTop * 0.8;

            var ratio = scrollingTop / storyScrollTop;
            var changeHeight = maxIndicatorHeiight * ratio;

    
            if (ratio <= 1) {
                $indicator.css("height", changeHeight);

                if (changeHeight >= 850 && $breadFade.is(":hidden"))
                    $breadFade.fadeIn(600);
                else if (changeHeight < 850 && $breadFade.is(":visible"))
                    $breadFade.fadeOut(600);

            }
    
        });

    }
    if (matchMedia("screen and (min-width: 1200px)").matches) {

        var $story = $("#story");
        var $indicator = $("#move_line");
        var $breadFade = $("#bread_fade");
        
        var storyScrollTop = $story.height();
        var indicatorHeight = $indicator.height();
        var maxIndicatorHeiight = 780;
        
        $window.on("scroll", function () {

            var scrollTop = $window.scrollTop();
            var scrollingTop = scrollTop - navTop * 0.8;

            var ratio = scrollingTop / storyScrollTop;
            var changeHeight = maxIndicatorHeiight * ratio;

    
            if (ratio <= 1) {
                $indicator.css("height", changeHeight);

                if (changeHeight >= 770 && $breadFade.is(":hidden"))
                    $breadFade.fadeIn(600);
                else if (changeHeight < 770 && $breadFade.is(":visible"))
                    $breadFade.fadeOut(600);

            }
    
        });

    }

});