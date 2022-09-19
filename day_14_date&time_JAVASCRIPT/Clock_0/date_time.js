
var d = new Date();
// document.write(d);

// document.write(d.getTime());    //it will gives seconds from 1970 

// document.write(d.getDay()); //gives number of day in a week

// document.write(d.getHours());   //gives total hourse

// document.write(d.getFullYear());    //gives current year 

// document.write(d.getDate());    //gives today's /cuurent date

// document.write(d.getHours());   //givs hourse 

// document.write(d.getMilliseconds());    //gives milliseconds

// document.write(d.getMinutes());     //givs minutes 

// var b= setTimeout(mahi,5000);   //where mahi is function name calling before declaration i.e. hoisting and 5000 is milliseconds
var a= setInterval(mahi,2000);  //these function used to print msg in perticular intervalof time i.e. 2sec 2000ms
var i=0;
function mahi(){
    i++;
    document.getElementById("demo").innerHTML +=" Happy Birthday<br>";
    
}

function mahi1(){
    clearTimeout(a);    //
}