import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { Link,useNavigate } from "react-router-dom"
const Register=()=>{

  const [data,setData]=useState({
      email:"",
      password:""
  })
  const [err,setError]=useState("")
  const navigate=useNavigate
  const handleChange=({currentTarget:input})=>{
      setData({...data,[input.name]:input.value})
  }

    const handleSubmit=async(e)=>{
        e.preventDefault()

        try{
            const url="http://localhost:8080/api/users";
            const {data:res}=await axios.post(url,data);
            // navigate("/")
            alert(res.message)
            window.location = "/";

        }catch(err){
            if(err.response && err.ressponse.status>=400 && err.response.status<=500 ){
                setError(err.response.data.message)
            }
        }
    }
   
        return(
            
             
                 <div className="innerdiv1">
                 <div className="middletext"><h2>Register</h2></div>
                 
                    <form onSubmit={handleSubmit}>
                        <p>Creating an account is quick and easy, and will allow you to move through our checkout quicker.</p>            
                        <p>Email address *</p>
                        <input type="email" name="email" value={data.email} required onChange={handleChange}/>                  
                        <p>Password *</p>
                        <input type="text" name="password" value={data.password} onChange={handleChange}/>
                        <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                        
                        <button type="submit" className="button">Register</button>
                    </form>
                 </div>
            
         
       
        )
    
}
export default Register