setTimeout(function(){ //I added timeout on everything so navbar can easily load 

    var englishCheckbox = document.getElementById("englishCheckbox");
    var polishCheckbox = document.getElementById("polishCheckbox");

    var language = "";

    var cookieConsent = false; //do user allowed cookies?

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
        console.error("cookie reading error, no language cookie found!"); //text changed from: "developer fucked something up with cookies" to more appropriate one
        language = "english"; //very universal language
        englishCheckbox.checked = true;
    }

    if(document.cookie.split(';').some((item) => item.includes("cookie_consent=true"))){
        cookieConsent = true;
        document.getElementById("cookiesInfo").style.display = "none";
        console.log("cookie consent is true");
    } else {
        document.cookie = "cookie_consent=false";
        cookieConsent = false;
        console.log("cookie consent is false");
    }

    updateLanguage();

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
            console.error("language updating error! no checkbox is checked!"); //text changed from: "dev fucked something up again, this time with changing language" to more appropriate one
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


    setInterval(updateLanguage(), 300); //update language every 300 ms
}, 100);