/**
 * Created by eryeer on 2017/7/23.
 */
jQuery(function ($) {
    $(".head li")
        .on("mouseover", function () {
            $(this).css("background-color", "#666");
        })
        .on("mouseout",function(){
            $(this).css("background-color", "#111");
        });

});
