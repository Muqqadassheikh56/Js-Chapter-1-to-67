//  Chapter 21-25 STRING METHODS 

// Task#01
// var firstName = prompt(" Enter your 1st name ");
// var lastName = prompt(" Enter your last name ");
// var fullName =  firstName + " " + lastName;
// alert ("Welcome to my website " + fullName);

// Task#02
// var str = prompt("Enter your favourite Mobile phone model");
// var n = str.length;
// document.write("My favourite phone is: " + str  );
// document.write(" <br> Length of string is: " + n );

// Task#03
// var str = "Pakistani";
// var indexNum = str.indexOf("n");
// document.write( "String: " + str );
// document.write("<br> index of 'n': " + indexNum);

// Task#04
// var str = "Hello World";
// var indexNum = str.lastIndexOf("l");
// document.write("String: " + str);
// document.write("<br> index of 'I': " + indexNum);

// Task#05
// var str = "Pakistani";
// var char = str.charAt("3");
// document.write("String: " + str);
// document.write("<br> Chracter at index 3 is: " + char);

// Task#0
// var firstName = prompt(" Enter your 1st name ");
// var lastName = prompt(" Enter your last name ");
// var fullName =  firstName.concat(lastName) ;
// alert ("Welcome to my website " + fullName);

// Task#07
// var str = "Hyderabad";
// var res = str.replace("Hyder", "Islam");
// document.write("City: " + str);
// document.write("<br> After Replacement: " + res);

// Task#08
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var res = message.replace(/and/g ,  " & ");
// document.write(res);

// Task#09
// var num = "472";
// document.write("Value: " + num + "<br> Type: "  + typeof(num)) ;
// var num = 472;
// document.write("<br> Value:"  + num + "<br> Type :" + typeof (num)); 

// Task#10
// var str = prompt("Enter any chracter");
// var n = str.toUpperCase();
// document.write("User Input: "  + str);
// document.write("<br> Upper Case: " + n);

// Task#11
// var str = prompt("Enter any chracter");
// var n = str[0].toUpperCase() + str.slice(1).toLowerCase();
// document.write("User Input: "  + str);
// document.write("<br> Title Case: " + n);

// Task#12
// var num = 35.36;
// var string = num.toString();
// document.write("Number: " + string);
// num ="35.36".replace('.', '');
// document.write("<br> Result: " + num);

// Task#13
// var userName = prompt("Enter your name");
// var totalLength = userName.length;
// for( i =0; i< userName.length; i++){
//     if(userName.slice(i , i+1) == "!" || userName.slice(i , i+1) == "@" || userName.slice(i , i+1)== "." || userName.slice(i, i+1) == ",")
//     {
//         alert("Please enter valid username");
//     }
// }

// Task#14
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var bakery = prompt("Welcome to al-jannat bakery. What do u want to order ma'am/sir?");
// bakery = bakery.toLowerCase();
// var bakeryItems = arr.indexOf(bakery);
// if(bakeryItems != -1){
//     alert(bakery + " is availabe at index " + bakeryItems + "in our bakery");
// }
// else{
//     alert( "We are sorry " + bakery + " is not availabe in our bakery");
// }

// Task#15
// var password = prompt("Enter your password \n The password must qualify these requirements: \n 1. Password must at least 6 character long\n 2. Password should not start with a number \n 3. Password should contain alphabets and numbers");
// var length = "Password must at least 6 character long";
// var number = "Password should not start with a number";
// var alphanumeric = "Password should contain alphabets and numbers";
// var letterNumber = /^[0-9a-zA-Z]+$/;
// var invalid = "Enter a valid password"

// if(password.length > 6 && ((password.slice(0, 1) >= 0) && (password.slice(0, 1) <= 9)) && !(password.match(letterNumber))){
//     alert(invalid + "\n" + length + "\n" + number + "\n" +alphanumeric);
// }
// else if(password.length > 6){
//     alert(invalid + "\n" + length);
// }
// else if((password.slice(0, 1) >= 0) && (password.slice(0, 1) <= 9)){
//     alert(invalid + "\n" + number);
// }else if(!(password.match(letterNumber))){
//     alert(invalid + "\n" + alphanumeric);
// }
// else{
//     alert("Your password is saved succesfully");
// }


