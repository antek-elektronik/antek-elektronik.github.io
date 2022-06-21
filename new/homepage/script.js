//test
console.log("Welcome to my website!");

var polishCheckbox = document.getElementById("polishCheckbox");

polishCheckbox.checked = true;

document.cookie = "test=hello";
document.cookie = "language=polish";

console.log(document.cookie);

//update logo size on navbar based on navbar height
window.setInterval(function(){
    var navbarHeight = document.getElementById("navbar").offsetHeight - 10;
    document.getElementById("logo").style.height = navbarHeight.toString() + "px";
    document.getElementById("logo").style.width = navbarHeight.toString() + "px";
    //console.warn(navbarHeight) 
}, 100);

    
