function allowCookies(){
    document.getElementById("cookiesInfo").style.fontSize = "0";
    window.setTimeout(function(){ 
        document.getElementById("cookiesInfo").style.display = "none";
    }, 240);

    document.cookie = "cookie_consent=true"
}

//from https://codepen.io/jdtibbs/pen/jrrwME

$(window).scroll(function()
{
  $('#cookiesInfo').animate({bottom:"-" + $(window).scrollTop()+"px" },{queue: false, duration: 350});
});
