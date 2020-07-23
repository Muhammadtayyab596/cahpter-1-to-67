// CHAPTER 31-34

//task 1

var a = new Date();
document.write(a)

// task 2

var monthnames = ["january", "february","march","april","june" ,"july", "september","october", "november","december"  ]
var a = new Date();
var d = a.getMonth();
var now = monthnames[d];
document.write(now) 

// task 3

var daynames = ["monday", "tuesday" , "wednesday" , "thursday", "friday" , "saturday","sunday"]
var a = new Date();
var b = a.toString()
var d = b.slice(0,3);
document.write(d)

// task 4

var daynames = ["sunday","monday", "tuesday" , "wednesday" , "thursday", "friday" , "saturday"]
 var a = new Date();
 
var d = a.getDay();

 var now = daynames[d];
 document.write(now + "<br>") 
 if(now === "saturday" || now === "sunday"){
     document.write("ITS FUN DAY")
 }
 else{
     document.write("busy day")
 }

// task 5

var a = new Date();
var d = a.getDate();
if( d <= 15){
    document.write("first 15 days of the month" + "<br>")
}
else{
    document.write("last 15 days of the month" ) 
}

// task 6

var a = new Date();
document.write("current date:" + a + "<br>")
var d= a.getTime();
document.write("elasped miliseconds from jan 1 1970 " + d + "<br>")
var c = d/(1000*60)
document.write("elasped miliseconds from jan 1 1970 " + c)

// task 7

var a = new Date();
document.write(a + "<br>")
var d = a.getHours();
document.write(d + "<br>")
if (d <= 12){
    document.write("ITS AM")
}
else{
    document.write("ITS PM")
}

// task 8

var a = new Date("may 31,2020");
document.write("LAST DATE: " + a)


// task 9

var today = new Date();
var ramadanday = new Date("june 18,2015");

var todaymili = today.getTime();
var ramadanmili = ramadanday.getTime();
var ramdiffer = todaymili - ramadanmili;
var convert = ramdiffer / (1000*60*60*24);
var convertfloor = Math.floor(convert)
document.write(convertfloor + " Days have passed since 1st Ramadan 2015")

// task 10

var constdate = new Date ("january 1,2015 22:00:00")
var reffdate = new Date("Dec 5, 2015 22:00:00 ")
var constsec = constdate.getTime();
var reffsec = reffdate.getTime();
var differmili = reffsec - constsec ;
var unconvertsec = differmili / (1000);
var convert = Math.floor(unconvertsec)
document.write(convert + " seconds have been passed from start of 2015 till dec 5 ,2015")


// task 11

var current = new Date();
document.write("current date: " + current + "<br>")
var hourcurrent = current.getHours();
 current.setHours(hourcurrent-1)

document.write("an hour ago" + current)

// task 12
var current = new Date();
document.write("current date: " + current + "<br>")
var hourcurrent = current.getFullYear();
 current.setFullYear(hourcurrent-100)

document.write("100 year ago" + current)


// task 13
 var currentdate = new Date();
 var dob = new Date("Nov 27,1999");
 var datemili = currentdate.getTime();
 var dobmili = dob.getTime();
 var differ = datemili - dobmili;
 var convert = differ / (1000 * 60 * 60 * 24*30*12)
 var convertfloor = Math.floor(convert)
 document.write("my birthday is " +   convertfloor)

// task 14

var name = "muhammad ibbad";
document.write("Customer name is " + name + "<br>")
var monthnames = ["january", "february","march","april","june" ,"july", "september","october", "november","december"  ]
 var a = new Date();
 var d = a.getMonth();
 var now = monthnames[d];
 var units = 410;
 var charges = 16;

 document.write("Month is " + now + "<br>")
 document.write("Number of units "+ units + "<br>" ) 
 document.write("Charges per units  " + charges  + "<br>" ) 
 var netamount = units * charges;
 document.write("Net amount payable within due date " + netamount + "<br>")
 var latepayment = 350;
 document.write("late payment suicharge: " + latepayment + "<br>")
 var afterdate = netamount + latepayment;
 document.write("net amount after due date: " + afterdate)