// this function changes the source of the image according to the entered value in the input box
// its scale is updated as well
function onchange() {
	$("#image").attr("src", $("#link").val());
	var scale = Math.min(1, $("#image").parent().width() / $("#image").prop("naturalWidth"));
	$("#image").width(scale * $("#image").prop("naturalWidth"));
}

$("#link").change(onchange);
onchange();
