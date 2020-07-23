// chapter 38_42 FUNCTIONS, SWITCH STATEMENTS, WHILE… DOWHILE LOOPS  

// Task#1
// findpower();
// function findpower(){
//     var a = prompt("To find power enter value");
//     var b = prompt("How much you want power of " + a);
//     document.write(Math.pow(a,b))
// }

// Task#2
// isLeapYear();
// function isLeapYear() {
//     var year = prompt("Enter any year");
//     if ((year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)) {
//         document.write(year + " Is a leap year");
//     }
//     else {
//         document.write(year + " Is Not a leap Year");
//     }
// }

// Task#3
// var side1 = +prompt("Enter side 1"); 
// var side2 =+prompt("Enter side 2"); 
// var side3 = +prompt("Enter side 3"); 
// var s = (side1 + side2 + side3)/2;
// var area =  s*((s-side1)*(s-side2)*(s-side3));
// document.write("The area of a triangle with side length " + side1 +  ", "   + side2 + " and " + side3 + " is " + area);

// Task#4
// mainFunction();
// function mainFunction() {
//     var sub1 = +prompt("Entr your Subject1", "");
//     var sub2 = +prompt("Entr your Subject2", "");
//     var sub3 = +prompt("Entr your Subject3", "");
//     var totalmarks = +prompt("Enter your total marks");
//     var totalObtainMrks = eval(sub1) + eval(sub2) + eval(sub3);
//     var per = Percentage(totalObtainMrks, totalmarks);
//     var avg = Average(totalObtainMrks);
//     document.write("Subject1 Marks " + sub1 + "<br>");
//     document.write("Subject2 Marks " + sub2 + "<br>");
//     document.write("Subject3 Marks " + sub3 + "<br>");
//     document.write("Total Marks " + totalmarks + "<br>");
//     document.write("Obtained Marks " + totalObtainMrks + "<br>");
//     document.write("Percentage " + per + "%" + "<br>");
//     document.write("Average " + avg);
// }
// function Percentage(obtain, total) {
//     return obtain * 100 / total;
// }
// function Average(obtain) {
//     return obtain / 3;
// }

// Task#5
// myFunction();
// function myFunction() {
//     var word = prompt("Enter any word:");
//     var letter = prompt("In word '" + word + "', what letter index you want to find:");
//     var str = word.split("");
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             document.write("Index of " + letter + " is " + i);
//         }
//     }
// }

// Task#6
// mainFunction();
// function mainFunction(){
//     var string = prompt("Enter any sentence (25 letters):");
//     if(string.length <= 25){
//         var stringsWithOutVowels = removeVowels(string);
//         document.write(  string + "<br>" +  "<strong>Sentence without vowels</strong> <br>  "+ stringsWithOutVowels);
//     }
//     else{
//        alert("Your Sentence is greater than 25 letters!!!");
//     }
// }
// function removeVowels(str){
//     return str.replace(/[aeiou]/g, '');
// }

// Task#7
// findOccurrences();
// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var array = [];
//     var s = str.split("");
//     for (let i = 0; i < s.length; i++) {
//         switch (s[i]) {
//             case 'a': case 'A': case 'e': case 'E': case 'i': case 'I': case 'o': case 'O': case 'u': case 'U':
//                 var f = s[i];
//                 i++;
//                 if (s[i] === 'a' || s[i] === 'A' || s[i] === 'e' || s[i] === 'E' || s[i] === 'i' || s[i] === 'I' || s[i] === 'o' || s[i] === 'O' || s[i] === 'u' || s[i] === 'U') {
//                     var occurs = f + s[i];
//                     array += " " + occurs;
//                 }
//                 break;
//         }
//     }
//     document.write(array);
// }

// Task#8
// distance();
// function distance() {
//     var distance = prompt("Enter distance between two cities (in km.)");
//     document.write("Distance in Feet " + kmToFeet(distance));
//     document.write("<br>Distance in Centi Meter " + kmToCm(distance));
//     document.write("<br>Distance in Inches " + kmToInches(distance));
//     document.write("<br>Distance in Meter " + kmToMeter(distance));
// }
// function kmToFeet(valNum) {
//     return valNum * 3280.8;
// }
// function kmToCm(valNum) {
//     return valNum * 100000;
// }
// function kmToInches(valNum) {
//     return valNum * 39370;
// }
// function kmToMeter(valNum) {
//     return valNum * 1000;
// }

// Task#9
// findsalary();
// function findsalary() {
//     var employeeHours = prompt("Enter employee hours:");
//     var regtime, overtime, salary;
//     if (employeeHours <= 40) {
//         regtime = 12 * employeeHours;
//         overtime = 0.00;
//         salary = regtime;
//     } else if (employeeHours > 40) {
//         regtime = (12 * 40);
//         overtime = (12 * (employeeHours - 40));
//         salary = (regtime + overtime);
//     }
//     document.write("Employee Gross Pay: " + salary);
// }

// Task#10
// currencyDomination()
// function currencyDomination() {
//     var withdraw = +prompt("Enter amount to withdraw ");
//     var hundred, fifty, ten;
//     hundred = withdraw / 100;
//     fifty = (withdraw % 100) / 50;
//     ten = (((withdraw % 100) % 50) / 10);
//     document.write("you will have " + Math.floor(hundred) + " hundred notes " + Math.floor(fifty) + " fifty notes " + Math.floor(ten) + " ten notes ");
// }

// Chapter 43_48 EVENTS

// Task#3
// function deleteRow(r) {
//     var i = r.parentNode.parentNode.rowIndex;
//     document.getElementById("myTable").deleteRow(i);
// }

