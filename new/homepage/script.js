//test
console.log("Welcome to my website!");

englishCheckbox = document.getElementById("englishCheckbox");
polishCheckbox = document.getElementById("polishCheckbox");

var language = "";

if (document.cookie.split(';').some((item) => item.includes('language=polish'))) {
    console.log("language is set to polish");
    language = "polish";
    polishCheckbox.checked = true;
} else if (document.cookie.split(';').some((item) => item.includes('language=english'))) {
    console.log("language is set to english");
    language = "english";
    englishCheckbox.checked = true;
}
else{
    console.error("developer fucked something up with cookies");
}

//console.log(document.cookie);

//update logo size on navbar based on navbar height
window.setInterval(function(){
    var navbarHeight = document.getElementById("navbar").offsetHeight - 10;
    document.getElementById("logo").style.height = navbarHeight.toString() + "px";
    document.getElementById("logo").style.width = navbarHeight.toString() + "px";
    //console.warn(navbarHeight) 
}, 100);

function updateLanguage(){
    if(polishCheckbox.checked == true){
        console.log("language is changed to polish now");
        language = "polish";
        document.cookie = "language=polish";
    }
    else if(englishCheckbox.checked == true){
        console.log("language is changed to english now");
        language = "english";
        document.cookie = "language=english";
    }
    else{
        console.error("dev fucked something up again, this time with changing language");
    }
}