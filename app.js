//------CHAPTER NO # 05

//Q NO # 01

// var num1= 3;

// var num2= 5;

// var sum =num1+num2 ;

// document.write("Sum of  "+num1+" and "+num2+" is "+sum+"")

//Q NO # 02

// var num1= 3;

// var num2= 5;

// var sub =num1-num2 ;

// document.write("Sub of  "+num1+" and "+num2+" is "+sub+"")

//Q NO # 02

// var num1= 3;

// var num2= 5;

// var mul =num1*num2 ;

// document.write("Multiply of  "+num1+" and "+num2+" is "+mul+"")

//Q NO # 02

// var num1= 3;

// var num2= 5;

// var division =num1/num2 ;

// document.write("Division of  "+num1+" and "+num2+" is "+division+"")

//Q NO # 02

// num1 = 36

// num2 = 8

// var mod = num1 % num2

// document.write("Modulus of "+ num1 +" and "+num2+" is "+ mod+"")

//Q NO # 03

// var num1

// document.write("Value after variable declaration is: "+ num1);

// num1=5;

// document.write("<br />Initial value : " + num1);

// ++num1

// document.write("“<br />Value after increment is: " +num1)

// var num2 = 7;

// var subnum= num1 +num2;

// document.write("<br />Vaalue after addition is: " +subnum)

// --subnum

// document.write("<br />Value after increment is: " +subnum)

// var num3 = subnum % 3

// document.write("<br />The reminder is: " +num3)

//Q NO # 04

// var ticket = 600;

// var buying = 5;

// var totalcost = ticket*buying;

// document.write("Total cost to buy "+buying+" tickets to a movie is "+totalcost+"PKR")

//Q NO # 05

// var num = 4;

// var num2 = 0;

// document.write("<h3>TABLE OF 4<h3/>")

// document.write(""+num+" X "+ ++num2+" = "+num*num2+"")

// document.write("<br />"+num+" X "+ ++num2+" = "+num*num2+"")

// document.write("<br />"+num+" X "+ ++num2+" = "+num*num2+"")

// document.write("<br />"+num+" X "+ ++num2+" = "+num*num2+"")

// document.write("<br />"+num+" X "+ ++num2+" = "+num*num2+"")

// document.write("<br />"+num+" X "+ ++num2+" = "+num*num2+"")

// document.write("<br />"+num+" X "+ ++num2+" = "+num*num2+"")

// document.write("<br />"+num+" X "+ ++num2+" = "+num*num2+"")

// document.write("<br />"+num+" X "+ ++num2+" = "+num*num2+"")

// document.write("<br />"+num+" X "+ ++num2+" = "+num*num2+"")

//Q NO # 06

// var C =29;

// var F= (C*9/5)+32;

// document.write( C + "\xB0 C is "+F+ "\xB0 F")

// F = 84

// C =(F-32)*5/9

// document.write("<br />"+ F + "\xB0 F is "+ C + "\xB0 C")

//Q NO # 07

// var item1= 650

// var item2= 100

// var qua1= 3;

// var qua2=7;

// var shipping=100;

// document.write("<h1>SHOPPINH CART<h1/>")

// document.write("<h4>Price of item 1 is "+item1+"<h4/>")

// document.write("<h4>Ordered quantity of item 1 is "+qua1+"<h4/>")

// document.write("<h4>Price of item 2 is "+item2+"<h4/>")

// document.write("<h4>Ordered quantity of item 2 is "+qua2+"<h4/>")

// document.write("<h4>Price of item 1 is "+item1+"<h4/>")

// document.write("<h4>Shipping Charges "+shipping+"<h4/>")

// document.write("<h4>Total cost of your order is "+(item1*qua1+item2*qua2+shipping)+"<h4/>")

// Q NO # 08

// var tMark = 980

// var oMark = 804

// document.write("<h1>Marks Sheet</h1>")

// document.write("Total Marks: " + tMark)

// document.write("<br />Obtain Marks: " + oMark)

// document.write("<br />Percentage: " +(oMark/tMark*100) + "%")

// //Q NO  # 09

// var dollar = 10

// var saudiRiyal = 25

// document.write("<h2>Currency to PKR</h2>")

// document.write("Total Currency in PKR: "+((10*104.80)+(25*28))+"")

//Q NO # 10

// var num1 = 5

// document.write("Airthmetic Calculations: " + ((num1+5)*10)/2);

//Q NO # 11

// var currentYear=prompt("Enter a current year");

// var birthYear=prompt("Enter you birth year");

// document.write("Age Calculator")

// document.write("<br />Current Year:" +currentYear);

// document.write("<br />Birth Year:" + birthYear);

// document.write("<br />Your Age is:" +(currentYear-birthYear));

//Q NO # 12

// var radius = 20

// var pie = 3.142

// document.write("Radius of a circle:" +radius);

// document.write("<br />The circumference is: " +2*pie*radius);

// document.write("<br />The area is: " + pie*radius*radius);

//Q NO # 13

var snack =prompt("Enter Your Favourite Snack");

var currentAge = prompt("Enter Your Current Age");

var maxAge= prompt("Enter Your Maximum Age");

var eAmount = prompt("Enter Your Estimated Amount Per Day");

var lifeTime= (maxAge-currentAge)*eAmount

document.write("<h1>The Lifetime Supply Calculator:</h1>");

document.write("<br />Favourite Snack: " +snack);

document.write("<br />Current Age: " +currentAge);

document.write("<br />Maximum Age: " +maxAge);

document.write("<br />Amount Of Snack per day: " +eAmount);

document.write("<br />You Will Need " + lifeTime + " " + snack + " to last you until the ripe old age " + maxAge);