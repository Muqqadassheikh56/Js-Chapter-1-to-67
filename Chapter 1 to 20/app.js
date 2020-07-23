// Chapter 1 - Alert

// Task#01
// alert("Hi, Welcome To our site!!!"); 

// Task#02
// alert("Error! Please enter vaild password.");

// Task#03
// alert("Welcome to JS Land...\nHappy Coding");

// Task#04
// alert("Welcome to JS Land...")
// alert("Happy Coding!")

// Task#05
// alert("Hello.. I can run JS through web browser console")

// Task#06
// Task#07

// Chapter 2 - Variables

// Task#01
// var username;

// Task#02
// var myName = "Jhone Doe";

// Task#03
// var message = "Hello World"
// alert(message);

// Task#04
// var studentName = "Jhone";
// var studentAge = "15 years old";
// alert(studentName);
// alert(studentAge);

// Task#05
// var x = "PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(x);

// Task#06
// var Email = "example@example.com";
// alert("My email address is "+ Email);

// Task#07
//  var book = "Asmarter way to learn JavaScript";
//  alert("I'm trying to learn from the book " +  book);

// Task#08
// document.write("Yah! I can write HTML content through javascript");

// Task#09
// var x = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
// alert(x);

// Chapter 3 - Variables for Numbers

// Task#01
// var age = 22;
// alert("I'm " + age + " years old")

// Task#02
// var n = 20;
// alert("You have visited this site " + n +  " times");

// Task#03
// var birthYear = 1998;
// document.write("My birth year is " +  birthYear +  "<br> Data type of my decleard variable is number");

// Task#04
// var VisitorName = "Jhone Doe";
// var ProductTitle = " T_Shirt";
// var quantity = 5;
// document.write("<b>"+VisitorName + "</b> ordered <b>" + quantity + ProductTitle + "</b>(s) on XYZ Clothing store");

// Chapter 4 - VARIABLE NAMES: LEGAL & ILLEGAL 

// Task#01
// var x,y,z;

// Task#02 
// legal variable
// var a;
// var _a;
// var a_b;
// var A1;
// var A11_B;

// illegal variables
// var 1A;
// var -a;
// var @a;
// var +b;
// var a b;

// Task#03
// document.write("<h3>Rules for naming JS variables</h3>");
// document.write("Variable names can only contain numbers, $, and _. For example : $my_1stVariable  <br>\
// Variables must begin with a letter, $ or _ . For example : $name, _name or name <br>\
// Variable names are case sensitive <br>\
// Variable names should not be JS keywords");


//  Chapter - 5 MATH EXPRESSIONS 

// Task#01 
// var x =  + prompt("Enter  1st number:");
// var y = + prompt("Enter 2nd number:");
// total = x+y;
// document.write("Sum of " + x + " and " + y + " is " + total );

// Task#02 Subtraction
// var x =  + prompt("Enter  1st number:");
// var y = + prompt("Enter 2nd number:");
// total = x-y;
// document.write("Subtraction of " + x + " and " + y + " is " + total );

// #Multiplication
// var x =  + prompt("Enter  1st number:");
// var y = + prompt("Enter 2nd number:");
// total = x*y;
// document.write("Multiplication of " + x + " and " + y + " is " + total );

// #Division
// var x =  + prompt("Enter  1st number:");
// var y = + prompt("Enter 2nd number:");
// total = x/y;
// document.write("Division of " + x + " and " + y + " is " + total );

// #Modulus
//var x =  + prompt("Enter  1st number:");
// var y = + prompt("Enter 2nd number:");
// total = x%y;
// document.write("Modulus " + x + " and " + y + " is " + total );

// Task#03
// var n;
// document.write("Value after variable declaration is: " + n );
// n = 7;
// document.write("<br> Initial value is: " + n);
// n++;
// document.write("<br> Value after increment is: " + n);
// n= n+7;
// document.write("<br> Value after adition is: " + n);
// n--;
// document.write("<br> Value after decrement is: "  + n);
// n= n%3;
// document.write("<br> The remainder is: " + n);

// Task#04
// var moviePrice = 600;
// document.write("Total cost to buy 5 tickest to a movie is " + moviePrice*5 + "PKR");

