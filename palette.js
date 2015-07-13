

function randomize () {
	var color = '#' + (Math.random() * 0xF << 0).toString(16) + (Math.random() * 0xF << 0).toString(16) + (Math.random() * 0xF << 0).toString(16);
	$(this).css("background-color", color);
	$(this).text(color);
}

$(".Kasten").each(randomize);