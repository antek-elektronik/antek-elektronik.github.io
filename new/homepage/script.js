//test
console.log("Welcome to my website!");

//update logo size on navbar based on navbar height
window.setInterval(function(){
    var navbarHeight = document.getElementById("navbar").offsetHeight - 10;
    document.getElementById("logo").style.height = navbarHeight.toString() + "px";
    document.getElementById("logo").style.width = navbarHeight.toString() + "px";
    //console.warn(navbarHeight)
}, 100);