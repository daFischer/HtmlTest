

function randomize () {
	var rsum = 0;
	var r = 0;
	var color = '#';
	for (var i = 0; i < 3; i++) {
		r = Math.random();
		rsum = r + rsum;
		color += (r * 0xF << 0).toString(16)
	};
	if(rsum<1)
		$(this).css("color", "#FFFFFF");
	$(this).css("background-color", color);
	$(this).text(color);
}

$(".Kasten").each(randomize);