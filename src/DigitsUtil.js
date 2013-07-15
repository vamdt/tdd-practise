var DigitsUtil = function() {}

DigitsUtil.compare = function(first_number, second_number) {
	if (first_number == second_number) {
		return "4A0B";
	}
	var sameDigitsAndSamePositionCount = 0,
		sameDigitsButWrongPositionCount = 0,
		first_number_text = first_number.toString(),
		second_number_text = second_number.toString();

	for (var i = 0; i < first_number_text.length; i++) {
		if (first_number_text.charAt(i) == second_number_text.charAt(i)) {
			sameDigitsAndSamePositionCount ++;
		} else if (first_number_text.indexOf(second_number_text.charAt(i)) != -1) {
			sameDigitsButWrongPositionCount++;	
		}
	};
	return [sameDigitsAndSamePositionCount, "A", sameDigitsButWrongPositionCount, "B"].join("");
}

DigitsUtil.random = function() {
	var randomInteger = function(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;	
	}
	var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9],
		result = [];

	for(var i = 0; i < 4; i++) {
		var position = randomInteger(0, numbers.length - 1);
		result.push( numbers[position]);
		numbers.splice(position, 1);
		if(i == 0) {
			numbers.push(0);
		}
	}
	return parseInt(result.join(""));
}