/*
🎖 Write a program to calculate the total price of your phone purchase. With these conditions
 * [ ] You will keep purchasing phones (hint: loop!) until you run out of bank balance.
 * [ ] You'll also buy accessories for each phone as long as your purchase amount is below your spending threshold.
 * [ ] After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted like ($334.76).
 * [ ] Finally, check the amount against your bank account balance to see if you can afford it or not.
*/

const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0;
// your code goes here

// ⛑ Answer of the above will `$334.76`.

// Loop to keep purchasing phones until we run out of bank balance
while (amount + PHONE_PRICE <= bank_balance) {
  // Buy a phone
  amount += PHONE_PRICE;

  // Buy accessories if within the spending threshold
  if (amount + ACCESSORY_PRICE <= SPENDING_THRESHOLD) {
    amount += ACCESSORY_PRICE;
  }
}

// Calculate tax and add to the total amount
var tax = amount * TAX_RATE;
amount += tax;

// Format the total amount to two decimal places and add dollar sign
var formattedAmount = "$" + amount.toFixed(2);

// Print out the total purchase amount
console.log("Total purchase amount: " + formattedAmount);

// Check if the amount exceeds the bank balance
if (amount > bank_balance) {
  console.log("You can't afford this purchase.");
} else {
  console.log("You can afford this purchase.");
}
