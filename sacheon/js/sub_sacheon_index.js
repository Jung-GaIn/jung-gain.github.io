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