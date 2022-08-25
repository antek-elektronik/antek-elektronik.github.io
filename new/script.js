//test
console.log("Welcome to my website!");

$(function(){
    $("#navbar-placeholder").load("https://antek-gzara-Animations.github.io/new/navbar.html");
});

//console.log(document.cookie);

//update logo size on navbar based on navbar height
window.setInterval(function(){
    var navbarHeight = document.getElementById("navbar").offsetHeight - 10;
    document.getElementById("logo").style.height = navbarHeight.toString() + "px";
    document.getElementById("logo").style.width = navbarHeight.toString() + "px";
    //console.warn(navbarHeight);


    //checking if navbar is animated rn and changing border radius
    if ($('navbar').is(':animated')) {
        $('navbar').css('border-radius', "10px");
        console.log("navbar is animated");
    }
}, 100);



function exitWebsite(){
    close();
}

 

//from https://codepen.io/jdtibbs/pen/jrrwME

$(window).scroll(function()
{
  $('#navbar').animate({top:$(window).scrollTop()+"px" },{queue: false, duration: 500});
});

