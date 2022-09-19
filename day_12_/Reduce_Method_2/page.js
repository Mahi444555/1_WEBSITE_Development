//to find the index of a perticular number use .indexOf(item)

const arr = [10,20,30,40,50];
var ind = arr.indexOf(40);
console.log(ind);

//reduce method 

const arrr = [10,1,4,6,50];
 
const b=arrr.reduce(mahi);

function mahi(x,current){
    return x+current;
}
console.log(b);


//sorting of words
const nm= ['zaa','aab','ccdd','xyz'];
const srt = nm.sort();
console.log(srt);

//sorting of numbers
const num = [1,10,5,50,100];
const nb=num.sort(x,y); {
return x-y;
}
console.log(nb);