// Task#05
// var table = +prompt("Enter table number:");
// document.write("Table of " + table + "<br>")
// for(var a = 1; a<=10; a++ ){
//     document.write( table + "x" + a + "=" + table*a + "<br>"  )
// }

// Task#06
// var cTemp = 25;
// var cTempcnvert = (cTemp*9/5) +32;
// document.write(cTemp  + "&#8451; is " + cTempcnvert + "&#8457;");
// var fTemp = 70;
// var fTempcnvrt = (fTemp-32) *5/9;
// document.write( "<br>" + fTemp + "&#8457; is " +  fTempcnvrt  + "&#8451;");

// Task#07
// var item1 = 650;
// var item2 =100;
// var item1Quantity = 3;
// var item2Quantity = 7;
// var shippingCharges = 100;
// document.write("<h2> Shopping Cart </h2>");
// document.write("<br> Price of item 1 is " + item1);
// document.write("<br> Quantity of item 1 is " + item1Quantity);
// document.write("<br> Price of item 2 is " + item2);
// document.write("<br> Quantity of item 2 is " + item2Quantity);
// document.write("<br> Shipping charges is " + shippingCharges);
// document.write("<br><br> Total cost of your order is " + ((item1*item1Quantity) + (item2*item2Quantity) + shippingCharges));

// Task#08
// document.write("<h1> Marks Sheet </h1>")
// var totalMarks = + prompt("Enter total marks");
// var obtainMarks = + prompt("Enter obtained marks");
// var percentage = obtainMarks*100/totalMarks;
// document.write( "Total Marks : " + totalMarks + "<br>"  + "Marks Obatined: " + obtainMarks + "<br>"  + "Percentage: "  + percentage + "%");

// Task#09
// var UstoPak = 104.80;
// var SauditoPak = 28;
// document.write("<h1> Currency in PKR </h1>");
// document.write("Total Currency in PKR " + ((10*UstoPak) + (25*SauditoPak)));

// Task#10
// var n = 10;
// document.write("After some arithmetic Calculations " + (n+5)*10/2);

// Task#11
// document.write("<h1>Age Calculator </h1>")
// var x = 2020;
// var y = +prompt("Enter your birth year");
// total = x-y;
// document.write("Current Year : " + x + "<br>" + "Birth Year: " + y + "<br>" + "Your Age is : " + total);

// Task#12
// var radius = 20;
// document.write("<h1> The Geometrizer </h1>")
// document.write("<br> Radius of circle is: " + radius );
// document.write("<br> The circumference is: " + (2*3.142*radius));
// document.write("<br> The area is: " + (3.142* radius*radius));

// Task#13
// document.write("<h1> The LifeTime Supply Calculator </h1>")
// var x = " Choclate Chip"
// var y = 15;
// var z = 65;
// var m = 3;
// total = (z-y)*m;
// document.write("Favourite Snack: " + x + "<br>" + "Current Age: " + y + "<br>" + "Estimatd Maximum Age: " + z + "<br>" +  "Amount os snacks per day: " + m + "<br>");
// document.write("You will need "  + total +  x + " to last you until the ripe old age of  " +  z);


//  Chapter - 6 MATH EXPRESSIONS 

// Task#01
// var a = 10;
// document.write("<h4> Result </h4>" + "<br> The value of a is: " + a);
// document.write("<br> ................................");

// document.write("<br> The value of ++a is: " +  ++a);
// document.write("<br> Now the value of a is: " + a);

// document.write("<br><br> The value of a++ is: " + a++);
// document.write("<br> Now the value of a is: " + a);

// document.write("<br><br> The value of --a is: " + --a);
// document.write("<br> Now the value of a is: " + a);


// document.write("<br><br> The value of a-- is: " + a--);
// document.write("<br> Now the value of a is: " + a);


// Task #02
// var a = 2, 
// b = 1;
// var result1 = --a ;
// var result2 = --a - --b;
// var result3 = --a - --b + ++b + b--;
// document.write("a is " + result1 + "<br>" + "b is " + result2 + "<br>"+ "result is :" +  result3);

