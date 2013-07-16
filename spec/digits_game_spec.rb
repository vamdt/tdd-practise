require 'digits_game'
require 'spec_helper'

DigitsGame.class_eval do
  def init
    @target_number = 1234
  end
end

describe DigitsGame do
  before(:each) do
    @game = DigitsGame.new
    @game.init
  end

  it "should return winner when the target number guessed" do
    @game.run(1234).should == "winner"
  end

  it "should return try again when guessed wrong and guess count < 6" do
    @game.run(4321, 1235, 3214).should == "try again"
  end

  it "should return lose when guessed over 6" do
    @game.run(4321, 1235, 3214, 5678, 8904).should == "try again"
    @game.run(4321, 1235, 3214, 5678, 8904, 1356).should == "lose"
    @game.run(4321, 1235, 3214, 5678, 8904, 8035, 4568).should == "lose"
  end

end