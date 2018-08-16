let billTotalInCents = 675;
let partySize = 1;
let tipPercentage = 20;

let totalTipInCents = billTotalInCents * tipPercentage * .01 ;
let tipPerPersonInCents = totalTipInCents / partySize ;
let totalTipPerPerson = tipPerPersonInCents;

console.log("The total tip per person is: " + totalTipPerPerson.toLocaleString('us-US', { style: 'currency', currency: 'USD' }));