// Task#03
// var name = prompt("Enter your name");
// document.write("Welcome to our page " + name.toUpperCase());

// Task#04
// var table= +prompt("Enter table number");

// if(table ==0  ){
//     table =5;
// }
// for(var n =1; n<=10; n++){
// document.write(table + "x" + n +  "=" +table*n + "<br>" );
// }

// Task#5
// var subject1Name = prompt("Enter 1st subjects name");
// var subject2Name = prompt("Enter 2nd subject name ");
// var subject3Name = prompt("Enter 3rd subject name");
// var totalMarks = 100;
// var totalSubmarks = 100*3;
// var obtainMarks1 = +prompt("Enter obtained marks for 1st subject");
// var obtainMarks2 = +prompt("Enter obtained marks for 2nd subject");
// var obtainMarks3 = +prompt("Enter obtained marks for 3rd subject");
// var totalobtainmarks =  obtainMarks1+obtainMarks2+obtainMarks3;
// var percentage1 =  obtainMarks1*100/totalMarks;
// var percentage2 =  obtainMarks2*100/totalMarks;
// var percentage3 =  obtainMarks3*100/totalMarks;
// var totalPercentage = (percentage1+percentage2+percentage3)/3;
// document.write("<h3>Subject &nbsp;  &nbsp;"   + "Total Marks &nbsp;  &nbsp; "  + "Obtained Marks  &nbsp;  &nbsp;"  + "Percentage </h3>" );
// document.write(subject1Name +"&nbsp;&nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp;&nbsp;  &nbsp;" +  totalMarks+ "&nbsp;  &nbsp; &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp;&nbsp;  &nbsp; &nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;" + obtainMarks1 +"&nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;  &nbsp;&nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp;" + percentage1 + "%");
// document.write( "<br>" + subject2Name +"&nbsp;&nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp;&nbsp;  &nbsp;" +  totalMarks+ "&nbsp;  &nbsp; &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp;&nbsp;  &nbsp; &nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;" + obtainMarks2 +"&nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;  &nbsp;&nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp;" + percentage2 + "%");
// document.write( "<br>" + subject3Name +"&nbsp;&nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp;&nbsp;  &nbsp;" +  totalMarks+ "&nbsp;  &nbsp; &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp;&nbsp;  &nbsp; &nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;" + obtainMarks3 +"&nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;  &nbsp;&nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp;" + percentage3 + "%");
// document.write( "<br><br> &nbsp;&nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp;&nbsp;  &nbsp;" +  totalSubmarks+ "&nbsp;  &nbsp; &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp;&nbsp;  &nbsp; &nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;" + totalobtainmarks +"&nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;  &nbsp;&nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp;" + totalPercentage + "%" );


// Chapter - 9_11 USER INPUT & CONDITIONAL STATEMENT

// Task#01
// var cities = prompt("enter ur city");
//   if(cities == "karachi"){
//      alert("Welcome to the city of lights");
//   }
//   else if(cities=="islamabad"){
//       alert("Welcome to the capital of pakistan");
//   }

//   else{
//      alert("hello pakistan");
//   }

// Task#02
// var gender = prompt("Enter your gender");
// if( gender == "male"){
//    alert("Good Morning sir");
// }
// else if(gender== "female"){
//     alert("Good Morning maa'm");
// }
// else{
//    alert("Wrong input");
// }

// Task#03
// var signal = prompt("Enter road traffic signal light ");
// if(signal== "red"){
//     alert("Must stop");
// }
// else if(signal== "yellow"){
//     alert("Ready to move");
// }
// else if(signal== "green"){
//     alert("Move now");
// }
// else{
//     alert("Invalid input!!!");
// }

// Task#04
// var remainfuel = prompt("Enter remaining fuel in the car");
// if(remainfuel==0.25){
//     alert("Please refill the fuel in your car");
// }
// else{
//     alert("No need to refill ");
// }

// Task#05
//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
//  if("car" < "cat"){
//     alert("car is smaller than cat");
//  }

// Task#06
// var sub1totalmarks = +prompt("Enter your  subject one marks")
// var sub2totalmarks = +prompt("Enter your  subject two marks")
// var sub3totalmarks = +prompt("Enter your  subject three marks")

