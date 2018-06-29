$("#sub").click( function () {
	var data = $("#myform :input").serializeArray();

	$.post( $("#myform").attr("action"), data, function(info) {
		$("#result").html(info);
		clearInput();
	});
});

$("#myform").submit( function() {
	return false;
})   

function clearInput(){
	$("#myform :input").each( function() {
		$(this).val('');
	});
}