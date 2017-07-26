/**
 * Created by eryeer on 2017/7/23.
 */
jQuery(function ($) {
    $(".head li")
        .on("mouseover", function () {
            $(this).css({
                "background-color":"#666",
                "cursor":"pointer"
            });
        })
        .on("mouseout",function(){
            $(this).css("background-color", "#111");
        });
    $(".head li:eq(0)")
        .on("click",function(){
            if(document.title=='Home'){
                location='#';
            }else{
                location='./index.html';
            }
        });
    $(".head li:eq(1)")
        .on("click",function(){
            window.open('https://github.com/eryeer');

        });
    $(".head li:eq(2)")
        .on("click",function(){
            if(document.title=='Links'){
                location='#';
            }else{
                location='./links.html';
            }
        });
    $(".head li:eq(3)")
        .on("click",function(){
            if(document.title=='Contact Me'){
                location='#';
            }else{
                location='./contact.html';
            }
        });
    $(".head a")
        .on("click",function(){
            return false;
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