// Task#16
// var university = "University of Karachi";
// var ress = university.split("");
// for( i =0; i<ress.length; i++){
// document.write(ress[i]  + "<br>");
// }

// Task#17
// var str = "Pakistan";
// var lastChar = str[str.length -1];
// document.write("User Input:" + str +"<br> Last chracter of input: " + lastChar);

// Task#18
// var text = "The quick brown fox jumps over the lazy dog";
// var count = text.toLowerCase().match(/the/g);
// document.write("There are " + count.length + "(s) of the word 'the' ");

// Chapter 26-30 MATH METHODS

// Task#01
// var num = parseFloat(prompt("Enter any number"));
// document.write( "Number: " + num.toString());
// var round= Math.round(num);
// document.write("<br> Round off value: " +round);
// var Floor = Math.floor(num);
// document.write("<br> Floor value: " +Floor);
// var ceil = Math.ceil(num);
// document.write("<br> Ceil value: " + ceil);

// Task#02
// var num = parseFloat(prompt("Enter any number"));
// document.write( "Number: " + num);
// var round= Math.round(num);
// document.write("<br> Round off value: " +round);
// var Floor = Math.floor(num);
// document.write("<br> Floor value: " +Floor);
// var ceil = Math.ceil(num);
// document.write("<br> Ceil value: " + ceil);

// Task#03
// var num = -4;
// var absolute = Math.abs(num);
// document.write("The absolute value of -4 is " + absolute);

// Task#04
// var randomDice = Math.floor(6*Math.random())+1; 
// document.write("<br> Random dice value is: " + randomDice);

// Task#05
// var toss = Math.floor(2*Math.random()) + 1;
// if( toss == 1){
//     document.write( "<br>" + toss + " <br>" + "Randon coin value : Tails");
// }else {
//     document.write( "<br>" + toss + " <br>" + "Randon coin value : Heads");
// }

// Task#06
// var floor = Math.floor(Math.random() * 100) + 1;
// document.write("Random number between 1 and 100 :" + floor);

// Task#07
// var userweight = parseFloat(prompt("Enter your weight"));
// var floor = Math.floor(userweight);
// document.write("The weight of user is " + floor + " Kilograms");

// Task#08
// var random = Math.floor(10*Math.random()) + 1;
// var number = +prompt("Enter a number between  1 and 10");
// if(number == random){
//     alert("Congratulate");
// }
// else{
//     alert("Try again!!");
// }


// CHAPTER -31-34  DATE METHODS

// Task#01
// var Date= new Date();
// document.write(Date);

// Task#02
// var d = new Date;
// var Months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// document.write("Current months : " + Months[d.getMonth()]);

// Task#03
// var d = new Date;
// var Day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// document.write("Today is " + Day[d.getDay()]);

// Task#04
// var dayName = ["sunday" , "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
// var date = new Date().getDay();
// if(dayName[date] === "sunday" || dayName[date] === "saturday")
// {
//     alert("today is funday");
// }
// else{
//     alert("today is not fun day");
// }

// Task #05
// var d = new Date;
// if(d.getDate() < 16){
//     alert("First fifteen days of the month");
// }
// else{
//     alert("Last days of the month");
// }

// Task#06
// var d = new Date;
// document.write("Current Date : " + d);
// document.write("<br> Elapsed milliseconds Sinnce January 1,1970 : "+  d.getTime());
// document.write("<br> Elapsed minutes Sinnce January 1,1970 : "+ (d.getTime())/(1000*60));

// Task#07
// var d = new Date().getHours();
// if(d < 12){
//     alert("IT'S AM");
// }
// else{
//     alert("IT'S PM");
// }

// Task#08
// var d = new Date(2020 , 11, 31, 0, 0, 0, 0 );
// document.write("Later Date :" + d );

