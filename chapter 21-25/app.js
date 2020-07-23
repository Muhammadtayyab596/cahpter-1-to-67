
//chapter 21-25


// task 1

var firstname = prompt("Enetr a first name");
var seondname = prompt("Enter second name");
var fullname = firstname + seondname;
document.write(fullname);



// task 2

var a = prompt("Enter a favourite mobile model");
document.write("My favourit phone is"+ " "+ " " + a);
var b = a.length;
document.write( " <br> lenght of string is "  +  b);


// task 3

var a = "String :";
var b = "Pakistan";
document.write(a + " " + b);
var c =  b.indexOf("n");
document.write("<br> index of 'n' :   " + " " + c );


// task 4

var a = "String :";
var b = "Hello World!";
document.write(a + " " + b);
var c =  b.lastIndexOf("l");
document.write("<br> index of 'l' :   " + " " + c );


// task 5

var a = "String :";
var b = "Pakistan";
document.write(a + " " + b);
var c =  b.charAt(3);
document.write("<br> character at index 3 :   " + " " + c );


// task 7

var a = "city : Hyderabad ";
document.write(a);
var b = a.replace("Hyder" ,"Islam");
document.write("<br> After replacement is  " + b);



// task 8


var message = "Ali and Sami are best friends. They play cricket andfootball together.";
document.write(message)
var b = message.replace("and","&")
document.write("<br> <br> After replacement is : "+ " " + b);

  
// task 9


var no = "476";
document.write("476 " + typeof(no) + "<br>")
var convert = Number(no)
document.write("476 " + typeof(convert) + "<br>")


// TASK 10

var user = prompt("enter something")
var userchange = user.toUpperCase()
alert(userchange)




// TASK 11

var user = prompt("enter some string")
var userfirst = user.slice(0,1)
userfirst = userfirst.toUpperCase()
var userlast = user.slice(1)
userlast = userlast.toLowerCase()
alert(userfirst + userlast) 



// TASK 12

var num = 36.35;
document.write(num + "<br>")
document.write(typeof(num) + "<br>")
 num = num.toString()
 var numchange = num.slice(0,2) + num.slice(3);

 document.write(numchange + "<br>")  
 document.write(typeof(num) + "<br>")



// TASK 14


 var name = prompt("enter your item")
 name = name.toLowerCase()
 var A = ["cake", "apple pie", "cookie", "chips", "patties"] 
 for( var i = 0 ; i <= A.length ; i++)
 {
     if ( name === A[i]){
         document.write(A[i] + "is available at index" + i  )
         break
     }
     else{ 
      document.write("item not found")
     }

}



// Task 15


 var password =  prompt("enter password")
  var check1 = /^[a-zA-Z0-9]*$/;

  var result1 = check1.test(password)
  
 if (result1 ){
       document.write ("valid password " + "<br>")
 }
 else {
     document.write("please write an alphanumeric or alpha " + "<br>")
 }

 var range = /^[0-9]*$/; 

  if (range.test(password[0]) ){
  document.write("valid password " + "<br>")
}
else{
    document.write("password can not begin with a number " + "<br>")

}
 if(password.length <= 6)
{
    document.write("valid password " + "<br>")
} 
else {
    document.write("password can not exceed above 6 letter " + "<br>")
}



// TASK 16


var name = prompt("enter your university")

for( var i = 0 ; i <= name.length ; i++)
{
    document.write(name[i] + "<br>")
}

// Task 17


var user = prompt("enter some string")
var userextract = user.slice(length-1)
alert(userextract)




// TASK 18

 var textinital = "The quick brown fox jumps over the lazy dog ";
 var text = textinital.toLowerCase()
 var j = 0;
 for (var i = 0; i <=  text.length ; i++)
 {  
     if(text.slice(i,i+3) === "the"){
         j = j +1;

     }
 }
 document.write("the number of occurence 'the' is " + j)