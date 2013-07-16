require 'digits_random'

describe DigitsRandom do
  before(:each) do
  end

  it "should return a four-digits number" do
    DigitsRandom.random().to_s.size.should == 4
  end

  it "every digit should be different" do
    DigitsRandom.random().to_s.split("").uniq.size.should == 4
  end

end