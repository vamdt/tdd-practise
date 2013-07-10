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