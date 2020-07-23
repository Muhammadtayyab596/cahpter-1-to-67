//q7

var qual=['SSC','HSC','BCS','BS','BCOM','MS','M.pHIL','PhD']
document.write(qual)

//q8

 var nameArr=['arsalan','ibbad','ahmad']
 var marks=[320,230,480]
 var tmarks=500;
 for (var i=0;i<=2;i++)
 document.write('score of '+nameArr[i]+' is '+marks[i]+'.percentage is '+marks[i]/tmarks*100+'%'+"<br>")

//q9

 var colors=['red','green','blue']
 document.write(colors+"<br>")
// // //a
 var name1=prompt('enter a color name you want to add to beginning')
 colors.unshift(name1)
 document.write(colors+"<br>")
// // //b
 var name2=prompt('enter a color name you want to add to end')
 colors.push(name2)
 document.write(colors+"<br>")
// //c
var name3=prompt('enter a color name you want to add to beginning')
var name4=prompt('enter a color name you want to add to beginning')
colors.unshift(name3)
colors.unshift(name4)
document.write(colors+"<br>")
// //d
colors.shift()
document.write(colors+"<br>")
// //e
colors.pop()
document.write(colors+"<br>")
// //f
var name5=prompt('enter index at which you want to add a color name')
var name6=prompt('enter a color name you want to add to this index')
colors.splice(name5,0,name6)
document.write(colors+"<br>")
// //g
var name5=prompt('enter index at which you want to del a color name')
var name6=prompt('enter how many color you want to delete')
colors.splice(name5,name6)
document.write(colors+"<br>")


//q10
 var scoreArr=[];
 scoreArr[0]=+prompt('enter marks')
 scoreArr[1]=+prompt('enter marks')
 scoreArr[2]=+prompt('enter marks')
 scoreArr[3]=+prompt('enter marks')
 document.write(scoreArr+"<br>")
 scoreArr.sort()
 document.write(scoreArr)

//q11
var cityArr=["karachi","lahore","islmabad","quetta","peshawer"]
document.write('Cities List:'+"<br>")
document.write(cityArr+"<br>")
city1=cityArr.slice(2,4)
document.write('Selected cities List:'+"<br>")
document.write(city1)




//q12
var arr = ['This ', 'is ', 'my' , ' cat'];
document.write('Array'+"<br>")
document.write(arr+"<br>")
document.write('String'+"<br>")
document.write(arr[0]+arr[1]+arr[2]+arr[3])

//q13
var arr=[]
arr[0]=prompt('enter any name')
arr[1]=prompt('enter any name')
arr[2]=prompt('enter any name')
arr[3]=prompt('enter any name')
document.write(arr+"<br>"+"<br>")

document.write('Out:'+"<br>"+arr.shift()+"<br>")
document.write('Out:'+"<br>"+arr.shift()+"<br>")
document.write('Out:'+"<br>"+arr.shift()+"<br>")
document.write('Out:'+"<br>"+arr.shift()+"<br>")

//q14
var arr=[]
arr[0]=prompt('enter any name')
arr[1]=prompt('enter any name')
arr[2]=prompt('enter any name')
arr[3]=prompt('enter any name')
document.write(arr+"<br>"+"<br>")

document.write('Out:'+"<br>"+arr.pop()+"<br>")
document.write('Out:'+"<br>"+arr.pop()+"<br>")
document.write('Out:'+"<br>"+arr.pop()+"<br>")
document.write('Out:'+"<br>"+arr.pop()+"<br>")


//q15
var manuf=['Apple','Samsung', 'Motorola', 'Nokia', 'Sony','Haier']
document.write(manuf[0]+"<br>")
document.write(manuf[1]+"<br>")
document.write(manuf[2]+"<br>")
document.write(manuf[3]+"<br>")
document.write(manuf[4]+"<br>")
document.write(manuf[5])

