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
    
    // 컨텐츠-아코디언 효과
    $list = $(".faq_list > li");

    $list.children(".question").on("click", function () {

        $this = $(this);

        if ($this.parent().is(".on")) {
            $this.next().slideUp().parent().removeClass("on");
        }

        else {
            $list.filter(".on").removeClass("on")
             .children("section").eq(1).slideUp();
            
            $this.next().slideDown().parent().addClass("on");
        }

    });

    // 컨텐츠-탭 메뉴

    var $tabBtn = $("#faq_nav > li");
    var $tabCon = $(".faq_list");

    $tabBtn.on("click", function () {
        if ($(this).is(".on")) return;

        $(this).addClass("on").siblings().removeClass("on");

        $tabCon.removeClass("on");

        var targetSelector = $(this).attr("data-target");
        $(targetSelector).addClass("on");
    });
    
});