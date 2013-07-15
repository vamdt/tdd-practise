describe("DigitsGame", function() {
	var game;

	beforeEach(function(){
		spyOn(DigitsUtil, 'random').andReturn(1234);
		game = new DigitsGame;
	});	

	it("should return 'win' when input a right number <= six times", function(){
		expect(game.run(1234)).toEqual("win");
		expect(game.run(1345, 1456, 1234)).toEqual("win");	
		expect(game.run(1345, 1456, 1278, 1289, 1234)).toEqual("win");
		expect(game.run(1345, 1456, 1234, 1289, 2345, 1234)).toEqual("win");
	});	

	it("should return 'try again' when input a wrong number < six times",function(){
		expect(game.run(9876)).toEqual('try again');
		expect(game.run(9876, 7659)).toEqual('try again');
		expect(game.run(9876, 1456, 1234, 1289, 2345)).toEqual('try again');
	})


	it("should return 'lose' when input a wrong number >= six times",function(){
		expect(game.run(9876, 1456, 1234, 1289, 2345, 9567)).toEqual('lose');
		expect(game.run(9876, 7659,1234, 1289, 2345, 9567, 8475)).toEqual('lose');
	})

	it("should return 'lose' even innput a right number > six times", function(){
		expect(game.run(9876, 7659,1234, 1289, 2345, 9567, 1234)).toEqual('lose');
	})

});