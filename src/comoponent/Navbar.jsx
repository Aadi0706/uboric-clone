import '../comoponent/Navbar.css';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Navbar=()=>{

    const nav=[
        {title:"Home",to:"/"},
        {title:"Categories",to:"/categories"},
        {title:"Customer/Guest login", to:'/login'},
        {title:"Merchant/Bulk Order",to:"/Merchant"},
        {title:"Become A Seller",to:"/Seller"}
    ]
    
    return(
        <div className='navbar'>
        
        <div className='first_row'>FOR ONLINE PAYMENT EXTRA ₹100 DISCOUNT ON ORDERS ABOVE ₹500</div>
        <div className='second_row'>
         <div className="search_box">
             <div className='box'>
         <input type="search" className="orig" placeholder="Search here..." autocomplete="off">
         </input>
         <SearchIcon/>
         </div>
         </div>
         <img className="logo_image"  src="https://www.uboric.com/wp-content/uploads/2021/04/uboric.svg" alt="logo_img" />
         <div className='second'>
        <AccountCircleIcon fontSize='large' />
         </div>
         <div className='third'>
         <ShoppingCartIcon  fontSize='large' />
         </div>
       </div>
       <div className='bar'>
           {nav.map((e,i)=>(
               <a key={i} href={e.to} className="bar1">
                   {e.title}
               </a>
           ))}

       </div>
        </div>
    )

}