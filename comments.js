var buttonid = 0;

function addComment(i) {
	buttonid +=1;

	// create a new div and fill it with a new button
	var div = document.createElement('DIV');
	div.innerHTML = '<button id="button' + buttonid + '" type="button" onclick="addComment(' + buttonid + ')">Klick</button><br><br>';

	// insert the new div into the clicked button's parent-div
	var p = document.getElementById("button" + i ).parentElement;
	p.insertBefore(div, document.getElementById("button" + i ));

	// depth rises by 1
	var fb=parseInt(p.getAttribute("fizzbuzz"));
	fb +=1;
	div.setAttribute("fizzbuzz", fb);

	// divs in every second depths are gray
	if (fb % 2 == 0) {
		div.style.backgroundColor = "gray";
	}
	else {
		div.style.backgroundColor = "white";
	}

}