var DigitsGame = function() {
	this.init.apply(this, arguments);
}

DigitsGame.prototype.init = function() {
	this.targetNumber = DigitsUtil.random();
	this.count = 0;
	this.maxCount = 6;
	this.statements = {
		win: "win",
		going: "try again",
		lose: "lose"
	};
}

DigitsGame.prototype.judge= function(inputNumber) {
	this.count++;
	if (DigitsGuess.guess(inputNumber,this.targetNumber) === "4A0B" && this.count < this.maxCount) {
		return this.statements.win;
	} else if (DigitsGuess.guess(inputNumber,this.targetNumber) !== "4A0B" && this.count < this.maxCount) {
		return this.statements.going;
	} else if (this.count >= this.maxCount) {
		return this.statements.lose;
	} else {	
		throw "how can you be here?!"
	}
}

DigitsGame.prototype.run= function() {
	var result;
	for (var i = 0; i < arguments.length; i++) {
		result = this.judge(arguments[i]);
		if (result !== this.statements.going) {
			return result;
		} 
	};
	return this.statements.going;
}

DigitsGame.prototype.reset= function() {
	this.count = 0;
	return this;
}

DigitsGame.prototype.runAgain = function() {
	this.reset();
	return this.run.apply(this, arguments);
}