require("minitest/autorun")
require("minitest/rg")

require_relative("../card_game.rb")
require_relative("../card.rb")

class TestCardGame < MiniTest::Test

  def setup()
    @card1 = Card.new("Hearts", 1)
    @card2 = Card.new("Spades", 10)
    @card3 = Card.new("Diamonds", 4)
    @card_array = [@card1, @card2, @card3]
    @card_game = CardGame.new()
  end

  def test_check_for_ace_true
    result = @card_game.checkforAce(@card1)
    assert_equal(true, result)
  end

  def test_check_for_ace_false
    result = @card_game.checkforAce(@card2)
    assert_equal(false, result)
  end

  def test_check_highest_card_first
    result = @card_game.highest_card(@card3, @card1)
    assert_equal(4, result)
  end

  def test_check_highest_card_second
    result = @card_game.highest_card(@card1, @card2)
    assert_equal(10, result)
  end

  def test_cards_total
    result = @card_game.cards_total(@card_array)
    assert_equal(15, result)
  end

end
