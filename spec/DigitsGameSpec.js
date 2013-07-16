describe("DigitsGame", function() {
	var game;
	var statements;

	beforeEach(function(){
		spyOn(DigitsUtil, 'random').andReturn(1234);
		game = new DigitsGame();
		statements = {
			win: "win",
			going: "try again",
			lose: "lose"
		}
	});	

	it("should return 'win' when input a right number <= six times", function(){
		expect(game.run(1234)).toEqual(statements.win);	
		expect(game.runAgain(1345, 1456, 1234)).toEqual(statements.win);	
		expect(game.runAgain(1345, 1456, 1278, 1289, 1234)).toEqual(statements.win);
		expect(game.runAgain(1345, 1456, 1234, 1289, 2345, 1234)).toEqual(statements.win);
	});	

	it("should return 'try again' when input a wrong number < six times",function(){
		expect(game.run(9876)).toEqual(statements.going);
		expect(game.runAgain(9876, 7659)).toEqual(statements.going);
		expect(game.runAgain(9876, 1456, 1235, 1289, 2345)).toEqual(statements.going);
	})


	it("should return 'lose' when input a wrong number >= six times",function(){
		expect(game.run(9876, 1456, 1235, 1289, 2345, 9567)).toEqual(statements.lose);
		expect(game.runAgain(9876, 7659, 1235, 1289, 2345, 9567, 8475)).toEqual(statements.lose);
	})

	it("should return 'lose' even innput a right number > six times", function(){
		expect(game.runAgain(9876, 7659,1235, 1289, 2345, 9567, 1234)).toEqual(statements.lose);
	})

});