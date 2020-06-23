//Chp 21-25
//Task 1

var input1=prompt("Enter 1st Input: ");
var input2=prompt("Enter 2nt Input: ");
var result=input1+input2;

document.write(result);

//Task 2

var phone=prompt("Enter Your Favourite Phone: ");
var length=phone.length;

document.write("My Favourite Phone is: "+phone+"<br>"+"Length of string: "+length);

//Task 3

var name=prompt("Enter country name: ");
var result=name.indexOf("n");
document.write("Index of 'n' is: "+result);

//Task 4

var name=prompt("Enter country name: ");
var result=name.indexOf("l");
document.write("Index of 'l' is: "+result);

//Task 6


var input1=prompt("Enter 1st Input: ");
var input2=prompt("Enter 2nt Input: ");
var result=input1.concat(input2);

document.write(result);

//Chapter 26-30

//Task 1

var number=+prompt("Enter any number: ");
document.write(number+"<br>")
document.write("Round off number: "+Math.round(number)+"<br>");
document.write("Floor value: "+Math.floor(number)+"<br>");
document.write("Ceil value: "+Math.ceil(number)+"<br>");

///Task 2

var number=+prompt("Enter any number: ");
document.write(number+"<br>")
document.write("Round off number: "+Math.round(number)+"<br>");
document.write("Floor value: "+Math.floor(number)+"<br>");
document.write("Ceil value: "+Math.ceil(number)+"<br>");

//Task 3

var number=+prompt("Enter number: ");
document.write("Absolute number is: "+Math.abs(number))

//Task 4

var number=+prompt("Enter number: ");
document.write("Random number is: "+Math.random(number))
document.write("Random number is: "+Math.random(number))

//Chapter 31-34

//Task 1

var d = new Date();
document.write(d);

//Task 2

var d = new Date();
var n = d.getMonth();
if(n==0)
{

document.write("Current Month: January ");
}
else if(n==1){
    document.write("Current Month: February ");
}
else if(n==2){
    document.write("Current Month: March ");
}
else if(n==3){
    document.write("Current Month: April ");
}
else if(n==4){
    document.write("Current Month: May ");
}
else if(n==5){
    document.write("Current Month: June");
}
else if(n==6){
    document.write("Current Month: July ");
}
else if(n==7){
    document.write("Current Month: August ");
}
else if(n==8){
    document.write("Current Month: September");
}
else if(n==9){
    document.write("Current Month: October ");
}
else if(n==10){
    document.write("Current Month: November ");
}
else if(n==11){
    document.write("Current Month: December ");
}

//Task 3

var d = new Date();
var n = d.getDay();
var day;

if(n==0)
{
    day="Saturday";
    document.write("Current Day: "+day.slice(0,3));
}
else if(n==1){
    day="Sunday";
    document.write("Current Day: "+day.slice(0,3));
}
else if(n==2){
    day="Monday";
    document.write("Current Day: "+day.slice(0,3));
}
else if(n==3){
   day="Tuesday";
    document.write("Current Day: "+day.slice(0,3));
}
else if(n==4){
    day="Wednesday";
  document.write("Current Day: "+day.slice(0,3));
}
else if(n==5){
    day="Thursday";
    document.write("Current Day: "+day.slice(0,3));
}
else if(n==6){
    day="Fridayday";
    document.write("Current Day: "+day.slice(0,3));
}


//Chapter 35-38

//Task 1

function myfunction()
{
    var d=new Date();
    document.write(d);
}
myfunction();

//Task 2

function myfunction()
{
    var input1=prompt("Enter 1st Input: ");
var input2=prompt("Enter 2nt Input: ");
var result=input1+input2;

document.write(result);
}
myfunction();

//Task 3

function myfunction()
{
    var input1=+prompt("Enter 1st Input: ");
var input2=+prompt("Enter 2nt Input: ");
var result=input1+input2;

document.write(result);
}
myfunction();





