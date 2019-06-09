var subtitle = [
  "Tech enthusiast",
  "Indonesian",
  "Moé lover",
  "17",
  "Student",
  "Латифа <3",
  "comfyte" // initial value
]

const Nmodecache = localStorage.getItem('Nmode') ? localStorage.getItem('Nmode') : null;

if (Nmodecache) { // if exists
  document.documentElement.setAttribute('data-theme', Nmodecache);
}

function toggleNmode() {
  if (document.documentElement.getAttribute('data-theme') == 'dark') {
    document.documentElement.removeAttribute('data-theme'); // change theme to light
    localStorage.removeItem('Nmode'); // remove darktheme entry from local storage
    $(".togglebutton").removeClass("fa-sun");
    $(".togglebutton").addClass("fa-moon"); // change toggle button icon to moon
  }
  else {
    document.documentElement.setAttribute('data-theme', 'dark');  // change theme to dark
    localStorage.setItem('Nmode', 'dark');  // add darktheme entry to local storage
    $(".togglebutton").removeClass("fa-moon");
    $(".togglebutton").addClass("fa-sun");  // change toggle button icon to sun
  }
}

var i = 0;

function part0() { // 1s delay before changing subtitle
  setTimeout(part1, 1000);
}

function part1() { // turn down opacity before changing
  $("h2").css("opacity", 0);
  setTimeout(part2, 500); // duration according to css transition: opacity
}

function part2() { // change!
  $("h2").text(subtitle[i]);
  if (i == subtitle.length-1) {i = 0;}
  else {i++;}
  setTimeout(part3, 250); // slight delay before displaying again
}

function part3() { // display!
  $("h2").css("opacity", 1);
  setTimeout(part0, 500); // duration according to css transition
}

function loaded() {
  $("h2").text(subtitle[subtitle.length-1]);
  // $("#pleasewait").css("display", "none");
  if (Nmodecache) {
    $(".togglebutton").removeClass("fa-moon");
    $(".togglebutton").addClass("fa-sun");  
  }
}

function init() {
  $("body").css("opacity", "1");
  $("img").css("transform", "unset");
  setTimeout(part0, 500); // wait until opacity restored
}

$(document).ready(loaded);
$(window).on('load', init);