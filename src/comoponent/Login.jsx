import Loginuser from "./login/loginuser"
import Register from "./login/register"
import "./login/login.css"
export const Login=()=>{
    return (
        <div className="container">
        <h1>My account</h1>
         <div className="logindata">
         <div className="login">
             <div className="middletext"><h2>Login</h2></div>
            <Loginuser/>

              
         </div>
         <div className="register">
            <Register/>
         </div>
     </div>
    </div>
    )
}