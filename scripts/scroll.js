window.onscroll = function() {myFunction()};

var header = document.getElementById("mynavbar");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("black");
  } else {
    header.classList.remove("black");
  }
}