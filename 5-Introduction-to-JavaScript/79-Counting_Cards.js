// Practice with both switch and if/else if/else. Shows ideal use cases for both. Switch for the many many conditions of the cards, and if for the simple decision of Bet or Hold.
 
var count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10: 
    case "J": 
    case "Q": 
    case "K": 
    case "A": 
      count--;
      break;
  }

  if (count > 0) {
    return count + " Bet";
  }
  else {
    return count + " Hold";
  }
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');