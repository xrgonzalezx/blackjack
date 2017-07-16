/*
   Implement a Blackjack hand value calculator.
   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.
   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic. kj64a
*/

function handValue(hand) {
  let output = 0;
  for (var i = 0; i < hand.length; i++) {
    if (hand[i] === "K" || hand[i] === "Q" || hand[i] === "J") {
      output += 10;
    } else if (hand[i] === "A") {
        output += 1;
      }
      if (parseInt(card) > 1 || parseInt(card) < 11){
        total += parseInt(card);
      }
      else if ( parseInt(hand[i]) <= 10) {
      output += parseInt(hand[i]);
    }
    if (hand[i] === "A" && output <= 11) {
      output += 10;
    }

  }
  return output;
}

/* -----  Hints ------
1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11
*/
