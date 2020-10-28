Array.prototype.random = function () {
	return this[Math.floor((Math.random() * this.length))];
}
var deck = ["dragon", "zombie", "eldrazi", "spirit", "angel", "discard", "mill", "wizard", "rakdos", "demon_bw", "land_destruct", "enchantment", "witch", "werewolf", "burn", "vampire"];
var button = document.querySelector("button");


button.addEventListener("click", function () {
	var deck1 = deck.random();
	var deck2 = deck.random();
	while (deck1 != deck2) {
		document.getElementById("container").innerHTML =
			`<div id="div-left">
			<img src="images/${deck1}.jpg" alt="">
			</div>
			<div id="div-right">
			<img src="images/${deck2}.jpg" alt="">
			</div>`;
		break;
	};
});



