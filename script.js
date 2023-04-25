/*
const bar = document.getElementById('bar');
const nav = document.getElementsByClassName('header_nav');

if (bar){
    bar.addEventListener('click', () => {
        console.log("Hello world!");
        nav.classList.add('active');
    })
}*/

var count=0;

$(document).ready(function(){
    function mobile(){
        if ($(window).width() < 799) {
            $("#bar").click(function(){
                $(".header_nav").animate({right:'0'});
            })
            $("#close").click(function(){
                $(".header_nav").animate({right:'-300px'});
            })
        }
    }

    mobile();
    $(window).on('resize', function() {
        //count=0;
        mobile();
    })
})