$(function () {

    // 문서가 로드되면 첫 페이지로 이동
    // $("html").animate({ "scrollTop": 0}, 100);

    var $window = $(window);

    // 고정 메뉴바 이벤트
    var $nav = $("#nav");
    var $navColor = $("#nav > ul > li > a");
    var navTop = $nav.offset().top;
    var profileTop = $("#profile").offset().top;

    $nav.css({ position : "absolute", top : 0, right : 0, left : 0 });

    $window.on("scroll", function () {
        var scrollTop = $(window).scrollTop();

        if (scrollTop > navTop && scrollTop < profileTop) 
            $nav.css({ position: "fixed" });

        else if (scrollTop >= profileTop) {
            $nav.css({ position: "fixed", background: "rgba(26, 72, 90, 0.9)", transitionDuration : "600ms" });
            $navColor.css({ color: "#fff" });
        }
        else {
            $nav.css({ position: "absolute", background: "transparent" });
            $navColor.css({ color: "#1a485a" });
        }
    });
    
    // 마우스 스크롤 이벤트
    var offset_profile = $("#profile").offset();
    var offset_web = $("#web").offset();
    var offset_other = $("#other").offset();
    var offset_resume = $("#resume").offset();

    $("#m_home").on("click", function (event) {
        event.preventDefault();

        $("html").animate({ scrollTop: 0 }, 600);
    });
    $("#m_profile").on("click", function (event) {
        event.preventDefault();

        $("html").animate({ scrollTop: offset_profile.top }, 600);
    });
    $("#m_web").on("click", function (event) {
        event.preventDefault();

        $("html").animate({ scrollTop: offset_web.top }, 600);
    });
    $("#m_other").on("click", function (event) {
        event.preventDefault();

        $("html").animate({ scrollTop: offset_other.top }, 600);
    });
    $("#m_resume").on("click", function (event) {
        event.preventDefault();

        $("html").animate({ scrollTop: offset_resume.top }, 600);
    });
    $("#mouse").on("click", function (event) {
        event.preventDefault();

        $("html").animate({ scrollTop: offset_profile.top }, 600);
    });


    // 배경 이미지 페이드 효과
    
    setTimeout(function () {
        $("#title").fadeOut(2000, function () {
            $(this).css("background-image", "url('./images/bg-01.png')");
            $(this).fadeIn(2000);
        });

    }, 600);


    // 타이틀_타이핑 효과

    var $typing = $("#typing");

    var typingDelay = 120;

    var typingText = $typing.html().trim();

    var letters = typingText.split("");

    $typing.html("");

    for (var i = 0; i < letters.length; i++) {
        letters[i] = (letters[i] == " ") ? "&nbsp;" : letters[i];

        $("<span></span>").html(letters[i]).hide().appendTo($typing);
    }

    window.setTimeout(function () {
        $("<span></span>").addClass("cursor").appendTo($typing);

        $typing.children().each(function (index) {
            $typing.css("display", "block");
            $(this).delay(index * typingDelay).show(10);
        });
    }, 3000);


    // 프로필_그래프
    // : 해당 위치에 도달하면 그래프의 막대가 채워지는 이벤트

    var $profile = $("#profile");
    var profileTop = $profile.offset().top;

    $window.on("scroll", function () {
        var scrollTop = $(window).scrollTop() + $(window).height() * 0.4;

        if (scrollTop > profileTop) {
            $("#red_line1").addClass("on");
            $("#red_line2").addClass("on");
            $("#red_line3").addClass("on");
            $("#red_line4").addClass("on");
            $("#red_line5").addClass("on");
            $("#red_line6").addClass("on");
        }
    });
        

    // 프로필_텍스트/이력서_타이틀
    // : 해당 위치에 도달하면 각각의 영역들이 숨어있다가 등장하는 이벤트
    var $pText1 = $("#p_con_wrap1");
    var $pText2 = $("#p_con_wrap2");
    var $rTitle = $("#r_title");

    $window.on("scroll", function() {
        var textTop = $(window).scrollTop() + $(window).height() * 0.4;
        var textTop2 = $(window).scrollTop() + $(window).height() * 0.8;
        var rTitleTop = $(window).scrollTop() + $(window).height() * 0.5;

        if ($pText1.offset().top < textTop2)
            $pText1.addClass("on");
            
        else
            $pText1.removeClass("on");

        if ($pText2.offset().top < textTop)
        $pText2.addClass("on");

        else
            $pText2.removeClass("on");

        if($rTitle.offset().top < rTitleTop)
            $rTitle.addClass("on");

        else
            $rTitle.removeClass("on");
    });


    // 웹디자인
    // : bullet들로 이동할 수 있는 이미지 갤러리
    var $w_slide = $("#web_slide");
    var $w_slideImg = $("#web_slide > li");

    var $indicator = $("<ol></ol>").attr("class", "bullets");

    $w_slide.children().each(function (index) {
        $("<li></li>").append("<span>" + (index + 1) + "</span>")
        .appendTo($indicator);
    });

    $indicator.appendTo(".w_container").children(":first").addClass("on");

    var $indicatorItems = $indicator.children();

    $indicatorItems.each(function (index) {
        $(this).on("click", function (event) {

            event.preventDefault();

            $(this).addClass("on").siblings().removeAttr("class");

            var photoIndex = $(this).index();

            $w_slideImg.css("display", "none").eq(photoIndex).fadeIn(1000);
        });
    });


    // 아더디자인_포토샵/일러스트
    // 일정한 시간마다 슬라이드 이미지가 오른쪽에서 왼쪽으로 이동하는 이벤트

    var $slide = $("#slide");

    var timerId = window.setInterval(slideImage, 3000);

    function slideImage() {
        $slide.animate({
            marginLeft: "-100%"
        }, 1500, function () {
            $slide.removeAttr("style").children().first().appendTo($slide);
        });
    };

    $("#o_design_wrap").hover(
        function () {
            window.clearInterval(timerId);
        },
        function () {
            timerId = window.setInterval(slideImage, 3000);
        }
    );

    $("#prev").on("click", function() {
        $slide.prepend($slide.children(":last"))
            .css("margin-left", "-100%")
            .animate({ marginLeft: 0 }, 1000);
    });

    $("#next").on("click", function () {
        if($slide.is(":animated")) return;

        slideImage();
    });

    // 아더디자인_배너
    // 오버레이 창을 띄우고 해당 이미지와 설정을 크게 보여주는 이벤트(페이드 효과)
    
    var $overlay = $("#overlay");
    var $details = $("#details");

    $("#b_img > li > a").on("click", function(event) {
        event.preventDefault();

        $details.attr("src", $(this).attr("href"));

        $nav.css({
            opacity: 0,
            visibility: "hidden"
        });

        $overlay.fadeIn(function () {
            $details.fadeIn();
        });
    });

    $overlay.on("click", function() {
        $details.fadeOut(function () {
            $overlay.fadeOut();
        });

        $nav.css({
            opacity: "1",
            visibility: "visible",
            transitionDelay: "400ms",
            transitionDuration: "400ms"
        });
    });

    $details.on("click", function (event) {
        event.stopPropagation();
    });

    // 스크롤 텍스트
    var $pContainer = $("#p_container");

});