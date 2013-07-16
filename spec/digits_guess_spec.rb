require 'digits_guess'
require 'digits_random'

describe DigitsGuess do
  before(:each) do

  end

  it "should return nAnB when guess a number" do
    DigitsRandom.stub(:random).and_return(1234)
    DigitsGuess.guess(DigitsRandom.random, 2314).should == "1A3B"
  end

end