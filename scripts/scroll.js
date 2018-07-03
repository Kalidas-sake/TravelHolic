
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
//for showing nothing to show msg when database is empty
        //var records = <?php print($number_of_results); ?>;
        
        //alert("test");
        //errblock.style.display = 'block';
        if (records > 0) {
            //document.getElementById("noData").style.display = "none";debugger;
            //alert("test1");
        }