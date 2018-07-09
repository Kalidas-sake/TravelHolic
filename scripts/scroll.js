
window.onscroll = function() {
   // alert('scroll function');

    myFunction()};

var header = document.getElementById("mynavbar");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("black");
  } else {
    header.classList.remove("black");
  }
}
b120514229