import React,{Component} from 'react';
import { Text11,Text22,Text33, Text44 } from './textMobile';
import Carousels from './casroul';
import Untitled6 from './Untitled6.png';
import Untitled7 from './Untitled7.png';
import Eac8 from './Eac8.png';
import Image from 'react-bootstrap/Image';
import Card from "react-bootstrap/Card";
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class main1 extends Component {
  render() {
      const myStyle = {
          backgroundImage:`url(${Eac8})`,
          height: "450",
          fontSize: "20px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          style:{opacity: 0}
      };
       
  return (
  <> <Container fluid id="about Us" style={myStyle} className='pt-5 pb-2'>
       <h2 className="pt-5 pb-2  text-xxl-center text-white">About Us</h2>
        <Text22/>
       <h2 className="pt-5 text-xxl-center text-white" >Our Expertise</h2>
        <Text11/>         
     </Container>
     
       <Container fluid className='bg-dark'>
       <div><Carousels/></div>
       </Container>
       <div className=" pt-3 pb-3 ps-2 pe-2">
          <Card className=" bg-white" style={{height:450}}>
          <Image src={Untitled6} width={100} height={100}/>
              <h2 >Technology Infrastructure</h2>
              <div><Text33/></div>
          </Card>
         </div> 
        <div className='pt-3 pb-3 ps-2 pe-2'>
          <Card  className="bg-white " style={{height:450}}>
          <Image src={Untitled7} width={100} height={100} />
              <h2 >Commitment to Excellence</h2>
              <div><Text44/></div>
          </Card>
       </div>
  </>
  );
}}

export default main1;