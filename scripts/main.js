/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

function handValue (hand) {
  let total = 0;
  for (let i=0; i < hand.length; i++){
    let card = hand[i];
    if(card === "J" || card === "Q" || card === "K") {
        total += 10;
    }
    if (parseInt(card) > 1 || parseInt(card) < 11){
     total += parseInt(card);
   }
    // if ( card === "A" && total <= 10 )
    //  total += 11
    //
  }

  return total;
}
