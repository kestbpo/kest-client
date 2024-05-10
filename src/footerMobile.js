import'./App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faFacebook,
    faXTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
  import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';


function footer1(){
return(
  <footer className='footer'>
     <Container fluid className="social-container">
       <Row  className="justify-content-md-center"> 
             <Col>
               <a href="https://www.linkedin.com/in/kest-bpo-8531522aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                 className="linkedin social">
                 <FontAwesomeIcon icon={faLinkedin} size="2x" />
               </a>
             </Col>
             <Col>
               < a href="https://www.facebook.com/KestBPO?mibextid=ZbWKwL"
                 className="facebook social">
                 <FontAwesomeIcon icon={faFacebook} size="2x" />
               </a>
             </Col>
             <Col>
                <a href="https://www.twitter.com" 
                 className="twitter social">
                 <FontAwesomeIcon icon={faXTwitter} size="2x" />
                </a>
             </Col>
             <Col >
               <a href="https://www.instagram.com"
                 className="instagram social">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
               </a>
              </Col>
              </Row>
              <hr style={{ backgroundColor:'white', width:'90%',height:'2px',border:'none'}}/>
            <Row>
            <Col>
              <ul className='  fs-5 text-white' href='https://kestbpo.com/'>
               Contact Us:
                <li  className='  fs-6 text-white' >India <p>20-2-158, Karri vari street,<br/>Gavarapalem, Anakapalli, Andhra Pradesh,India,531002</p></li>
                <li  className='  fs-6 text-white'>US<p>Dallas, Texas, United States</p></li>
                <li  className='  fs-6 text-white'>Canada<p> 200 Gateway BLVD North York M3C 1B5 Toronto,<br/>Ontario, Canada</p></li>
              </ul> 
                <p className='text-end text-white p-3' >
                 © 2024 Copyright:  All Rights Are Reseved <a className=' p-3' href='https://kestbpo.com/'>  | KestBPO </a>
               </p>
            </Col>
       </Row>
    </Container>
  </footer>
);

}
export default footer1;

  
 