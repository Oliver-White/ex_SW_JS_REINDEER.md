var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];




var reindeer_color = "";

for (var i = 0; i < reindeer.length; i++) {
	reindeer_color += "<p>" + colors[i] + " " + reindeer[i] + "</p>";
}

console.log("reindeer_color");

var hohohoElement = document.getElementById("coloredReindeer").innerHTML = reindeer_color;