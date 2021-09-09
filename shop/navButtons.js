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

setInterval(1000, function(){
  if(titlestate){
    document.getElementById("title").innerHTML = "test";
    titleState = false;
  }
  else{
    document.getElementById("title").innerHTML = "Antek's store";
    titloestate = true;
  }
});