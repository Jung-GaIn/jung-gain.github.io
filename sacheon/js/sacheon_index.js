$(function () {

    // 슬라이드 다운 메뉴
    var $slidedowns = $(".slidedown_wrap");
    
    var $mainMenus = $("#nav > ul > li");
    
    $mainMenus.each(function (index) {
        $(this).hover(
            function () {
                $(this).children("a").css({
                    "border-bottom-color": "#20284e",
                    "font-weight": "bold",
                });
                $slidedowns.eq(index).stop().slideDown(500);
            },
            function () {
                $(this).children("a").removeAttr("style");
                $slidedowns.eq(index).css("display", "none");
            }
        );
    });

    // 공지사항 탭 메뉴
    var $tabButton = $("#n_tab_menu > li");
    var $tabContents = $(".n_tab-sub");

    $tabButton.on("click", function () {
        if ($(this).is(".on")) return;

        $(this).addClass("on").siblings().removeClass("on");

        $tabContents.removeClass("on");

        var targetSelector = $(this).attr("data-target");
        $(targetSelector).addClass("on");

    });

    // SNS 텝 메뉴
    var $s_tabButton = $("#s_tab-menu > li");
    var $s_tabContents = $(".s_tab-sub");

    $s_tabButton.on("click", function () {
        if ($(this).is(".on")) return;

        $(this).addClass("on").siblings().removeClass("on");

        $s_tabContents.removeClass("on");

        var s_targetSelector = $(this).attr("data-target");
        $(s_targetSelector).addClass("on");

    });

    // 메인 슬라이드 이미지
    var $slide = $("#slide");

    var interval = 3000;

    var imageIndex = 0;

    var imageLength = $slide.children().length;

    var timerId = window.setInterval(slideImage, interval);

    function slideImage () {

        $slide.animate({
            marginLeft: "-100%"
        }, function () {
            $slide.removeAttr("style").children(":first").appendTo(this);
        });

        imageIndex++;
        imageIndex %= imageLength;

        $indicator.children().removeAttr("class").eq(imageIndex).addClass("on");

    }

    $("#container").hover(
        function () {
            window.clearInterval(timerId);
        },
        function () {
            timerId = window.setInterval(slideImage, interval);
        }
    );

    var $indicator = $("<ol></ol>").attr("id", "bullets");

    $slide.children().each(function (index) {
        $("<li></li>").append("<span>" + (index + 1) + "</span>")
        .appendTo($indicator);
    });

    $indicator.appendTo("#container").children(":first").addClass("on");

    var $indicatorItems = $indicator.children();

    $indicatorItems.on("click", function () {

        if ($(this).is(".on")) return;
        
        var index = $indicatorItems.index(this);

        var step = index - imageIndex;

        if (step < 0) step += imageLength;

        imageIndex = index;

        $indicatorItems.removeAttr("class").eq(imageIndex).addClass("on");

        $slide.animate({ "margin-left": step * -100 + "%" }, function () {

            $slide.removeAttr("style")
                .children(":lt(" + step + ")").appendTo($slide);
        });
    });

    // 배너모음 슬라이드 기능
    var $c_slide = $("#c_slide");

    var timerId2 = window.setInterval( slideBanner, 3000);

    function slideBanner () {
        $c_slide.animate({"margin-top": "-80px"}, function () {
            $c_slide.removeAttr("style").children(":first").appendTo($c_slide);
        });
    }

    $("#coll_wrap").hover(
        function () {
            window.clearInterval(timerId2);
        },
        function () {
            timerId2 = window.setInterval( slideBanner, 3000);
        }
    );

    $("#c_prev").on("click", function () {
        $c_slide.css("margin-top", "-80px").children(":last").prependTo($c_slide);
        $c_slide.animate({ "margin-top": 0});
    });

    $("#c_next").on("click", slideBanner);


    // 푸터 슬라이드 다운 메뉴
    var $dopdowns = $(".f_dropdown");
    
    var $sitePlus = $(".site_plus");

    var $siteWrap = $("#site_wrap > li");
    
    $sitePlus.each(function (index) {

        $(this).on("click", function (event) {

            event.preventDefault();

            $dopdowns.eq(index).stop().slideDown(300);
        }); 

        $siteWrap.mouseleave(
            function () {
                $dopdowns.stop().slideUp(300);
            }
        );
    });

});