import '../comoponent/Footer.css';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Footer=()=>{
    return(
    <div className='Footer'>
        <div>
        <img className='footerimg' src="https://www.uboric.com/wp-content/uploads/2020/08/google-play1.png" alt="" />
        </div>
        <div className='footertext'>
            <p>About Us</p>
            <p>Contact</p>
            <p>Shipping & Returns</p>
            <p>My Account</p>
            <p>Privacy Policy</p>
            <p>Become A seller</p>
            <p>Terms & Condition</p>
            
        </div>
        <div className='reserved'>
            <p>© 2019 – 2021 UBORIC. ALL RIGHTS RESERVED.</p>
        </div>
        <div className='contect'>
            <div className='icons'>
            <FacebookIcon className='FacebookIcon' fontSize='large'/>
        </div>
        <div className='icons1'>
        <InstagramIcon className='insta' fontSize='large'/>
        </div>
        </div>
    </div>
    )

}