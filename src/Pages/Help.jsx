import React from 'react'
import FaqSection from '../Components/Faq/FaqSection.jsx';
import '../Style/Help.css';

const Help = () => {
  return (
    <div>
    <div className='Help'>
         <h1>Need Help?</h1>
         <p>We are here to assist you with any queries or concerns you may have.</p>
         <div className='Help-Section'>
             <FaqSection/>
         </div>
         <div className='Help-Section'>
            <h2>Contact Us</h2>
         </div>
               You can reach us at:
         <ul>
            <li>Email:chandan.kumar01@indiamart.com</li>
            <li>Phone: +91 810 290 5305</li>
            </ul>
          
              </div>
      <div>
        
      </div>
        
    </div>
  )
};

export default Help ;
