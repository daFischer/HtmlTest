var buttonid = 0;

function clickButton(i) {


	// insert the new div into the clicked button's parent-div
	var p = document.getElementById("button" + i ).parentElement;

	// find out current depth of the parent div
	var fb = parseInt(p.getAttribute("fizzbuzz"));

	// create new div and change its order with the button
	var newDiv = addComment(p, fb);
	p.insertBefore(newDiv, document.getElementById("button" + i ));

}

function addComment(parentDiv, fb)
{
	// create a new div and fill it with a new button
	var div = document.createElement('DIV');
	div.innerHTML = '<button id="button' + buttonid + '" type="button" onclick="clickButton(' + buttonid + ')">Klick</button><br><br>';
	div.classList.add("comment");

	// append new div to given parentDiv
	parentDiv.appendChild(div);

	// depth rises by 1
	fb +=1;
	div.setAttribute("fizzbuzz", fb);

	// divs in every second depths are gray
	if (fb % 2 == 0) {
		div.style.backgroundColor = "gray";
	}
	else {
		div.style.backgroundColor = "white";
	}

	// increase global variable buttonid to avoid id collisions
	buttonid +=1;

	return div;
}

// create initial div and button
addComment(document.getElementById("container"), 0);