//creating array of object which contains employee data
let employees = [
    {
        id: 1,
        first_name: "mahesh",
        last_name: "jadhav",
        email: "mahi@gmail.com",
        gender:"male",
        ip_address:"172.192.199",
    },

    {
        id:2,
        first_name:"manali",
        last_name:"jha",
        email:"manali@gmail.com",
        gender:"female",
        ip_address:"142.111.192",
    },

    {
        id:3,
        first_name:"kalu",
        last_name:"kaka",
        email:"kalu@gmail.com",
        gender:"male",
        ip_address:"100.102.192",
    },

    {
        id:4,
        first_name:"saniya",
        last_name:"deshmukh",
        email:"saniya@gmail.com",
        gender:"female",
        ip_address:"100.100,201",
    },

    {
        id:5,
        first_name:"Amol",
        last_name:"Gore",
        email:"Ammu@gmail.com",
        gender:"male",
        ip_address:"100.211.192",
    },


    {
        id:6,
        first_name:"surya",
        last_name:"Ambani",
        email:"surya@gmail.com",
        gender:"male",
        ip_address:"111.111.121",
    },

]


    //Logic to get all employee data in one button click
    let allEmpButton=document.querySelector("#all-emp-btn");
    allEmpButton.addEventListener("click",function(){
        console.log(employees)
        displayEmployees(employees) //here calling displayEmployees() i.e arrow funciton and passing  all data object 

    })

 
    //Display the data for selected employees using arrow function i.e. they don't use function keyword they used datatype const,var,let
   
    let displayEmployees = (employees)=>{  //passing reference as (employee) i.e. our object name which contain all data
        //select the table body now just we have to display that data in table insted of console screen
        let tablebody=document.querySelector("#table-body");
        //create a row which initially empty  & 'append'the data of employees object to the table body 
        //for that use for_of_loop to iterate through the array of obj 
        let tablerow="";    //empty row created  add each data to new row
        for(let employee of employees){ 
            tablerow+=`<tr>
            <td>${employee.id}</td> 
            <td>${employee.first_name}</td>
            <td>${employee.last_name}</td>
            <td>${employee.email}</td>
            <td>${employee.gender}</td>
            <td>${employee.ip_address}</td>
            </tr>`

            //Aeepend the tablerow with table body means send this row to table body 
            tablebody.innerHTML=tablerow; 
            }
        }
    

//logic for male employee 
        let MaleEmpButton=document.querySelector("#male-emp-btn");
        MaleEmpButton.addEventListener("click",function(){
            
            // for(emp of employees){
            //     if(emp.gender=="male"){
            //         console.log(emp.id);
            //     }
            // }
           

            displayMaleEmployee(employees); //calling fucntion
           
        })


        let displayMaleEmployee=(employees)=>{  //this is arrow function to display male emp only
            //now accessing table-body id to insert all data in taht table
            let tablebody=document.querySelector("#table-body");
            //create empty table-row
            let tablerow="";    //empty row of table and once all data get in that row just insert to tablebody
            for(emp of employees){
                if(emp.gender=="male"){
                tablerow+=`<tr>
                <td>${emp.id}</td>
                <td>${emp.first_name}</td> 
                <td>${emp.last_name}</td>
                <td>${emp.email}</td>
                <td>${emp.gender}</td>
                <td>${emp.ip_address}</td>
                </tr> `
                //just insert using .innerHTML...
                tablebody.innerHTML=tablerow;
                }
            }
        }


        //1st logic for filtering female employee
            let FemaleEmpButton=document.querySelector("#female-emp-btn")
            FemaleEmpButton.addEventListener("click",function(){

                //using filter() method we filter only female emp form array of obj
                let femaleEmployee= employees.filter(function(emp){
                    return emp.gender==="female";
                })
                displayEmployees(femaleEmployee)
            })



//2nd logic for female employee
        //logic for male employee 
        // let FemaleEmpButton=document.querySelector("#female-emp-btn");
        // FemaleEmpButton.addEventListener("click",function(){
            
        //     // for(emp of employees){
        //     //     if(emp.gender=="female"){
        //     //         console.log(emp.id);
        //     //     }
        //     // }
           

        //     displayFemaleEmployee(employees); //calling fucntion
           
        // })


        // let displayFemaleEmployee=(employees)=>{  //this is arrow function to display male emp only
        //     //now accessing table-body id to insert all data in taht table
        //     let tablebody=document.querySelector("#table-body");
        //     //create empty table-row
        //     let tablerow="";    //empty row of table and once all data get in that row just insert to tablebody
        //     for(empf of employees){
        //         if(empf.gender=="female"){
        //         tablerow+=`<tr>
        //         <td>${empf.id}</td>
        //         <td>${empf.first_name}</td> 
        //         <td>${empf.last_name}</td>
        //         <td>${empf.email}</td>
        //         <td>${empf.gender}</td>
        //         <td>${empf.ip_address}</td>
        //         </tr> `
        //         //just insert using .innerHTML...
        //         tablebody.innerHTML=tablerow;
        //         }
        //     }
        // }

//logic for search button
let searchBox = document.querySelector("#search-box");

        searchBox.addEventListener("keyup",function(e){
            let textEntered=searchBox.value;
            // console.log(textEntered);
            // document.querySelector("#search-box").innerHTML=textEntered;
            let filteredEmployees=[];   //take empty array to take input 
            if(textEntered !=""){//if it's not equal to empty
                //write your logic to populate the data
                filteredEmployees=employees.filter(function(employee){
                    return employee.first_name.toLowerCase().includes(textEntered.toLowerCase());
                })
                console.log(filteredEmployees);
                displayEmployees(filteredEmployees);
            }
        })







