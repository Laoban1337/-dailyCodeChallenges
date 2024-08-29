/*In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided die. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.

Can you reach your friend's tile number in the next roll? Create a function that takes your position a and your friend's position b and returns a boolean representation of whether it's possible to earn a bonus on any die roll.

Examples
possibleBonus(3, 7) ➞ true

possibleBonus(1, 9) ➞ false

possibleBonus(5, 3) ➞ false*/


  /*Solution Steps
Check if moving is possible: If a >= b, return false because you can't move backward or stay in place to get a bonus.
Check the range: If a < b and b is within a + 1 to a + 6, return true because it's possible to land on b with a single die roll.
Otherwise: Return false since b is more than 6 tiles away.*/


function possibleBonus(a, b) {
	if(a>=b){
		return false
	}
	if(b-a >=1&& b-a<=6){
		return true
	}
	else{
		return false
	}
}