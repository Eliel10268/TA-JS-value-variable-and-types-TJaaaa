//  Loop basics

// Do the following using loops:

// Using `console.log` log all the values from 1 to 10.

for (let i = 1; i <= 10; i++) {
  console.log("Number " + i);
}

// Using `console.log` log all the evan values from 1 to 10.
// Using `console.log` log all the od values from 1 to 10.
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log("Number " + i + " is even");
  } else console.log("Number " + i + " is odd");
}

// Calculate the sum of all numbers from 1 to 10.
let total = 0;
for (let i = 1; i <= 10; i++) {
  total += i;
}
console.log("The Total is " + total);
// Log all the values from 1 to 10 using while loop

let sum = 0;
let i = 0;

while (i <= 10) {
  sum += i;
  i++;
}
console.log("The Sum is " + sum);