// Task#09
// var d = new Date().getTime();
// var d1 = new Date(2019, 5, 21).getTime();
// var diff = d - d1;
// document.write(diff/(1000*60*60*24) + " days have passed since 21 june 2019");

// Task#10
// var d = new Date;
// var d1 = new Date(2020 , 0 ,0);
// document.write("On reference date: " + d);
// document.write("<br> " + d1.getTime()/1000  +  " seconds had passed since begining of 2020" );

// Task#11
// var d = new Date;
// document.write("Current Date: " + d);
// d.setHours(d.getHours() -1);
// document.write(" <br> 1 hour ago , it was " + d);

// Task#12
// var d = new Date;
// document.write("Current Date: " + d);
// d.setFullYear(d.getFullYear() - 100);
// document.write(" <br> 100 year back :" + d);

// Task#13
// var age =prompt("Enter your age");
// document.write("Your age is: " + age);
// var currentYear = 2020;
// total = currentYear-age;
// document.write("<br> Your birth year is: " + total);

// Task#14
// document.write("<h1>K-Electric bill  </h1>");
// var name =  prompt("Enter your name");
// document.write("Customer Name: " + name);
// var d = new Date();
// var Months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// document.write("<br> Month: " +  Months[d.getMonth()]);
// var unit = +prompt("Enter your unit");
// document.write("<br> Number of units: " + Math.round(unit*100)/100);
// var chargesPerUnit = +prompt("Charges per unit: ");
// document.write("<br> Charges per unit: " +  Math.round(chargesPerUnit*100)/100);
// var netAmountPayable = unit*chargesPerUnit;
// document.write("<br> Net Amount Payable (within Due Date) : " +  Math.round(netAmountPayable*100)/100);
// var latePaymentSurcharge = +prompt("Late payment Surcharge");
// document.write("<br> Late Payment Surcharge: " + Math.round(latePaymentSurcharge*100)/100);
// var grossAmountPayable = netAmountPayable+latePaymentSurcharge;
// document.write("<br> Gross Amount Payable (after Due Date) : " + Math.round(grossAmountPayable*100)/100);


// Chapter 35-38  FUNCTION

// Task#01
// function date(){
//     return new Date();
// }
// document.write (date());

// Task#02
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// greetUser(firstName, lastName);

// function greetUser(first, second){
// document.write("Good Morning " + first + " " + second);
// }

// Task#03
// var a= +prompt("Enter 1st number");
// var b= +prompt("Enter 2st number");
// function sum(a,b){
//     return a+b;
// }
// alert(sum(a, b));

// Task#04
// var num1 = +prompt("Enter first number");
// var operator = prompt("Enter operator");
// var num2 = +prompt("Enter second number");
// var result;

// switch (operator) {
//     case "+":
//         result = num1 + num2;
//         alert("Result of " + num1 + " " + operator + " " + num2 + " = " + result);
//         break;
//     case "-":
//         result = num1 - num2;
//         alert("Result of " + num1 + " " + operator + " " + num2 + " = " + result);
//         break;
//     case "/":
//         result = num1 / num2;
//         alert("Result of " + num1 + " " + operator + " " + num2 + " = " + result);
//         break;
//     case "*":
//         result = num1 * num2;
//         alert("Result of " + num1 + " " + operator + " " + num2 + " = " + result);
//         break;
//     default:
//         alert("Invalid Statement!!!")
//         break;
// }

// Task#05
// var n = +prompt("Enter number");
// alert("Square of " + n + " is " + square(n));
// function square(n){
//     return n*n;
// }

// Task#06

// Task#12
// var str = "Web Tutorial Development";
// document.write(longestword(str));
// function longestword(str) {
//     var word = str.split(" ");
//     var longest ="";
//     for (i = 0; i < word.length-1; i++) {
//         if (word[i].length > word[i+1].length) {
//             longest = word[i];
//         }
//     }
//     var lastword = word.pop;
//     if (longest < lastword.length) {
//         longest = lastword;
//     }
//     return longest;
// }








