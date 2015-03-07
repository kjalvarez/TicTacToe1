$(document).on('ready', function() {

var turnCounter = Number("2");

$(".col-md-4").click(function() {

	if (this.innerHTML != "X" && this.innerHTML != "O") {	
		if (turnCounter % 2 == 0) {
			this.innerHTML = "X";
			turnCounter++;
		} else {
		this.innerHTML = "O";
		turnCounter++
		};

		}
	});


});