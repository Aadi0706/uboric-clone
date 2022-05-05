import "./seller.css";

export const Seller=()=>{
    return <div>
        <h1 className="head">Become a Seller</h1>
        <div className="sellers">
            <h1>Vendor Registration</h1>
            <p>Submit the form below to become a vendor on this store.</p>
        <form className="forms">
            <div className="name">
                <p>First Name*</p>
                <p>Last Name*</p>
            </div>
            <div className="input1">
                <input type="text" name="first_name"/>
                <input type="text" name="last_name"/>
            </div>
            <div><p>Login Username*</p></div>
            <div className="input2"><input type="text" name="username" /></div>
            <div className="email">
                <p>Email*</p>
                <p>Confirm Email*</p>
            </div>
            <div className="input3">
                <input type="text" name="Email"/>
                <input type="text" name="Cemail"/>
            </div>
            <div><p>Vendor Name*</p></div>
            <div className="input4"><input type="text" name="vendorname" /></div>
            <em>Important: This is the name that customers see when purchasing your products. Please choose carefully.</em>
            <div className="input5">
                <p>Please describe something about your company and what you sell. *</p>
            <textarea class="input-text" name="vendor_description"></textarea>
            </div>

            <div className="gsp">
                <p>Pan No</p>
                <p>GST No</p>
            </div>
            <div className="input6">
                <input type="text" name="pan"/>
                <input type="text" name="gst"/>
            </div>
            <div className="cont">
                <p>Contact No</p>
              
            </div>
            <div className="input7">
                <input type="text" name="contact"/>
                
            </div>
            <input type="submit" className="subt" value="Submit" />
</form>
        </div>
        </div>
}