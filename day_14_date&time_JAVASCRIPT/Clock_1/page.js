
function dte(){
    var a = new Date(); //inbuilt function date()

    //these is for to print day's name
    const weekday = ['sun','mon','tues','wed','fri','sat'];
    document.getElementById("dayy").innerHTML=weekday[a.getDay()];

    document.getElementById("yer").innerHTML=a.getFullYear();

    // var hrsr= a.getHours();
    // var mins= a.getMinutes();
    // var secs= a.getSeconds(); 
    // document.getElementById("hrs").innerHTML='hrsr';
    // document.getElementById("min").innerHTML='mins';
    // document.getElementById("sec").innerHTML='secs';

              //or directlu we can use insted of that
    document.getElementById("hrs").innerHTML=a.getHours()%12 ||12;
   document.getElementById("min").innerHTML=a.getMinutes();
   document.getElementById("sec").innerHTML=a.getSeconds();
   
   var sess = document.getElementById("session");

   if(hrs>=12)
   {
    sess.innerHTML='AM';
   }
   else{
    sess.innerHTML='PM';
   }
}
setInterval(dte,1000);  //calling and passing functin within a function 
            //setInterval function calls above function continuously hene it runs clcok
