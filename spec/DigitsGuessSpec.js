describe("DigitsGuess", function() {
	
	beforeEach(function(){
		spyOn(DigitsUtil, 'random').andCallThrough();
		DigitsGuess.guess(DigitsUtil.random(), 1234);
	});

	it("random function should have been called after guess is called", function(){
		expect(DigitsUtil.random).toHaveBeenCalled();
	});

	

});