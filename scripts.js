/* AJAX code*/

function loadFileInto(fromFile, whereTo) {

	ajax = new XMLHttpRequest();

	ajax.open("GET", fromFile, true);

	ajax.onreadystatechange = function() {

		if ((this.readyState == 4) && (this.status == 200)) {
			document.getElementById(whereTo).innerHTML = this.responseText;

		} else if ((this.readyState == 4) && (this.status != 200)) {
			console.log("Error: " + this.responseText);

		}

	}

	ajax.send();

}

/* recipe consturctor*/

function Recipe(recipeName, imageURL, contributorName, IngredientsFileName) {
	this.name = recipeName;
	this.imgsrc = imageURL;
	this.contributor = contributorName;
	this.conFile = ConsoleName;

	/* screen updater*/
	this.displayRecipe = function() {
		document.querySelector("h1#recipeName").innerHTML = this.name;

		/* Contributor update */
		document.querySelector("h2#contributorName").innerHTML = "Contributed by" + this.contributor;

		/* image update*/
		document.querySelector("h3 img").src = this.imgsrc;

		/* Content Column update */
		loadFileInto(this.conFile, "History");
	

	}
}

Atari2600 = new Recipe
("Atari 2600",
	"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Atari-2600-Wood-4Sw-Set.jpg/1920px-Atari-2600-Wood-4Sw-Set.jpg",
	"Owen Kapuza",
	"Atari2600.html",


 
);


