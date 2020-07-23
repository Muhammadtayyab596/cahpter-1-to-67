// chater 34-38




// task 1

// function currentdate(){
//     var a = new Date();
//     document.write(a)
// }
// currentdate();




// task 2
// var firstname = prompt("your first name")
// var lastname = prompt("your last name")

// function fullname(a,b ){
//    var compname = a + b;
//    document.write("your name is:" + compname)
// }

// fullname(firstname,lastname);




// task 3

//  var num1 = +prompt("enter first no:")
//  var num2 = +prompt("enter second no:")

// function myFunction(p1, p2) {
//     return p1 + p2;   // The function returns the product of p1 and p2
//   }
//   var multiply = myFunction(num1,num2);
//   document.write(multiply)



// task 4

// var num1 = +prompt("enter first no:")
//  var num2 = +prompt("enter second no:")
//  var operation = prompt("enter operator")

//  function myCalulator(a,b,c){
//      if (b === "+"){
//          return a + c;
//      }
//      else if (b === "-"){
//         return a - c;
//     }
//     else if (b === "*"){
//         return a * c;
//     }
//     else if (b === "/"){
//         return a / c;
//     }
//     else{
//        return "this is not a operator";
//     }
//  }

//  var result = myCalulator(num1,operation,num2)
//  document.write(result)

// task 5
// var num = +prompt("enter your number")

// function Square(a){
//     return a * a;
// }
// var result = Square(num);
// document.write("your sqaure is " + result)


// task 6
// var num = +prompt("enter your number")
// var j =1;
// function myFactorial(y){

//    for (var i =2 ; i <= y;i++){
//        j = j * (i); 

//    }
//    return j;

// }

// var result = myFactorial(num);
// document.write(result)




// task 7
// var num1 = +prompt("enter first no of the range")
// var num2 = +prompt("enter second no of the range")
// function myRange(a,b){
//     for(var i = a; i <= b ; i++ )
//     document.write(i + "<br>")

// }

// myRange(num1,num2);




// task 8
// function hyp(){
//     var base=+prompt('enter base of triangle')
//     var perp=+prompt('enter perpendicular of triangle')
//     function square(){
//         base=base*base
//         perp=perp*perp
//     }
//     square()
//     document.write('hypotenuse='+((base)+(perp)))
//     }
// hyp()




// task 9
// var width = +prompt("enter width")
// var height = +prompt("enter height")

// function Area(b,c){
//     var a = b * c;
//     return a;
// }

// var result = Area(width,height)
// document.write("area is " + result)




// task 10


// var name = prompt("enter your name")
// var palindrome = "";
// for (var i = name.length; i >= 1 ; i-- ){
//     palindrome =palindrome + name[i];
    
// }
// document.write(palindrome)
 
// if(name == palindrome){
//     document.write("its a palindrome")
// }
// else{
//     document.write("it is not a palindrome")
// }




// task 11


// var para='the quick brown fox'
// var capi=para.toUpperCase()
// alert(capi)

// task 12
// dont understand how to do it



// //task13
// function count(para,letter){
//     var count=0
//     for(var i=0;i<para.length;i++){
//         var para1=para[i]
//         if(para1=='o'){
//             count=count+1
//         }
//     }
// document.write(count)
// }
// count('JSResources.com','o')

// // task 14


// function calcCircumference(r){
//     var circum=2*3.14*r
//     document.write('the circumference is:'+circum+"<br>")
// }
// function calcArea(r){
//     var area=3.14*r*r
//     document.write('the area is:'+area)

// }
// calcCircumference(5)
// calcArea(5)
