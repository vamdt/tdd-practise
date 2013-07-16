require 'digits_compare'

class DigitsGuess
  def self.guess(target_number, input_number)
    DigitsCompare.compare target_number, input_number
  end
end