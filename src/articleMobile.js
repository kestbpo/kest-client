import Image from "react-bootstrap/esm/Image";
import bac2 from './bac2.png';
function article (){
return(
        <div   id="service"  className="bg-white pt-5">
          <div className="bg-white ps-2 pe-2 ">
         <h2>Our Services</h2> 
         <p className=" mx-5">"Kest BPO services decrease the cost of insurance back-end service and increase the efficiency of work.</p>.
         <p className=" mx-5">We provide services for US, Canada Insurance companies, Agencies, and Brokerages. Kest BPO will always hire Professional executives to work in all US and Canada states time zones for 24/5 and complete the assigned work in a specified turnaround time.</p>
         <p className=" mx-5">Our specially qualified team will be trained for Process implementation & quality assurance. We have 7 years of US, Canada Insurance Process implementation experience with 100% accuracy. Within 12 hours, we will deliver timely services, including Rush services like Certificates, Accords, and Policy Transactions."</p>
         </div>
         <div>
           <ul>
             <li><h5>New Bussiness</h5></li>
             <li><h5>Policy Servicing</h5></li> 
             <li><h5>Renewals</h5></li>
             <li><h5>Accounting</h5></li> 
             <li><h5>Claims</h5></li>
             <li><h5>Customer Servicing</h5></li>
           </ul>
         </div>
         <Image src={bac2}width={'100%'} height={100}/>
        </div>
        
       
        

)};
 
export default article;

