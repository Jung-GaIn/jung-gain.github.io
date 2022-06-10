$(function () {

    // 드롭다운 메뉴
    var $dropdowns = $(".dropdown");

    $(".menu").on("click", function (event) {

        event.preventDefault();

        var $next = $(this).next();

        if ($next.is(":visible")) {
            $next.hide();
        }
        else {
            $dropdowns.hide();
            $next.show();
        }

    });

    // 메인이미지 슬라이드
    var $slide = $("#slide");
    var $window = $(window);

    window.setInterval(function () {

        $slide.animate({
            marginLeft: "-100%"
        }, 2000, function () {
            // 1-2. 이미지의 이동이 끝나면 실행할 함수(콜백 함수)
            // #slide의 첫번째 자식요소를 #slide 요소의 마지막으로 보내고
            $slide.children().first().appendTo($slide);

            // #slide 요소에 적용한 스타일 속성을 제거한다.
            $slide.removeAttr("style");
        });


    }, 3000);

    // 할인 혜택 hover메서드
    var $galleryImg = $("#benefit_wrap > li");

    $galleryImg.hover(

         function () {
              $(this).addClass("big").siblings().addClass("small");
         },
         function () {
              $galleryImg.removeAttr("class");
         }

    );

    // 체험프로그램 롤링페이퍼 등장
    var $program = $("#program");
    var $rolling = $("#program_wrap");
    var programTop = $program.offset().top;

    $window.on("scroll", function () {
        var scrollTop = $window.scrollTop() * 1.2;

        if (scrollTop > programTop)
            $rolling.addClass("on");
        else
            $rolling.removeClass("on");
    });
    

});