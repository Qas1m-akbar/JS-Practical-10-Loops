// function getDay(dayNumber) {
//   let day;
//   switch (dayNumber) {
//     case 1:
//       day = "Sunday";
//       break;
//     case 2:
//       day = "Monday";
//       break;
//     case 3:
//       day = "Tuesday";
//       break;
//     case 4:
//       day = "Wednesday";
//       break;
//     case 5:
//       day = "Thursday";
//       break;
//     case 6:
//       day = "Friday";
//       break;
//     case 7:
//       day = "Saturday";
//       break;

//     default:
//       day = "Invalid day number!";
//   }
//   console.log(day);
// }
// getDay(4); // function Calling

/* ----------------------------  Assignment 02 ------------------- */

// function getMonthName(monthNumber) {
//   let month;

//   switch (monthNumber) {
//     case 1:
//       month = "January ";
//       break;

//     case 2:
//       month = "Febuary";
//       break;

//     case 3:
//       month = "March";
//       break;

//     case 4:
//       month = "April";
//       break;

//     case 5:
//       month = "May";
//       break;

//     case 6:
//       month = "June";
//       break;

//     case 7:
//       month = "July";

//     case 8:
//       month = "August";
//       break;

//     case 9:
//       month = "September";
//       break;

//     case 10:
//       month = "October";
//       break;

//     case 11:
//       month = "November";
//       break;

//     case 12:
//       month = "December";
//       break;

//       default:
//         month = "Invalid month name!"

// }
//     console.log(month);
// }

//  getMonthName(1);

// -------------  finding Type of Vehicle with switch statement-----------------

// function getCarType(vehicle){
//     let type;

//     switch (vehicle.toLowerCase()) {

//       case "Car":
//         type = "You have a Car";
//         break;

//       case "Truck":
//         type = "You have a Truck";
//         break;

//       case "Airplane" :
//         type = "You have an aeroplane";
//         break;

//       case "ship":
//         type = "You have a Ship";
//         break;

//         default :
//           type = "Invalid Car name";

//         }
//         console.log(type);

// }

// getCarType("ship");

// ------------ Findind Shipping Cost with switch statement ------------

// function calculateShippingCost (weight){

//     let cost;

//     switch (true){

//         case(weight>=0 && weight<=10):
//         cost = "$5";
//         break;

//         case(weight>=10 && weight<=20):
//         cost = "$10";
//         break;

//         case(weight>=20 && weight<=30):
//         cost = "$15";
//         break;

//         case(weight>=30):
//         cost = "$20";
//         break;

//         default:
//             cost = "Invalid Weight!";

//     }

//      console.log("Shipping cost: "+ cost);

// }
//   calculateShippingCost(13);

// ----------------- Student Score ------------------

// function getGrade(score){
//     let grade;

//     switch(true){

//         case(score >= 90 && score <= 100):
//         grade = "You got A+ Grade!";
//         break;

//         case(score >= 80 && score <= 90):
//         grade = "You got A Grade!";
//         break;

//         case(score >= 70 && score <= 80):
//         grade = "You got B Grade!";
//         break;

//         case(score >= 60 && score <= 70):
//         grade = "You got B+ Grade!";
//         break;

//         case(score >= 50 && score <= 60):
//         grade = "You got C Grade!";
//         break;

//         case(score >= 40 && score <= 50 ):
//         grade = "You are fail!";
//         break;

//         default:
//             grade = " Invalid Score!";

//     }
//     alert("Grade:" + grade );

// }
// getGrade(55);

//  -------------------- DO-While Loops---------------------

/* ASSIGNMENT 1 ---> Pint number from 1 to 10 */

// let i =1;

// do{
//     console.log(i);
//     i++;

// }while(i<=10);

/* ASSIGNMENT 2 ---> Print Sum of Numbers */

//    let i = 1;
//    let sum = 0;

//    do{
//     sum += i;
//     i++;

//    }while(i<=10);

//    console.log("This is the sum from 1 to 10 " + sum)

/* ASSIGNMENT 3 ---> Guessing Game */

// function guessingGame() {
//   const targetNumber = Math.floor(Math.random() * 100) + 1;
//   let guess;

//   do {
//     guess = parseInt(prompt("Please Quess the number btw 1 to 100 "), 10);
//     if (guess < targetNumber) {
//       alert("quess is to low! Try Again");
//     } else if (guess > targetNumber) {
//       alert("To high! Try Again");
//     } else {
//       alert("Congratulation you guess the right number ");
//     }

//   } while (guess !== targetNumber);
// }
// guessingGame();



/* ASSIGNMENT 4 ---> finding Factorial */

// function factorial(n){
//     let result = 1;
//     let i = n;

//     do{
//         result = result * i;
//         i--;
//     }
//        while(i > 0);
//         return result;

// }
// console.log("Factorial of % is : " + factorial(5));




/* ASSIGNMENT 5---> finding Factorial */

// function multiplication(n){
//     let i = 1 ;

//     do{
//         console.log(n + " x " + i + " = " + (n*i));
//         i++
        
//     }
//         while(i <= 10);
// }

// multiplication(10);
