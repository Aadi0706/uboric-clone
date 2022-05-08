import React, { useState } from "react";
import "./Modal.css";

export const  Marchent =()=> {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Become a Merchant
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h1 className="head">B2B LOGIN/REGISTRATION FORM</h1>
       <div className="b2bmain">
         <div className="b2bfirst">
           <h1>Login</h1>
           <div><p>Username/Email*</p></div>
            <div className="inputl1"><input type="text" name="username" /></div>
            <div><p>Password*</p></div>
            <div className="inputl2"><input type="text" name="password" /></div>
            <div><input type="checkbox"/> Remember</div>
           <div><input type="submit" className="login1" value="Login" /></div>
            <p>Lost Password?</p>
         </div>
         <div className="b2bsecond">
           <h1>Register</h1>
           <p>Connect With</p>
      <div>
      <div className="ggl">   <div className="img1"> <img src="https://www.uboric.com/wp-content/plugins/miniorange-login-openid/includes/images/icons/g.png" alt="/"/>
          </div><div className="text1"><p>Login with Google</p></div></div>
      </div>
          <div><p>User Name*</p></div>
            <div className="inputr1"><input type="text" name="usernamer" /></div>
            <div><p>User Email*</p></div>
            <div className="inputr1"><input type="text" name="useremailr" /></div>
            <div><p>Password*</p></div>
            <div className="inputr1"><input type="text" name="userpasswordr" /></div>
            <div><p>Phone*</p></div>
            <div className="inputr1"><input type="text" name="phone" /></div>
            <div><p>Pan No*</p></div>
            <div className="inputr1"><input type="text" name="pan" /></div>
            <div><p>GST No</p></div>
            <div className="inputr1"><input type="text" name="gst" /></div>
            <div><input type="submit" className="register1" value="Register" /></div>
         </div>
       </div>
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
     
    </>
  );
}