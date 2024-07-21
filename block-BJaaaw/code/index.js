// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let user = prompt("Enter a number: ");

if (user % 2 == 0) {
  console.log(" number is even");
} else {
  console.log(" number is odd");
}
// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

let number1 = prompt("Enter a number: ");
let number2 = prompt("Enter a number: ");
let maximum = Math.max(number1, number2);

alert("Maximum is  " + maximum);

// 3. Convert the above code using`?` terniary operator

let maxi =
  number1 > number2
    ? alert("Maximum is  " + number1)
    : alert("Maximum is  " + number2);
/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/

let housename = prompt("What is the house name : ");

if (housename === "stark") {
  console.log(" Winter is coming");
} else if (housename === "lannister") {
  console.log(" A lannister always pays his debt");
} else {
  console.log(" All men must die");
}

// 5. Convert the above code using`?` terniary operator

let housenam = prompt("What is the house name : ");
housenam === "stark"
  ? console.log(" Winter is coming")
  : console.log(" All men must die");
housename === "lannister"
  ? console.log(" A lannister always pays his debt")
  : console.log(" All men must die");
// Switch

switch (housenam) {
  case "stark":
    console.log(" Winter is coming");
    break;
  case "lannister":
    console.log(" A lannister always pays his debt");
    break;
  default:
    console.log(" All men must die");
}

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.

let month_number = prompt("Enter number of the month ");

let january = 31;
let february = 28;
let march = 31;
let april = 30;
let may = 31;
let june = 30;
let july = 31;
let august = 31;
let september = 30;
let october = 31;
let november = 30;
let december = 31;

if (month_number === 1) {
  alert("number of the days in the month " + january);
} else if (month_number === 2) {
  alert("number of the days in the month " + february);
} else if (month_number === 3) {
  alert("number of the days in the month " + march);
} else if (month_number === 4) {
  alert("number of the days in the month " + april);
} else if (month_number === 5) {
  alert("number of the days in the month " + may);
} else if (month_number === 6) {
  alert("number of the days in the month " + june);
} else if (month_number === 7) {
  alert("number of the days in the month " + july);
} else if (month_number === 8) {
  alert("number of the days in the month " + august);
} else if (month_number === 9) {
  alert("number of the days in the month " + september);
} else if (month_number === 10) {
  alert("number of the days in the month " + october);
} else if (month_number === 11) {
  alert("number of the days in the month " + november);
} else month_number === 12;

alert("number of the days in the month " + december);

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/

let salary;
let tax;
let user_salary = prompt("Enter the user's salary : ");

if (user_salary <= 20000) {
  tax = user_salary * 0.1;
  salary = user_salary - tax;
  console.log("The in -hand amount :" + salary);
} else if (user_salary <= 40000) {
  tax = user_salary * 0.2;
  salary = user_salary - tax;
  console.log("The in -hand amount :" + salary);
} else if (user_salary > 50000) {
  tax = user_salary * 0.3;
  salary = user_salary - tax;
  console.log("The in -hand amount :" + salary);
}

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/

let marks = prompt("Enter your mark: ");

if (marks > 100) {
  alert(`Marks can't be greater than 100`);
} else if (marks > 80 && marks < 100) {
  alert(`Grade A`);
} else if (marks > 50 && marks < 80) {
  alert(`Grade B`);
} else if (marks > 30 && marks < 50) {
  alert(`Grade C`);
} else if (marks > 0) {
  alert(`Grade D`);
} else alert("Out of range");

let your_mark = prompt("Enter your mark: ");

switch (true) {
  case your_mark > 100:
    alert("Marks can't be greater than 100");
    break;
  case your_mark > 80 && your_mark < 100:
    alert("Grade A");
    break;
  case your_mark > 50 && your_mark < 80:
    alert("Grade B");
    break;
  case your_mark > 30 && your_mark < 50:
    alert("Grade C");
    break;
  case your_mark > 0:
    alert("Grade D");
    break;
  default:
    alert("Out of range");
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

let weather = prompt("what's the weather like outside");

if (weather == "sunny") {
  alert("Wear a T-shirt");
} else if (weather == "rainy") {
  alert("Don't forget to take your raincoat");
} else if (weather == "hot") {
  alert("Get a hanky");
} else if (weather == "freezing") {
  alert("Get your sweeter on");
} else alert("Not a valid input");
