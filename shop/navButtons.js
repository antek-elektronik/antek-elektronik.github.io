function Home(){
  //window.location.href = "https:\\\\antek-gzara-animations.github.io\\shop";
  document.getElementsByClassName("HeaderButton").style.color = "red";
}
function Apps(){
  window.location.href = "https:\\\\antek-gzara-animations.github.io\\shop\\programs";
}
function Games(){
  window.location.href = "https:\\\\antek-gzara-animations.github.io\\shop\\games";
}

document.getElementById("HomeBtn").style.position = "static";
document.getElementById("Apps").style.position = "static";
document.getElementById("Games").style.position = "static";

document.getElementById("HomeBtn").style.display = "inline-block";
document.getElementById("Apps").style.display = "inline-block";
document.getElementById("Games").style.display = "inline-block";