//  Task#4
// function changeImage(id , src){
//     var img = document.getElementById(id);
//     img.src = src;
// }

// Task#5
// function incrementValue(){
//     var i = document.getElementById("count").innerText;
//     document.getElementById("count").innerHTML = ++i ;
// }
// function decrementValue(){
//     var i = document.getElementById("count").innerText;
//     document.getElementById("count").innerHTML = --i ;
// }

// Chapter 49_52 Events

// Task#1
// function displayOutput() {
//     var email = document.getElementById("email").value;
//     var paswrd = document.getElementById("password").value;
//         document.write("Your Email name is: " + email + "<br>Your Password is: " + paswrd);
// }

// Task#2
// function expandItem() {
//      var listItem ="In the United Kingdom, terms in common usage include supermarket for large format grocery stores, and corner shop, convenience shop, or grocery (meaning a grocery shop) for smaller formates <ul><li>Bakery and Bread</li><li> Meat and Seafood</li><li>Pasta and Rice</il><li>Oils, Sauces, Salad Dressings, and Condiments</li><li> Cereals and Breakfast Foods</li></ul>";
//      document.getElementById("groceryItem").innerHTML = listItem;
//      }

// Task#3
// var sr = 0;
// var index;
// function submitdata() {
//     var name = document.getElementById("name").value;
//     var fname = document.getElementById("f_name").value
//     var number = document.getElementById("number").value;
//     var cls = document.getElementById("cls").value;
//     addRow(name, fname, number, cls);
//     return false;
// }
// function addRow(name, fname, number, cls) {
//     document.getElementById("myTable").innerHTML += "<tr><td>" + (sr++) + "</td><td>" + name + "</td> <td>" + fname + "</td> <td>" + number + "</td> <td>" + cls + "</td><td><button  onclick='deleteRow(this)'>Delete</button></td><td><a style='text-decoration:none' href='#myModal' data-toggle='modal'><button   onclick='updateRow(this)'>Edit</button></a></td></tr>";
// }
// function deleteRow(r) {
//     var i = r.parentNode.parentNode.rowIndex;
//     document.getElementById("myTable").deleteRow(i);
// }
// function updateRow(e) {
//     var i = e.parentNode.parentNode.rowIndex;
//     index = i;
//     document.getElementById("ename").value = document.getElementById("myTable").rows[i].cells[1].innerHTML;
//     document.getElementById("efname").value = document.getElementById("myTable").rows[i].cells[2].innerHTML;
//     document.getElementById("econtact").value = document.getElementById("myTable").rows[i].cells[3].innerHTML;
//     document.getElementById("ecls").value = document.getElementById("myTable").rows[i].cells[4].innerHTML;
// }
// function update() {
//     var name = document.getElementById("ename").value;
//     var efname = document.getElementById("efname").value;
//     var econtact = document.getElementById("econtact").value;
//     var ecls = document.getElementById("ecls").value;
//     document.getElementById("myTable").rows[index].cells[1].innerHTML = name;
//     document.getElementById("myTable").rows[index].cells[2].innerHTML = efname;
//     document.getElementById("myTable").rows[index].cells[3].innerHTML = econtact;
//     document.getElementById("myTable").rows[index].cells[4].innerHTML = ecls;

//     return false;
// }


// Chapter 53_58 EVENTS

// Task#1
// function showImage(f){
//    var modalImage =  document.getElementById("modalImage");
//    modalImage.src = f.src;
// }

// Task#2
// var zoom = 1;
//     var zoomStep = 0.2;
//     document.getElementById("zoomIn").addEventListener("click", function() {
//       zoom += zoomStep;
//       document.getElementById("zoomtext").style.transform = "scale(" + zoom + ")";
//     });
//     document.getElementById("zoomOut").addEventListener("click", function() {
//       if (zoom > zoomStep) {
//         zoom -= zoomStep;
//         document.getElementById("zoomtext").style.transform = "scale(" + zoom + ")";
//       }
//     });

// Chapter 58_67  DOM

// Task#1
// i)
// var a = document.getElementById("main-content");
// var b = a;
// console.log(b);

// ii)
// var a = document.getElementById("main-content"); 
// console.log(a.childNodes[0]);
// console.log(a.childNodes[1]);
// console.log(a.childNodes[2]);
// console.log(a.childNodes[3]);
// console.log(a.childNodes[4]);

// iii)
// var b = document.getElementsByClassName("render");
// console.log(b[0].innerHTML);
// console.log(b[1].innerHTML);
// console.log(b[2].innerHTML);
// console.log(b[3].innerHTML);
// console.log(b[4].innerHTML);

// iv)
// var f = document.getElementById("form-content");
// f.childNodes[1].value = "Alex";
// v)
// f.childNodes[3].value = "Jhone";
// f.childNodes[5].value = "example@gmail.com";

// Task#2

// i)
// var a = document.getElementById("form-content");
//  console.log(a.nodeType);

// ii)
// var b = document.getElementById("lastName");
// console.log(b.nodeType) 
// console.log (b.childNodes[0]);

// iii)
// b.innerHTML = "Last Name: Doe"

// iv)
// var c = document.getElementById("main-content");
//  console.log(c.firstChild)  
//  console.log (c.lastChild);


// v)
// var d = document.getElementById("lastName");
// console.log (d.nextSibling)
//  console.log(d.previousSibling);


// vi)
// var e = document.getElementById("email");
// var newParagraph = document.createElement("p");
//  console.log( e.parentNode)
//  console.log(e.nodeType);