// var sub1obtain1Marks = +prompt("Enter obtaind marks of subject one");
// var sub2obtainMarks = +prompt("Enter obtaind marks of subject two");
// var sub3obtainMarks = +prompt("Enter obtaind marks of subject three");


// var subtotalmarks = (sub1totalmarks+sub2totalmarks+sub3totalmarks);
// var subobtainMarks = (sub1obtain1Marks+sub2obtainMarks+sub3obtainMarks);
// var percentage = subobtainMarks*100/subtotalmarks;
// var grade, remarks;

// if(percentage >=80) {
//     grade = "A-one";
//     remarks = "Excellent";
// }
// else if(percentage>=70){
//     grade = "A";
//     remarks = "Good";
// }
// else if(percentage >=60){
//     grade = "B";
//     remarks = "You need to improve";
// }
// else{
//     grade = "Fail";
//     remarks = "Sorry";
// }
// document.write("<h1> Marks Sheet</h1>");
// document.write("<br> Total Marks: " + subtotalmarks);
// document.write("<br> Marks obtained: " + subobtainMarks);
// document.write("<br> Percentage: " + percentage + "%");
// document.write("<br> Grade: " + grade);
// document.write("<br> Remarks: " + remarks);

// Task#08
// var num = prompt("Enter the number");
// if( num %3==0){
//    alert("Number is divisible by 3");
// }
// else{
//    alert("Number is not divisible by 3");
// }

// Task#09
// var num = prompt("Enter the number");
// if(num %2 == 0){
//    alert("Number is even");
// }
// else{
//    alert("Number is odd");
// }

// Task#10
// var temperature = prompt("Enter the temperature");
// if(temperature > 40){
//    alert("“It is too hot outside");
// }
//  else if(temperature > 30){
//   alert("The Weather today is Normal");
//  }
//  else if(temperature > 20){
//     alert("Today’s Weather is cool");
//  }
//  else{
//     alert("OMG! Today’s weather is so Cool.");
//  }

// Chapter - 14_16 ARRAYS

// Task#01

// Task#02

// Task#03
// var arr = ["Orange", "Mango", "Apple"];
// for(var i =0; i<arr.length; i++){
//     document.write(arr + "<br>");
// }

// Task#04
// var arr = [12, 15, 17];
// for(var i =0; i<arr.length; i++){
//     document.write(arr + "<br>");
// }

// Task#05
// var arr = [];
// document.write ( arr + 10>9);

// Task#06
// var arr = ["Orange", "Mango", "Apple", 5,10,17,25];
// for(var i =0; i<arr.length; i++){
//     document.write(arr + "<br>");
// }

// Task#07
// var arr = [" SSC", "HSC", "BCS","BS", "BCOM", "MS"," M. Phil."," PhD"];
// document.write(" <h2> Qualifications: </h2>" + "<br>" );
//     document.write( " 1) " + arr[0]  + "<br>"  );
//     document.write( " 2) " + arr[1]  + "<br>"  );
//     document.write( " 3) " + arr[2]  + "<br>"  );
//     document.write( " 4) " + arr[3]  + "<br>"  );
//     document.write( " 5) " + arr[4]  + "<br>"  );
//     document.write( " 6) " + arr[5]  + "<br>"  );
//     document.write( " 7) " + arr[6]  + "<br>"  );
//     document.write( " 8) " + arr[7]  + "<br>"  );

// Task#08
// var studentName = ["Michael", "John", "Tony"];
// var studentsScore = [320, 230, 480];
// var totalMarks = 500;
// var percentage1 = 320 *100 /totalMarks;
// var percentage2 = 230 * 100 / totalMarks;
// var percentage3 = 480 * 100 / totalMarks;
// document.write(" Score of Michael is " + studentsScore[0] + " Percentage: " + percentage1 + " % " + "<br>");
// document.write(" Score of John is  " + studentsScore[1] + " Percentage: " + percentage2 + " % " + "<br>");
// document.write(" Score of Tony is " + studentsScore[2] + " Percentage: " + percentage3 + " % " + "<br>");

// Task#09

 // Task#011
