describe("DigitsGame", function() {
	var game;

	beforeEach(function(){
		spyOn(DigitsUtil, 'random').andReturn(1234);
		game = new DigitsGame;
	});	

	it("should return 'win' when input a right number in six times", function(){
		expect(game.run(1234)).toEqual("win");
		//expect(game.run(1345, 1456, 1234)).toEqual("win");
		expect(game.run(1345, 1456, 1278, 1289, 1234)).toEqual("win");
		//expect(game.run(1345, 1456, 1234, 1289, 2345, 1234)).toEqual("win");
		expect(game.run(1345, 1456, 1234, 5678, 7890, 1230, 1234)).toEqual("lose");
	});	

});