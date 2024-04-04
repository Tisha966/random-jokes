import {useState} from "react";
export default function Form(){
    let[formData,setFormData]=useState({
        fullName:"",
        userName:"",
        password:"",
    });
   let handleInputChange=(event)=>{
    let fieldName=event.target.name;
    let newValue=event.target.value;
    
    setFormData((currData)=>
    {
        
        return {...currData,[fieldName]:newValue};
    })
   };
    let handleSubmit=(event)=>{
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName:"",
            userName:"",
            password:"",
        });
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full name</label>
            <input placeholder="Enter your full name" 
            type="text" 
            value={formData.fullName} 
           onChange={handleInputChange}
            id="fullName"
            name="fullName"
            />
            <br></br>
            <br></br>
            <label htmlFor="username">Username</label>
            <input placeholder="Enter your user name" 
            type="text" 
            value={formData.userName} 
           
            id="userName"
            name="userName"
            onChange={handleInputChange}
            />
            <br></br>
            <br></br>
            <label htmlFor="password">Password</label>
            <input placeholder="Enter your password" 
            type="text" 
            value={formData.password} 
           
            id="password"
            name="password"
            onChange={handleInputChange}
            />
            <br></br>
            <br></br>
            <button>SUBMIT</button>
        </form>
    );
}