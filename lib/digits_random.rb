class DigitsRandom
  def self.random
    first_digit = Random.rand(1..9)
    digits_ary = (0..9).to_a
    digits_ary.delete(first_digit)
    (first_digit.to_s << digits_ary.shuffle[0..2].join("")).to_i
  end
end