require 'digits_compare'

describe DigitsCompare do
  it "should returns 4A0B given two same number" do
    DigitsCompare.compare(1234, 1234).should == "4A0B"
  end

  it "should returns 0A4B given exactly different number" do
    DigitsCompare.compare(1234, 5678).should == "0A0B"
    DigitsCompare.compare(1234, 4321).should == "0A4B"
  end

  it "should returns nAnB given n-digits equals" do
    DigitsCompare.compare(1234, 5234).should == "3A0B"
    DigitsCompare.compare(1234, 8135).should == "1A1B"
  end

  it "should raise exception when params not number" do
    DigitsCompare.compare("1234", "tall").should raise_exception
  end


end