//q1
var arr=[[],[],[],[],]

//q2
var arr=[[1,2,3],[0,1,2],[1,0,1]]
console.table(arr)

//OR

//q2
var arr=[[1,2,3],[0,1,2],[1,0,1]]
document.write(0+arr[0]+"<br>")
document.write(1+arr[1]+"<br>")
document.write(2+arr[2]+"<br>")


//q3
for(var i=1;i<=10;i++){
    document.write(i+"<br>")
}

//q4
var mult=+prompt('enter a number to show its multi[plication table')
var leng=+prompt('enter the length of your table')
for(var i=1;i<=leng;i++){
    document.write(mult+'x'+i+'='+(mult*i)+"<br>")
}


//q5
var fruits = ['apple', 'banana', 'mango', 'orange','strawberry']
document.write(fruits[0]+"<br>")
document.write(fruits[1]+"<br>")
document.write(fruits[2]+"<br>")
document.write(fruits[3]+"<br>")
document.write(fruits[4]+"<br>"+"<br>"+"<br>"+"<br>")


for(var i=0;i<=fruits.length-1;i++){
    document.write('element at index '+i+' is '+fruits[i]+"<br>")
}



// //q6


// //a
document.write('Counting:'+"<br>")
for(var i=1;i<=15;i++){
    if(i<15){
        document.write(i+',')
    }
    else{
        document.write(i+"<br>")
    }
}


// // //b
 document.write('REverse Counting:'+"<br>")
 for(var i=15;i>=1;i--){
     if(i>1){
         document.write(i+',')
     }
     else{
         document.write(i+"<br>")
     }
 }


// // //c
document.write('Even:'+"<br>")
for(var i=0;i<=20;i=i+2){
    if(i<20){
        document.write(i+',')
    }
    else{
        document.write(i+"<br>")
    }
}


// // //d
document.write('Counting:'+"<br>")
for(var i=1;i<=20;i=i+2){
    if(i<19){
        document.write(i+',')
    }
    else{
        document.write(i+"<br>")
    }
}


// // //e
document.write('Even:'+"<br>")
for(var i=2;i<=20;i=i+2){
    if(i<20){
        document.write(i+'k,')
    }
    else{
        document.write(i+'k'+"<br>")
    }
}


//q7


var arr=['cake', 'apple pie', 'cookie', 'chips', 'patties']
var bakery=prompt('welcome to the bakery.what do you want to order sir/maam?')
for(var i=0;i<=arr.length-1;i++){
    if(bakery==arr[i]){
        alert(bakery+' is available at index '+i+' in our bakery')
    
    }
    

    
}

//q8
var arr=[24,53,78,91,12]
document.write('array items:'+arr+"<br>")
arr.sort()
document.write('the largest number is '+arr[4])





//q9
var arr=[24,53,78,91,12]
document.write('array items:'+arr+"<br>")
arr.sort()
document.write('the largest number is '+arr[0])


//q10
for (var i=5;i<=100;i=i+5){
    document.write(i+',')
}











