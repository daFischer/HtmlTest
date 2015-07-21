var buttonid = 0;

function clickButton(i) {




	// insert the new div into the clicked button's parent-div
	var p = document.getElementById("button" + i ).parentElement;

	// find out current depth of the parent div
	var fb = parseInt(p.getAttribute("fizzbuzz"));

	var newPara = document.createElement('p');
	newPara.innerText = document.getElementById("textarea" + i ).value;
	p.insertBefore(newPara, document.getElementById("textarea" + i ));
	//p.removeChild(document.getElementById("textarea" + i ));

	// create new div and change its order with the button
	var newDiv = addComment(p, fb);
	p.insertBefore(newDiv, document.getElementById("textarea" + i ));

	document.getElementById("textarea" + i ).value = "";

}

function addComment(parentDiv, fb)
{
	// create a new div and fill it with a new button
	var div = document.createElement('DIV');
	div.innerHTML = '<textarea id="textarea' + buttonid + '"></textarea><br><button id="button' + buttonid + '" type="button" onclick="clickButton(' + buttonid + ')">Klick</button><br><br>';
	div.classList.add("comment");

	// append new div to given parentDiv
	parentDiv.appendChild(div);

	// depth rises by 1
	fb +=1;
	div.setAttribute("fizzbuzz", fb);

	// divs in every second depths are gray
	if (fb % 2 == 0) {
		div.style.backgroundColor = "#F0F0F0";
	}
	else {
		div.style.backgroundColor = "#E0E0E0";
	}

	// increase global variable buttonid to avoid id collisions
	buttonid +=1;

	return div;
}

// create initial div and button
addComment(document.getElementById("container"), 0);