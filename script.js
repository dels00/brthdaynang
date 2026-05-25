// PASSWORD SYSTEM
const passwordScreen = document.getElementById("passwordScreen");
const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click", () => {

const password =
document.getElementById("passwordInput").value;

// PASSWORD
if(password === "2605"){

passwordScreen.style.opacity = "0";  

setTimeout(() => {  

  passwordScreen.style.display = "none";  

  // autoplay music setelah masuk  
  document.getElementById("bgMusic").play();  

},1000);

}else{

alert("Wrong password.");

}

});

// LOADER
window.addEventListener("load", () => {

setTimeout(() => {
document.querySelector(".loader").style.opacity = "0";

setTimeout(() => {  
  document.querySelector(".loader").style.display = "none";  
},1000);

},2500);

});

// LIVE CLOCK
function updateClock(){

const now = new Date();

const time = now.toLocaleTimeString();

document.getElementById("clock").innerHTML = time;

}

setInterval(updateClock,1000);

// OPEN BUTTON
document.getElementById("openBtn").addEventListener("click", () => {

document.querySelector(".message").scrollIntoView({
behavior:"smooth"
});

});

// MUSIC
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicToggle");

music.volume = 0.2;

musicBtn.addEventListener("click", () => {

if(music.paused){
music.play();
musicBtn.innerHTML = "⏸";
}else{
music.pause();
musicBtn.innerHTML = "▶";
}

});

// SCROLL ANIMATION
const fadeElements = document.querySelectorAll(".fade-up");

window.addEventListener("scroll", () => {

fadeElements.forEach(el => {

const top = el.getBoundingClientRect().top;  

if(top < window.innerHeight - 100){  
  el.classList.add("show");  
}

});

});

// IMAGE POPUP
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");

document.querySelectorAll(".photo-card img").forEach(img => {

img.addEventListener("click", () => {

popup.style.display = "flex";  
popupImg.src = img.src;

});

});

popup.addEventListener("click", () => {
popup.style.display = "none";
});

document.getElementById("enterBtn").addEventListener("click", () => {

const password =
document.getElementById("passwordInput").value;

if(password === "2605"){

document.getElementById("bgMusic").play();

}

});
