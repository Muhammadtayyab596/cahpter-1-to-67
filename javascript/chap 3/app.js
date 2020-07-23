//1. Declare a variable called age & assign to it your age. Show
// your age in an alert box

var age =+prompt('enter your age','age here..');
alert('i am '+age+' years old')



// //3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:

var birthyear =+prompt('enter your birth year','put here..');
document.write('my birth year is '+birthyear+'<br/>')
document.write('data type of my declared variable is a number')



// //  . A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.


name=prompt('enter your name')
prod=prompt('enter product name')
quant=prompt('enter quantity')


document.write(name+' ordered '+  quant  +   prod +' on XYZ Clothing store')