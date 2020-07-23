
// chapter 26-30


// task 1


// var num = +prompt("enter number") ;
// document.write("Number: " + num + "<br>")

// var  numround = Math.round(num)
// document.write("round off: " + numround + "<br>")

// var numfloor = Math.floor(num);
// document.write("floor is : " + numfloor + "<br>")

// var numceil = Math.ceil(num)
// document.write("ceil is: " + numceil)



// task 2

// var num = +prompt("enter number") ;
// document.write("Number: " + num + "<br>")

// var  numround = Math.round(num)
// document.write("round off: " + numround + "<br>")

// var numfloor = Math.floor(num);
// document.write("floor is : " + numfloor + "<br>")

// var numceil = Math.ceil(num)
// document.write("ceil is: " + numceil)



// task 3



// var num = +prompt("enter negative number:")
// var numabsolute = Math.abs(num)
// document.write("absolute value is " + numabsolute)

// task 4


// var dice = Math.floor(Math.random()* 6) +1;
// document.write( "random dice value is " +  dice)

// task 5



// var toss = Math.floor(Math.random()* 2) +1;
// if(toss === 2){
//     document.write("random coin value heads ")
// }
// else{
//     document.write("random coin value tails ")
// }

// task 6


// var number = Math.floor(Math.random()* 100) +1;
// document.write("random number between 0 to 100 is " + number)




// task 8



// var number = Math.floor(Math.random()* 4) +1;
// var counts = 3;
// var j= 3
// for(var i = 0 ; i < counts ; i++){
// var guess = +prompt("enter your number")

//     if (number === guess){
//         document.write("congratulation, YOU WON")
//         break
//     }
//     else{
//         document.write("TRY AGAIN you have " +    j--  + "more choices" + "<br>")
//     }
// }
// if(j === 1)
// {
//     document.write("you lose")
// }