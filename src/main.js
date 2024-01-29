import { Text1,Text2,Text3, Text4 } from './text';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Carousels from './casroul';
import Eac9 from './Eac9.png';
import Untitled6 from './Untitled6.png';
import Untitled7 from './Untitled7.png';
import Eac8 from './Eac8.png';
import Image from 'react-bootstrap/Image';
import Card from "react-bootstrap/Card";
function main() {
  return (
  <> 
      <Row className='bg-white pt-3'>
        <Col xxl={6} id="about Us"  className="  bg-white  "   style={{height:450 ,width:750}}> 
              
                <h2 className="pt-5 pb-2  text-xxl-center">About Us</h2>
               <Text1/>
               
        </Col>
        <Col xxl={6}>
        <Image src={Eac8} width={'100%'} height={450} />
        </Col>
         <Col  xxl={6}> <Image src={Eac9} width={'100%'} height={450} /></Col>
         <Col xxl={6} className='bg-white pt-5'style={{height:450 ,width:750} } >
              <h2 className="pt-5" >Our Expertise</h2>
                 <div> <Text2/></div>
               
          </Col>    
       </Row>
       
       <section className='bg-dark'>
       <div><Carousels/></div>
       </section>
       <Row className="row1 pt-3 pb-3 ps-2 pe-2">
         <Col >
          <Card className=" bg-white" style={{height:450}}>
          <Image src={Untitled6} width={100} height={100} />
              <h2 >Technology Infrastructure</h2>
              <div><Text3/></div>
          </Card>
         
         </Col> 
        <Col >
          <Card  className="bg-white " style={{height:450}}>
          <Image src={Untitled7} width={100} height={100} />
              <h2 >Commitment to Excellence</h2>
              <div><Text4/></div>
          </Card>
        </Col>
      </Row>
  </>
  );
}

export default main;