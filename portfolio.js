$(document).ready(function () {
    $(".question").on("click", function () {
        const $nextAnswer = $(this).next(".answer"); 

        if ($nextAnswer.is(":visible")) {
            $nextAnswer.slideUp();
            $(this).removeClass("active").find("span").text("+");
        }

        else {
            $(".answer").slideUp();
            $(".question").removeClass("active").find("span").text("+")
         
            $nextAnswer.slideDown();
            $(this).addClass("active").find("span").text("-");
        }
    })

})