//  var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
//  document.write(" <h2>Cities list:  </h2>"  + cities )
//  var copycities = cities.slice(2,5)
//  document.write(" <h2>Selectd cities list: </h2>" + copycities );

// Task#10 
// var  studentsScore = [320,230,480,120];
// document.write(" Scores of Student : " + studentsScore + "<br>");
// studentsScore.sort();
// document.write(" Order scores of Students: " + studentsScore);

// Task#12
// var arr = [" <h1>This ", " is ", " my ", " cat </h1>"];
// document.write("<h1> Array :" + arr  +  "</h1>"); 
// var str = arr.join("");
// document.write( "<h1> String : " + (str) + "</h1>" );

// Task#13
// var arr = ["Keyboard" , "Mouse", "Printer" , "monitor"];
// document.write(" <h2> Devices: <br>" + arr + " <br> </h2>");
// var arraylength = arr.length;

// for(var ii= 0; ii <arraylength; ii++){
//    document.write( "Out: <br>" + arr.shift() + "<br>" );
// }

// Task#14

// var arr = ["Keyboard" , "Mouse", "Printer" , "monitor"];
// document.write(" <h2> Devices: <br>" + arr + " <br> </h2>");

// for(var ii = arr.length-1; ii >= 0; ii--){
//    document.write( "Out: <br>" + arr.pop() + "<br>" );

// }

// Task#15
// var arr = ["Apple", "Samsung", "Motorola"," Nokia", "Sony",  "Haier"];
// document.write("<label>Choose a Mobile:</label> <select >")

// for(var i=0; i<arr.length; i++){
//    document.write("<option>" + arr[i] +"</option>");
// }
// document.write("</select>")

// Chapter - 17_20 ARRAYS AND LOOP 

// Task#03
// for( var a =1; a<=10; a++ ){
// document.write(a + "<br>")
// }

// Task#04
// var num = prompt("Enter a number to show it's multiplication table");
// var num = prompt("Enter length multiplication table");
// document.write("<h2> Multiplication table of 2 length 15 </h2>");
// for(var a= 1; a<=15; a++){
//    document.write("2" + "x" +  a + "=" + 2*a + "<br>");
// }

// Task#05
// fruits = [" <b> apple ", "banana", "mango", "orange", "strawberry </b>" + "<br>" ];
// for (var i = 0; i < fruits.length; i++) {
//    document.write(fruits[i]  + "<br>");
// }
// document.write(" <b> Element at 0 index is </b>  " + fruits[0] + "<br>" );
// document.write("Element at 1 index is  " + fruits[1]  + "<br>");
// document.write("Element at 2 index is  " + fruits[2]  + "<br>");
// document.write("Element at 3 index is  " + fruits[3]  + "<br>");
// document.write("Element at 4 index is  " + fruits[4]  + "<br>"); 

// Task#06
// a. Counting
// document.write("<h3> Counting : </h3>");
// for(var a = 1; a<=15; a++){
//    document.write(a + " ,")
// }

// b. Reverse counting
// document.write("<h3> Reverse counting : </h3>");
// for(var a = 10; a>=1; a-- ){
//    document.write(a + " , ")
// }
//  c. Even
// document.write("<h3> Even : </h3>");
// for(var a=0; a<=20; a= a+2){
// document.write(a + " , ")
// }
// d. Odd
// document.write("<h3> Odd : </h3>");
// for(var a=1; a<=20; a= a+2){
// document.write(a + " , ")
// }
// e. Series
// document.write("<h3> Series : </h3>");
// for(var a=2; a<=20; a= a+2){
// document.write(a + "k"+ " , ")
// }

// Task#07


// Task#08
// var A = [24, 53, 78, 91, 12];
// document.write(" <h2>Array Items: " + A  + "," + "<br> </h2>")
// document.write(" <h2>The largest number is " + (Math.max(...A)) + "<h2>");

// Task#09
// var A = [24, 53, 78, 91, 12];
// document.write(" <h2>Array Items: " + A  + "," + "<br> </h2>")
// document.write(" <h2>The smallest number is " + (Math.min(...A)) + "<h2>");

// Task#10
// for(var a= 1; a<=20; a++){
//    document.write(5*a + ", ")
// }

































