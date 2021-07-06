


setInterval(UpdateScoreDisplay,1);

let IsPowerUp1Buyed = false;
let IsPowerUp2Buyed = false;
let IsPowerUp3Buyed = false;
let IsPowerUp4Buyed = false;
let IsPowerUp5Buyed = false;
let IsPowerUp6Buyed = false;
let IsPowerUp7Buyed = false;


let score = 0;
let OldScore = 0;

function Clicked(){
    score ++;
    //document.getElementById("scoreDisplay").innerHTML = score; 
}

function ClickButtonNormal(){
    document.getElementById("ClickButton").className = "ClickButton";
}

//#region powerups
function BuyPowerUp1(){
    if(IsPowerUp1Buyed == false && score >= 10){
        IsPowerUp1Buyed = true;
        score -= 10;
        document.getElementById("PowerUp1").className = "BoughtPowerUp";
        setInterval(PowerUp1Tick,1000);               
    }
}
function BuyPowerUp2(){
    if(IsPowerUp2Buyed == false && score >= 50){
        IsPowerUp2Buyed = true;
        score -= 50;
        document.getElementById("PowerUp2").className = "BoughtPowerUp";
        setInterval(PowerUp2Tick,700);               
    }
}
function BuyPowerUp3(){
    if(IsPowerUp3Buyed == false && score >= 100){
        IsPowerUp3Buyed = true;
        score -= 100;
        document.getElementById("PowerUp3").className = "BoughtPowerUp";
        setInterval(PowerUp3Tick,800);               
    }
}
function BuyPowerUp4(){
    if(IsPowerUp4Buyed == false && score >= 300){
        IsPowerUp4Buyed = true;
        score -= 300;
        document.getElementById("PowerUp4").className = "BoughtPowerUp";
        setInterval(PowerUp4Tick,500);               
    }
}
    function BuyPowerUp5(){
        if(IsPowerUp5Buyed == false && score >= 700){
            IsPowerUp5Buyed = true;
            score -= 700;
            document.getElementById("PowerUp5").className = "BoughtPowerUp";
            setInterval(PowerUp5Tick,1000);               
        }
    }
    function BuyPowerUp6(){
        if(IsPowerUp6Buyed == false && score >= 1000){
            IsPowerUp6Buyed = true;
            score -= 1000;
            document.getElementById("PowerUp6").className = "BoughtPowerUp";
            setInterval(PowerUp6Tick,500);               
        }
    }
    function BuyPowerUp7(){
        if(IsPowerUp7Buyed == false && score >= 5000){
            IsPowerUp7Buyed = true;
            score -= 5000;
            document.getElementById("PowerUp7").className = "BoughtPowerUp";
            setInterval(PowerUp7Tick,400);               
        }
    }
//#endregion

//#region powerups ticks
function PowerUp1Tick(){
    score ++;
}
function PowerUp2Tick(){
    score += 3;
}
function PowerUp3Tick(){
    score += 5;
}
function PowerUp4Tick(){
    score += 6;
}
function PowerUp5Tick(){
    score += 8;
}
function PowerUp6Tick(){
    score += 9;
}
function PowerUp7Tick(){
    score += 9;
}
//#endregion


function UpdateScoreDisplay(){ 
    document.getElementById("scoreDisplay").innerHTML = score + "$";

    if(IsPowerUp1Buyed == false){
        if(score >= 10){
            document.getElementById("PowerUp1").className = "AvailablePowerUp";
        }
    }
    if(IsPowerUp2Buyed == false){
        if(score >= 50){
            document.getElementById("PowerUp2").className = "AvailablePowerUp";
        }
    }
    if(IsPowerUp3Buyed == false){
        if(score >= 100){
            document.getElementById("PowerUp3").className = "AvailablePowerUp";
        }
    }
    if(IsPowerUp4Buyed == false){
        if(score >= 300){
            document.getElementById("PowerUp4").className = "AvailablePowerUp";
        }
    }
    if(IsPowerUp5Buyed == false){
        if(score >= 700){
            document.getElementById("PowerUp5").className = "AvailablePowerUp";
        }
    }
    if(IsPowerUp6Buyed == false){
        if(score >= 1000){
            document.getElementById("PowerUp6").className = "AvailablePowerUp";
        }
    }
    if(IsPowerUp7Buyed == false){
        if(score >= 5000){
            document.getElementById("PowerUp7").className = "AvailablePowerUp";
        }
    }

    if(OldScore != score){
        OldScore = score;
        document.getElementById("ClickButton").className = "ClickedButton";
        setTimeout(ClickButtonNormal,200);
    }
}