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
    language = "english"; //very universal language
    englishCheckbox.checked = true;
}

updateLanguage();

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

    updateSite();
}

function updateSite(){
    var polishElements = document.getElementsByTagName("pl");
    var englishElements = document.getElementsByTagName("eng");

    //for debugging
    //console.log(polishElements);
    //console.log(englishElements);

    if(language == "polish"){
        for(let i = 0;  i < polishElements.length; i++){
            polishElements[i].style.display = "block";
        }
        for(let i = 0; i < englishElements.length; i++){
            englishElements[i].style.display = "none";
        }
    }
    else if(language == "english"){
        for(let i = 0; i < englishElements.length; i++){
            englishElements[i].style.display = "block";    
        }
        for(let i = 0; i < polishElements.length; i++){
            polishElements[i].style.display = "none";
        }
    }
    else{
        alert("there was an error while setting language!");
    }
}

function allowCookies(){
    document.getElementById("cookiesInfo").style.fontSize = "0";
    window.setTimeout(function(){ 
        document.getElementById("cookiesInfo").style.display = "none";
    }, 240);
}

function exitWebsite(){
    close();
}