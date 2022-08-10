const firstName = "sulyman";
console.log(typeof firstName);
const lastName = "yasir";
console.log(typeof lastName);
const country = "saudi arabia";
console.log(typeof country);
const city = "ilorin";
console.log(typeof city);
const age = 18;
console.log(typeof age);
const isMarried = true;
console.log(typeof isMarried);
const year = 2018;
console.log(typeof year);

//2 Check if type of '10' is equal to 10
console.log(typeof "10" === 10);

//3 Check if parseInt('9.8') is equal to 10
console.log(parseInt(9.8) === 10);

//4 Boolean value is either true or false.
//Write three JavaScript statement which provide truthy value.
//Write three JavaScript statement which provide falsy value.
var trut = console.log(2 > 1);
var truth = console.log(3 > 2);
var truthy = console.log(4 > 3);

var fal = console.log(2 < 1);
var fals = console.log(3 < 2);
var falsy = console.log(4 < 3);

//5 Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//Find the length of python and jargon and make a falsy comparison statement.
4 > 3 == true;
4 >= 3 == true;
4 < 3 == false;
4 <= 3 == false;
(4 == 4) == true;
(4 === 4) == true;
(4 != 4) == false;
(4 !== 4) == false;
(4 != "4") == false;
(4 == "4") == true;
(4 === "4") == false;
var gon = "jargon".length;
var thon = "python".length;
console.log(gon != thon);

//6 Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
//There is no 'on' in both dragon and python

4 > 3 && 10 < 12 == true;
4 > 3 && 10 > 12 == false;
4 > 3 || 10 < 12 == true;
4 > 3 || 10 > 12 == false;
!(4 > 3) == true;
!(4 < 3) == false;
!false == true;
!(4 > 3 && 10 < 12) == true;
!(4 > 3 && 10 > 12) == false;
!(4 === "4") == false;

var string = "there is no 'on' in dragon and python";

//7 Use the Date object to do the following activities
//What is the year today?
//What is the month today as a number?
//What is the date today?
//What is the day today as a number?
//What is the hours now?
//What is the minutes now?
//Find out the numbers of seconds elapsed from January 1, 1970 to now.

var date = new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getTime());
