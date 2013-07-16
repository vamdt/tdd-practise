require 'digits_random'
require 'digits_compare'

class DigitsGame

  def initialize
    @target_number ||= 0
  end

  def init
    @target_number = DigitsRandom.random
  end

  def run *input_numbers
    1.upto(input_numbers.size) do |index|
      if DigitsCompare.compare(@target_number, input_numbers[index-1]) == "4A0B"
        return "winner"
      else
        if index >= 6
          return "lose"
        end
      end
    end
    "try again"
  end
end