/////////////////////chap 38-42//////////////////////////
//q1
var a,b
function power(a,b){
    var c=Math.pow(a,b)
    document.write(c)
}
power(2,3)

//q2

function leapyear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
document.write(leapyear(2016)+"<br>");
document.write(leapyear(2000)+"<br>");
document.write(leapyear(1700));

//q3
function area(a,b,c){
    var s=(a+b+c)/2
    
    var area=s*(s-a)*(s-b)*(s-c)
    document.write(area)

}
area(2,3,4)

// //q4
function avg(){
    
var sub1=document.getElementById('sub1').value
var sub3=document.getElementById('sub2').value
var sub3=document.getElementById('sub3').value
console.log('avg marks='+(sub1+sub2+sub3)/3)

}
function percent(){
    
var sub1=document.getElementById('sub1').value
var sub3=document.getElementById('sub2').value
var sub3=document.getElementById('sub3').value
var perc=parseFloat(((sub1+sub2+sub3)/150)*100)
alert(perc)
}
function mainFunction(){
    avg()
    percent()

}

// /////q6
var vowel='Lorem ipsum dolor sit ame'
for (var i=0;i<=24;i++){
    if(vowel[i]=='a'){
        vowel=vowel.replace('a','')
    }
    else if(vowel[i]=='e'){
        vowel=vowel.replace('e','')
    }
    else if(vowel[i]=='i'){
        vowel=vowel.replace('i','')
    }
    else if(vowel[i]=='o'){
        vowel=vowel.replace('o','')
    }
    else if(vowel[i]=='u'){
        vowel=vowel.replace('u','')
    }
}
document.write(vowel)

// //q7
var count=0
var para='Pleases read this application and give me gratuity Such occurrences are ea, ea, ui'
for (var i=0;i<=para.length;i++){
    if(para[i]=='e'){
        count++
    }
}
alert(count)

// //q8
function meter(){
    dist=document.getElementById('distance').value;
    console.log(dist*1000+"meter")
}
function feet(){
    dist=document.getElementById('distance').value;
    console.log(dist*3280.84+"feet")
}
function inch(){
    dist=document.getElementById('distance').value;
    console.log(dist*39370.079+"inch")
}
function cmeter(){
    dist=document.getElementById('distance').value;
    console.log(dist*100000+"cm")
}

//////q9
function salary(){
var hours=document.getElementById('hour').value;
if(hours<=40){
    alert('salary:  '+(hours*10))
}
if(hours>=40){
    alert('salary:  '+(400+(hours-40)*12))
}







































