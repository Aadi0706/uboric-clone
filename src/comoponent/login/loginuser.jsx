import React, {useState} from "react"

import axios from "axios"
const Loginuser=()=>{

  const [data,setData]=useState({
      email:"",
      password:""
  })
  const [err,setError]=useState("")
  const handleChange1=({currentTarget:input})=>{
    setData({...data,[input.name]:input.value})
}
    const handleSubmit1=async(e)=>{
        e.preventDefault()

        try{
            const url="http://localhost:8080/api/auth";
            const {data:res}=await axios.post(url,data)
            localStorage.setItem("token",res.data)
            alert(res.message)
            //location
            
        }catch(err){
            if(err.response && err.ressponse.status>=400 && err.response.status<=500 ){
                setError(err.response.data.message)
            }
        }
    }
        return(
            
                 <div className="innerdiv">
                 
                    <form onSubmit={handleSubmit1}>
                        <p>Connect with</p>
                        <p>Username or email address *</p>
                        <input type="text" name="email" value={data.email} required onChange={handleChange1}/>
                        <p>Password *</p>
                        <input type="text" name="password" value={data.password} onChange={handleChange1}/>
                        <p> Remember me</p>
                        <button className="button">LOG IN</button>
                    </form>
                 </div>
         
        )
    
}
export default Loginuser