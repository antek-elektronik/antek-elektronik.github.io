function Home(){
  window.location.href = "https:\\\\antek-gzara-animations.github.io\\shop";
}
function Apps(){
  window.location.href = "https:\\\\antek-gzara-animations.github.io\\shop\\programs";
}
function Games(){
  window.location.href = "https:\\\\antek-gzara-animations.github.io\\shop\\games";
}

let titleState = false;

var titleInteral = window.setInterval(function(){
  if(titleState){
    document.getElementById("title").innerHTML = " ";
    titleState = false;
  }
  else{
    document.getElementById("title").innerHTML = "Antek's store";
    titleState = true;
  }
}, 2000);

var clickSound = new Audio('https:\\\\antek-gzara-animations.github.io\\resources\\audio\\click.mp3');

window.addEventListener("click", function() {
  clickSound.play();
}​);​