DigitsUtilHelper = function () {}

DigitsUtilHelper.isEveryDigitsDistinct = function(number) {
	Object.prototype.length = function() {
		var size = 0;
		for(var key in this) {
			if (typeof this[key] == "number") {
				size++;
			}
		}
		return size;
	}

	var obj = {},number_text = number.toString();

	for(var i=0; i<number_text.length; i++) {
		obj[number_text.charAt(i)] = i;
	}
	return obj.length() == 4;
}