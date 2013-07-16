class DigitsCompare

  def self.compare(first_number, second_number)
    return "4A0B" if first_number == second_number
    same_digit_count = 0
    same_digit_but_different_position_count = 0

    0.upto(3) do |index|
      if first_number.to_s[index] == second_number.to_s[index]
        same_digit_count += 1
      elsif first_number.to_s.include?(second_number.to_s[index])
        same_digit_but_different_position_count += 1
      end
    end
    "#{same_digit_count}A#{same_digit_but_different_position_count}B"
  end

end