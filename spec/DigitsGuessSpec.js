describe("DigitsGuess", function() {
	
	beforeEach(function(){
		spyOn(DigitsUtil, 'random').andReturn(1234);
		DigitsGuess.guess(DigitsUtil.random(), 1234);
	});

	it("random function should have been called after guess is called", function(){
		expect(DigitsUtil.random).toHaveBeenCalled();
	});

	it("it should return mAnB when guess random number with input number", function(){
		expect(DigitsGuess.guess(DigitsUtil.random(), 1234)).toEqual("4A0B");
		expect(DigitsGuess.guess(DigitsUtil.random(), 1243)).toEqual("2A2B");
		expect(DigitsGuess.guess(DigitsUtil.random(), 1256)).toEqual("2A0B");
		expect(DigitsGuess.guess(DigitsUtil.random(), 5678)).toEqual("0A0B");
	});

});