//forEach loop
console.log("forEach loop");

const arr=[1,2,3,4,5];
arr.forEach(print); //calling function print to print all elements of item separately
function print(item){
    console.log(item);
}

////////////////////////////////////////////////

//include() methods: used to show that elements/value is present in array or not : true/f

console.log("include methods");

const arr1 = [10,20,30,40,50];
console.log(arr1);
const x= arr1.includes(20);
console.log(x + "\t" + "yes its'present ");
