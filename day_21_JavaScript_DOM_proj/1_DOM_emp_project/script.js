

//Array of objects data (Employee)
let employees=[
    {
      id:1,
      first_name:"Suresh",
      last_name:"Kumar",
      email:"suresh.kumar@gmail.com",
      gender:"male",
      ip_address:"123.123.123",
    },
    {
      id:2,
      first_name:"Sourav",
      last_name:"Das",
      email:"sourav@gmail.com",
      gender:"male",
      ip_address:"133.173.123",
    },
     {
      id:3,
      first_name:"John",
      last_name:"Paul",
      email:"john@gmail.com",
      gender:"male",
      ip_address:"173.123.133",
    },
    {
      id:4,
      first_name:"pavan",
      last_name:"Sai",
      email:"pavan@gmail.com",
      gender:"male",
      ip_address:"173.123.133",
    },
    {
      id:5,
      first_name:"Sangeetha",
      last_name:"Das",
      email:"sangeetha@gmail.com",
      gender:"female",
      ip_address:"168.123.133",
    },
    {
      id:6,
      first_name:"Tushar",
      last_name:"Sharma",
      email:"tushar@gmail.com",
      gender:"male",
      ip_address:"173.123.133",
    },
    {
      id:7,
      first_name:"Jenny",
      last_name:"paul",
      email:"jenny@gmail.com",
      gender:"female",
      ip_address:"173.323.133",
    },
    {
      id:8,
      first_name:"Swapnil",
      last_name:"Selokar",
      email:"swapnil@gmail.com",
      gender:"male",
      ip_address:"173.223.133",
    },
    {
      id:9,
      first_name:"jhansi",
      last_name:"p",
      email:"jhansi@gmail.com",
      gender:"female",
      ip_address:"193.123.133",
    },
    {
      id:10,
      first_name:"Kartheswar",
      last_name:"G",
      email:"kartheswar@gmail.com",
      gender:"male",
      ip_address:"133.123.133",
    },
  
    {
      id:11,
      first_name:"Prajkata",
      last_name:"Umale",
      email:"prajkta@gmail.com",
      gender:"female",
      ip_address:"183.123.133",
    },
    {
      id:12,
      first_name:"Mahesh",
      last_name:"jadav",
      email:"mahesh@gmail.com",
      gender:"male",
      ip_address:"183.183.133",
    },
  
    {
      id:13,
      first_name:"Nirav",
      last_name:"N",
      email:"nirav@gmail.com",
      gender:"male",
      ip_address:"183.123.173",
    },
    
    
  ]
  
  
  //Logic to get all employees data 
  let allEmpButton=document.querySelector("#all-emp-btn");
  allEmpButton.addEventListener("click",function(){
    console.log(employees)
    displayEmployees(employees)//call this function
  
  })
  
  
  //Logic to get male employees Data 
  let maleEmpButton=document.querySelector("#male-emp-btn");
  maleEmpButton.addEventListener("click",function(){
    //filter logic 
    let maleEmployee=employees.filter(function(employee){
      return employee.gender==="male"
    })
    console.log(maleEmployee)
    displayEmployees(maleEmployee)
  })
  
  
  //Logic to get female employee data 
  let femaleEmpButton=document.getElementById("female-emp-btn");
  femaleEmpButton.addEventListener("click",function(){
    //filter logic
    let femaleEmployee=employees.filter(function(employee){
      return employee.gender==="female"
    })
    console.log(femaleEmployee)
    displayEmployees(femaleEmployee)
  })
  
  //Logic to Search  for employees 
  let searchBox=document.querySelector("#search-box");
  
  searchBox.addEventListener("keyup",function(e){
    let textEntered=searchBox.value;
    // console.log(textEntered)
    let filteredEmployees=[];
    if(textEntered!=""){
      //write your logic to populate the data 
      filteredEmployees=employees.filter(function(employee){
        return employee.first_name.toLowerCase().includes(textEntered.toLowerCase());
      })
    console.log(filteredEmployees)
    displayEmployees(filteredEmployees);
    }
  })
  
  
  //Display the data for selected employees
  let displayEmployees = (employees)=>{
  //select the table body
  let tablebody=document.querySelector("#table-body");
  
  //create a row which is initailly empty and append the data of employee to table body
  
  let tablerow="";
  // add each data to new row
  for(let employee of employees){
  tablerow+=`<tr>
  <td>${employee.id}</td>
  <td>${employee.first_name}</td>
  <td>${employee.last_name}</td>
  <td>${employee.email}</td>
  <td>${employee.gender}</td>
  <td>${employee.ip_address}</td>
  </tr>
  `
  //Append the tablerow with table body
  tablebody.innerHTML=tablerow;
  }
  }
  
  