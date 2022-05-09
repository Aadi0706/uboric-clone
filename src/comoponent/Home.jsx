import '../comoponent/Home.css';

import {
  useEffect,
  useRef,
  useState,
} from 'react';

import slide from './images/slide.png';
import slide1 from './images/slide1.png';
import slide2 from './images/slide2.png';
import slide3 from './images/slide3.png';
import slide4 from './images/slide4.png';

export const Home=()=>{
    const uboric=[slide,slide1,slide2,slide3,slide4];
    const delayuboric=3000;
    const[uboricIndex,setUboricIndex]=useState(0)
    const timeoutRefuboric=useRef(null)

    function resetTimeoutuboric() {
        if (timeoutRefuboric.current) {
          clearTimeout(timeoutRefuboric.current);
        }
      }
    
      useEffect(() => {
        resetTimeoutuboric();
        timeoutRefuboric.current = setTimeout(
          () =>
            setUboricIndex((prevIndex) =>
              prevIndex === uboric.length - 1 ? 0 : prevIndex + 1
            ),
          delayuboric
        );
        return () => {
          resetTimeoutuboric();
        };
      },[uboricIndex]);

    return <div className="home">
                <div id='project1'>
                <div id='specp1' className='slideshow'>
                <div className='slideshowSlider'style={{ transform: `translate3d(${-uboricIndex * 100}%, 0, 0)` }}>
                    {uboric.map((el,index)=>(
                     <>
                        <img className="slide" id='Spec1' src={el} alt="slide" />
                        
                       </>
                    ))}
                </div>
         </div> 
 </div>
 <div className='project2'>
     <div className='ware'>  
     <img className="im1" src="https://www.uboric.com/wp-content/uploads/elementor/thumbs/kitchen-ware-heading-2-e1608267087979-pkx8tuzlfhai1ztcx1owc3kh6ggu4y22dyfsgaynio.png" alt=''/>
     <h1>KITCHEN WARE</h1>
     <img className="im1" src="https://www.uboric.com/wp-content/uploads/elementor/thumbs/kitchen-ware-heading-2-e1608267087979-pkx8tuzlfhai1ztcx1owc3kh6ggu4y22dyfsgaynio.png" alt=''/>
     </div>
     <div className='ware1'>
     <img className='im2' src="https://www.uboric.com/wp-content/uploads/2020/12/kithchen-tools-768x602.jpg"  alt="" />
     <img className='im2' src="https://www.uboric.com/wp-content/uploads/2020/12/Air-Tight-Containers-768x602.jpg"  alt="" />
     <img className='im2' src="https://www.uboric.com/wp-content/uploads/2020/12/Gas-Lighter-1024x1024.jpg"  alt="" />
     </div>
 </div>
 <div className='nextim'>
     <img className='im3' src="https://www.uboric.com/wp-content/uploads/2020/08/Uboric-1.jpg" alt="" />
 </div>
 <div className='project3'>
 <div className='ware'>  
     <img className="im1" src="https://www.uboric.com/wp-content/uploads/elementor/thumbs/other-category-heading-pkx8tu1r8n97qduq2ja9rlt0l2lgx8yc1tsaz101ow.png" alt=''/>
     <h1>OTHER CATEGORIES</h1>
     <img className="im1" src="https://www.uboric.com/wp-content/uploads/elementor/thumbs/other-category-heading-2-e1608267154124-pkx8tt3x1t7xerw380vn741jzoq3pjulpp4thr1fv4.png" alt=''/>
     </div>
     <div className='ware3'>
     <img className='im4' src="https://www.uboric.com/wp-content/uploads/2021/12/banner1-1-1.jpg"  alt="" />
     <img className='im4' src="https://www.uboric.com/wp-content/uploads/2021/12/banner2-1.jpg"  alt="" />
     </div>
 </div>
 <div className='nextim'>
     <img className='im3' src="https://www.uboric.com/wp-content/uploads/2021/02/Headphone.jpg" alt="" />
 </div>
 <div className='ware3'>
     <img className='im5' src="https://www.uboric.com/wp-content/uploads/2021/12/banner3-1.jpg"  alt="" />
     <img className='im5' src="https://www.uboric.com/wp-content/uploads/2021/12/banner4-1.jpg"  alt="" />
     </div>
     <div className='ware4'>
     <img className='im6' src="https://www.uboric.com/wp-content/uploads/2020/12/Socks-400x601.jpg"  alt="" />
     <img className='im6' src="https://www.uboric.com/wp-content/uploads/2020/12/Personal-Care-400x601.jpg"  alt="" />
     <img className='im6' src="https://www.uboric.com/wp-content/uploads/2020/12/Braclate-400x601.jpg"  alt="" />
     <img className='im6' src="https://www.uboric.com/wp-content/uploads/2020/12/Grocery-400x601.jpg"  alt="" />
     <img className='im6' src="https://www.uboric.com/wp-content/uploads/2020/12/Health-Care-400x601.jpg"  alt="" />
     </div>
     <div className='project4'>
 <div className='ware10'>  
     <img className="im8" src="https://www.uboric.com/wp-content/uploads/elementor/thumbs/spices-heading-2-e1608267173425-pkx8te2i0gnc90hxnudm37u6his8ae6wbmp1tbnqmo.png" alt=''/>
     <h1 className="tag1">SPICES</h1>
     <img className="im8" src="https://www.uboric.com/wp-content/uploads/elementor/thumbs/spices-heading-pkx8tf0c7aomkmgkics8npln2wnli3amnrcjalmcgg.png" alt=''/>
     </div>
     <div className='ware7'>
     <img className='im7' src="https://www.uboric.com/wp-content/uploads/2020/12/Spices-1-400x601.jpg"  alt="" />
     <img className='im7' src="https://www.uboric.com/wp-content/uploads/2020/12/Spices-2-400x601.jpg"  alt="" />
     <img className='im7' src="https://www.uboric.com/wp-content/uploads/2020/12/Spices-3-400x601.jpg"  alt="" />
     <img className='im7' src="https://www.uboric.com/wp-content/uploads/2020/12/Spices-5-400x601.jpg"  alt="" />
     <img className='im7' src="https://www.uboric.com/wp-content/uploads/2020/12/Spices-4-400x601.jpg"  alt="" />
     </div>
 </div>
     <div className='project4'>
 <div className='ware10'>  
     <img className="im8" src="https://www.uboric.com/wp-content/uploads/elementor/thumbs/shoes-icon-right-e1605175492472-pkxdahmpc96i32hqyh9qfkc7owqxivqr4zuwukso7k.png" alt=''/>
     <h1 className="tag1">FOOT WEAR</h1>
     <img className="im8" src="https://www.uboric.com/wp-content/uploads/elementor/thumbs/shoes-icon-left-e1605175515419-pkxdaq391ri2zk5gl2xdk07d1dl8g5oc65qa62g4nk.png" alt=''/>
     </div>
     <div className='ware11'>
     <img className='im10' src="https://www.uboric.com/wp-content/uploads/elementor/thumbs/men-fashion-pf2rgkwglk7z47uh031vpxcshl64adc389ivxapmss.jpg" alt="" />
     </div>
 </div>
 <div className='ware4'>
     <img className='im6' src="https://www.uboric.com/wp-content/uploads/2020/12/Foot-Wear-1-400x601.jpg"  alt="" />
     <img className='im6' src="https://www.uboric.com/wp-content/uploads/2020/12/Foot-Wear-3-400x601.jpg"  alt="" />
     <img className='im6' src="https://www.uboric.com/wp-content/uploads/2020/12/Foot-Wear-2-400x601.jpg"  alt="" />
     <img className='im6' src="https://www.uboric.com/wp-content/uploads/2020/12/Foot-Wear-400x601.jpg"  alt="" />
     <img className='im6' src="https://www.uboric.com/wp-content/uploads/2020/12/Foot-Wear-5-400x601.jpg"  alt="" />
     </div>
     <div className='text'>
       <div className='text110'>The Ultimate Domestic Online Shopping Experience Platform in India</div>
       <div className='text22'><p>Online shopping with Uboric is quick, convenient and trouble-free.
          You can shop for the desired product right from the comfort of your home and get them delivered straight to 
          your doorstep. Uboric offers you the chance to choose top branded products sitting in the comfort of your
           homes and just clicking on your requirements to get it delivered at your doorstep. Your search for the latest
            trending variety of unique products ends right here. A wide range of international products from global brands
             are available at your fingertips. We provide you with a world-class online shopping experience, along with
              superior service, to suit all your specific requirements. Our products are very reasonably priced and are not 
              easily available elsewhere. Our high-end technology-based systems, combined with a human approach, ensure that 
              you have an amazing and blissful online shopping experience with us. Our emphasis on customer delight drives 
              every activity we undertake to provide you an ultimate, hassle-free and pleasant shopping experience. Our 
              diverse categories of products comprise of fashion & jewellery, mobiles and tablets, home and furniture,
               electronics, health care and supplements, sports and fitness, beauty and perfumes. We offer almost every
                variety of product that your heart desires. Just Go Ahead and Explore the magical world of online shopping with Uboric! 
         24×7 Customer Care: For all your queries and concerns regarding your shopping orders.</p></div>
       <div className='text3'>Benefits of shopping on Uboric :</div>

     </div>
  </div>
}