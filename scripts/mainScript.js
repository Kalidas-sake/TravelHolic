//modal script when click on button post
// Get the modal
var modal = document.getElementById('myModal');
// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
    btn.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    btn.style.display = "block";
    location.reload(true);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        btn.style.display = "block";
    }
}

//script when click on save button on form for savind new heading
$("#sub").click(function () {
    var data = $("#myForm :input").serializeArray();

    $.post($("#myForm").attr("action"), data, function (info) {
        alert(info);
        clearInput();
        //this.reload;
    });
});

$("#myForm").submit(function () {
    return false;
})

function clearInput() {
    $("#myForm :input").each(function () {
        $(this).val('');
    });
}


function loadImageFunction() {
    var loadimg1 = document.getElementById('previmg1').value;
    var loadimg2 = document.getElementById('previmg2').value;
    $("#prev1div").html("<img src='" + loadimg1 + "'  height ='136' width = '236' alt='Uploading....'/>");
    $("#prev2div").html("<img src='" + loadimg2 + "'  height ='136' width = '236' alt='Uploading....'/>");
}

//script for fetching data from google album link
$("#btnEnter").click(function () {
    var mylink = $("#form2 :input").serializeArray();
    $('#loadingmessage').show();
    $.post('parse.php', mylink, function (info) {
        var array = info.split(",");
        document.getElementById("titletext").value = array[3];
        $('#loadingmessage').hide();
    });
});

$("#form2").submit(function () {
    return false;
});
