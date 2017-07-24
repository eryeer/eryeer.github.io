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
    $("#btngit")
        .on("click",function(){
            $(".img-cover").fadeOut(1000,function(){
                window.location='https://github.com/eryeer';
            });

        });
    $("#btnlinks")
        .on("click",function(){
            $(".img-cover").fadeOut(1000,function(){
                window.location='./links.html';
            });

        });

});
