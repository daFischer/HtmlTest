var buttonid = 0;

function clickButton(i) {




	// insert the new div into the clicked button's parent-div
	var p = $("#button" + i ).parent();

	// find out current depth of the parent div
	var fb = parseInt(p.attr("fizzbuzz"));

	// create a new paragraph
	var newPara = document.createElement('p');
	// get the string we want to insert from the correct textarea element
	var textarea = $("#textarea" + i);
	// set the new paragraph's text to the edited string value
	$(newPara).text(textarea.val());
	// edit the string to enable correct newlines
	$(newPara).html($(newPara).html().replace(/\n/g, '<br>'));
	// the textarea's string is reset
	textarea.val("");
	// insert the new paragraph
	textarea.before(newPara);

	// create new div and change its order with the button
	var newDiv = addComment(p, fb);
	textarea.before(newDiv);

}

function addComment(parentDiv, fb)
{
	// create a new div and fill it with a new button
	var div = document.createElement('DIV');
	div.innerHTML = '<textarea id="textarea' + buttonid + '"></textarea><br><button id="button' + buttonid + '" type="button" onclick="clickButton(' + buttonid + ')">Klick</button><br><br>';
	div.classList.add("comment");

	// append new div to given parentDiv
	parentDiv.append(div);

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
addComment($("#container"), 0);