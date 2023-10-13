//hello world
//...........

// console.log("hello Kwizera");
// console.log("I am learning js");

//string
//..........
// let firstName = "Kwizera";
// let lastName = "Isezerano";
// let fullName = firstName + " " + lastName;
// console.log(fullName);

//numbers
//............

// let num = 11;
// let num2 = num + 1 * 2;
// console.log(num2);

// let age = 26
// let newAge = (age + 1) / 7
// console.log(newAge)

//percentage calculations
//.......................

// let studentMarks = 18;
// let maxMarks = 20;
// let percent = (studentMarks / maxMarks) * 100;
// console.log(percent);

//temperature converter
//..............

// let fahrenheit = 50;
// let celsius = ((fahrenheit - 32) * 5) / 9;
// let kelvin = ((fahrenheit + 459.67) * 5) / 9;
// console.log(celsius);
// console.log(kelvin);

//boolean and comparison operator
//...............................
// let temp = 31;
// // let isfreezing = temp === 32;
// let isfreezing = temp !== 32;
// console.log(isfreezing);

//if statements
//..............
//user accounts verfy
//...................

// let isAccountLocked = false;
// let userRole = "user";
// if (isAccountLocked) {
//   console.log("account isLocked");
// } else if (userRole === "admin") {
//   console.log("welcome admin");
// } else {
//   console.log("welcome");
// }

//functions
//''''''''''''''''''''''

// let greetUser = function () {
//   console.log("welcome user");
// };
// greetUser();

// let square = function (num) {
//   let result = num * num;
//   return result;
// };
// let value = square(3);
// let value2 = square(10);
// console.log(value);
// console.log(value2);
// let presentation = function (name, age, city, study) {
//   console.log(
//     "my name is" +
//       " " +
//       name +
//       " ," +
//       "my age is" +
//       " " +
//       age +
//       " ," +
//       "i live at" +
//       city +
//       " ," +
//       "i studied" +
//       " " +
//       study
//   );
// };
// presentation("KWIZERISEZERANO", 29, "Gisenyi", "IT at IPRC TUMBA");

//undefined and null
//...................

// let name;
// name = "John";
// if (name === undefined) {
//   console.log("provide name");
// } else {
//   console.log(name);
// }

// let name = null;
// if (name === null) {
//   console.log("name is null");
// } else {
//   console.log(name);
// }

// let add = function (a, b, c, d) {
//   return a + b + c + d;
// };
// let result = add(1, 2, 40, 5);
// console.log(result);

// let records = function (name, marks) {
//   console.log(name, marks);
// };
// records("kwizera", 100);
// records("aline", 90);

//undefined && null
//..................

// let age;
// age = undefined;
// let age1 = null;
// console.log(age);
// console.log(age1);

//template string????????????????????????????????????????????????????????????????
//................
// let name = "mama";
// let age = 55;
// console.log("my name is ${name}");

//Grade calcultor??????????????????????????????????????
//.................
// let gradeCalculator = function (marks, total) {
//   let percent = (marks / total) * 100;
//   let gradeLetter = "";
//   if (percent >= 90) {
//     gradeLetter = "A";
//   } else if (percent >= 80) {
//     gradeLetter = "B";
//   } else if (percent >= 70) {
//     gradeLetter = "C";
//   } else if (percent >= 60) {
//     gradeLetter = "D";
//   } else if (percent >= 50) {
//     gradeLetter = "E";
//   } else {
//     gradeLetter = "F";
//   }
//   return `You got a ${gradeLetter} (${percent}%)!`;
// };
// let result = gradeCalculator(17, 20);
// console.log(result);

//objects
//...........

// let mybook = {
//   title: "animal",
//   author: "mama",
//   publisher: "bakame",
//   pageCount: 326,
// };
// console.log(`${mybook.title} by ${mybook.author}`);
// console.log(`${mybook.publisher}`);
// mybook.title = "lovely daddy";
// console.log(`${mybook.title}`);
// console.log(mybook);

// let whoIsMe = {
//   name: "Kwizerisezerano",
//   age: 21,
//   hobbies: "listing music && dancing",
//   parents: "John and Christine",
//   location: "Gisenyi",
//   race: "brown",
//   favouriteFood: "Fish,Meat,Cassava bread",
//   favouriteColor: "darkblue&& white",
//   lover: "Promise",
//   familyMembers: "5 sisters and 2 brothers",
//   me: "i am lastborn",
// };
// console.log(`${whoIsMe.me} by ${whoIsMe.name}`);

//exploring string methods
//.......................
//length property
let fullName = "  KWIZERISEZERANO  me   ";
// console.log(fullName.length);
//convert to upper case
// console.log(fullName.toUpperCase());
// console.log(fullName.toLowerCase());
// console.log(fullName.toLocaleUpperCase());
// console.log(fullName.includes("me"));
// console.log(fullName.trim());

//password verification
// let isValid = function (password) {
//   if (password.length > 8 && password.includes("password")) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(isValid("password1234"));

//exploring number methods
//.........................
// let num = 1000.987;
// console.log(num.toFixed(5));
// console.log(Math.round(num));
// console.log(Math.floor(num));
// console.log(Math.ceil(num));

// let min = 10;
// let max = 20;
// let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(randomNum);

//constant variables
//...................
// const person = {
//   age: 28,
// };
// person.age = 80;
// console.log(person.age);

// const age = 20;
// age = 60;
// console.log(age);
//console.log()

//array
//......

const notes = ["DB", "JAVA", "NET"];
// console.log(`you have${notes.length}`);
// console.log(notes);
// console.log(notes.push("oracle"));
// console.log(notes.pop());
// console.log(notes.shift());
// console.log(notes.unshift("me"));
// console.log(notes.splice(1, 1));
// console.log(notes);
notes.forEach(function (tem, index) {
  console.log(index);
  console.log(tem);
});
