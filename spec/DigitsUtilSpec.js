describe("DigitsUtil", function() {
	it("should return 4A0B when compare exactly two same number", function(){
		expect(DigitsUtil.compare(1234, 1234)).toEqual("4A0B");
	});

	it("should return 0A0B when compare two undisticnt digits numbers", function(){
		expect(DigitsUtil.compare(1234, 5678)).toEqual("0A0B");
	});

	it("should return 0A4B when compare two numbers, which has exactly same digits, but in different position", function(){
		expect(DigitsUtil.compare(1234, 4321)).toEqual("0A4B");
	});

	it("should return mAnB when compare two four digits numbers", function(){
		expect(DigitsUtil.compare(1234, 1256)).toEqual("2A0B");
		expect(DigitsUtil.compare(1934, 1256)).toEqual("1A0B");
		expect(DigitsUtil.compare(1234, 1356)).toEqual("1A1B");
	});
});