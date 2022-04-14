/*hover id*/
$(document).ready(function(){
    $(".hover").mouseover(function(){
        $(this).addClass("hover");
    });
    $(".hover").mouseout(function(){
        $(this).removeClass("hover");
    });
}
