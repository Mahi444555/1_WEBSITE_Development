
//Select DOM Button Element 
const btn_submit=document.querySelector("#submit");
const btn_reset=document.querySelector("#reset");
const form=document.querySelector("#form");
const table=document.querySelector("#table");



//select a table body 
const tbody=document.querySelector("#tbody");

//Selecting an input boxes
const firstname=document.querySelector("#FirstName");
const lastname=document.querySelector("#LastName");
const address=document.querySelector("#Address");
const pincode=document.querySelector("#Pincode");
const gender=document.querySelector("#Gender");
const food=document.querySelectorAll(".Checkbox");
const state=document.querySelector("#State");
const country=document.querySelector("#Country");


//Array to store all the object create 
let rowArray=[]
//state and element where we require an edit 
let editing=false;

//create a class to store row data in object 
class Table{
  constructor(firstname,lastname,address,pincode,gender,checkedFood,state,country){
    this.firstname=firstname;
    this.lastname=lastname;
    this.id=this.count;
    this.address=address;
    this.pincode=pincode;
    this.gender=gender;
    this.checkedFood=checkedFood;
    this.state=state;
    this.country=country;
  }
}


//function to update the table as per element present in array

function updateTable(){
  let html="";
let count=1;
  rowArray.forEach(function(element){
    const currentElement=element;
    currentElement.id=count;
    html+=`
    <td>${currentElement.firstname}</td>
    <td>${currentElement.lastname}</td>
    <td>${currentElement.address}</td>
    <td>${currentElement.pincode}</td>
    <td>${currentElement.gender}</td>
    <td>${currentElement.checkedFood}</td>
    <td>${currentElement.state}</td>
    <td>${currentElement.country}</td>
    </tr>`;
    count++;
  })
    tbody.innerHTML=html;
    setLocal();//call local storage

}


//element changes after clicking 
function changeElement(element,checkedFood){
  element.firstname=firstname.value;
  element.lastname=lastname.value;
  element.address=address.value;
  element.pincode=pincode.value;
  element.gender=gender.value;
  element.checkedFood=checkedFood;  
  element.state=state.value;
  element.country=country.value;
  editing=false;
}

//create a new element or callafunction to update the data 
form.addEventListener("submit",function(e){
  e.preventDefault();//default the event has been cancelled

  //logic to select 2 food items
  const checkedFood=[];
  food.forEach(function(e1){
    if(e1.checked==true){
      checkedFood.push(e1.value);

    }

  })
  if(checkedFood.length<2){
    alert("Please select at least 2 food items");
    return;
  }
  console.log(checkedFood);
  if(!editing){
    const row=new Table(
      firstname.value,
      lastname.value,
      address.value,
      pincode.value,
      gender.value,
      checkedFood,
      state.value,
      country.value
    );
    rowArray.push(row);

  }else changeElement(checkedFood)
  firstname.value="";
  lastname.value="";
  address.value="";
  pincode.value="";
  state.value="";
  country.value="";
  gender.value="";
  food.forEach((e1)=>(e1.checked=false));

updateTable();
})


//set Local storage function 
function setLocal(){
  localStorage.setItem("table",JSON.stringify(rowArray));
}
//Array to get back the element from local storage
let localArray=JSON.parse(localStorage.getItem("table"));
if(localArray){
  rowArray=localArray;
  updateTable();
}

//reset the table
function reset(){
  //Remove the data from the table
  localStorage.removeItem("table");
  location.reload();
}

btn_reset.addEventListener("click", reset);