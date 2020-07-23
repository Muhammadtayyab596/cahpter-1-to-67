


//q2

var num1=+prompt('enter 1st number')
var num2=+prompt('enter 2nd number')
if(num1>num2){
    document.write(num1+' is greater than '+num2)
}
else if(num1==num2){
    document.write('these numbers are equal')
}
else{
    document.write(num1+' is less than '+num2)
}


//q3

var num1=+prompt('enter 1st number')
if(num1>0){
    document.write(' the number is positive')
}
else if(num1==0){
    document.write('the number is zero')
}
else{
    document.write(' the number is negative ')
}


// //q4
var letter=prompt('enter a letter')
if(letter=='a' ||letter=='e' ||letter=='i' ||letter=='o' ||letter=='u')
{
    document.write('this letter is a vowel')
}
else{
    document.write('this letter is not a  vowel')
}


//q5

var pass='arsalan123'
var password=prompt('enter a password')
if(password=='arsalan123'){
    alert('Correct! The password you entered matches the original password')
}
else if(password==prompt){
    alert('enter your pssword')
}
else{
    alert('incorrect password')
}

//q6

var greeting;
var hour = 13;
if (hour < 18) {
var greeting = "Good day";
alert(greeting)
}
else{
var greeting = "Good evening";
alert(greeting)

}


//q7

var time=+prompt('enter time in 24hrs format i.e:2300')
if (time>=0000  && time<1200){
    alert('good morning!')
}

else if(time>=1200  && time<1700){
    alert('good afternoon!')
}
else if(time>=1700  && time<2100){
    alert('good Evening!')
}
else if(time>=2100  && time<2359){
    alert('good Night!')
}








