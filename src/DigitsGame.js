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

DigitsGame.prototype.run= function() {
	for (var i = 0; i < arguments.length; i++) {
		
		if (arguments[i] == this.targetNumber) {
			return this.statements.win;
		} else {
			if (this.count >= this.maxCount) {
				return this.statements.lose;
			} else {
				return this.statements.going;
			}
		}
	};
}