
function add(){
    let num1=document.getElementById("first").value;
    let num2=document.getElementById("second").value;   //.value using here to accessing it's value only ...
    let result=parseInt(num1)+parseInt(num2);   //this parseInt() method used to convert string value to Integer value
    console.log(result);

    document.getElementsByClassName("output")[0].innerHTML="Addition is "+result;
}


function sub(){
    let num1=document.getElementById("first").value;
    let num2=document.getElementById("second").value;
    let result=parseInt(num1)-parseInt(num2);
    console.log(result);

    document.getElementsByClassName("output")[0].innerHTML="Subtraction is "+result;
}


function mul(){
    let num1=document.getElementById("first").value;
    let num2=document.getElementById("second").value;
    let result=parseInt(num1)*parseInt(num2);
    console.log(result);

    document.getElementsByClassName("output")[0].innerHTML="Multiplication is "+result;
}


function div(){
    let num1=document.getElementById("first").value;
    let num2=document.getElementById("second").value;
    let result=parseInt(num1)/parseInt(num2);
    console.log(result);

    document.getElementsByClassName("output")[0].innerHTML="Division is "+result;
}


