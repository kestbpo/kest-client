import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/esm/Card";
import Col from "react-bootstrap/esm/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function manage(){
 return(
<div id="manage" className="pb-5 pt-5 pe-5 bg-black ">
   
    <Row>      
      <Col><h3 className="text-white pt-5">management Team</h3></Col>
      <Col>
       <Card> <h4 className="text-dark pt-2"> MOHAN</h4>
        <p>Operational Manager India</p>
        
       <p> <FontAwesomeIcon icon={faPhone}/> +91 8309529651</p>
      
       <p> <FontAwesomeIcon icon={faEnvelope} />  mohan@kestbpo.com </p> 
       </Card> 
      </Col>
      <Col ><Card>
        <h4 className="text-dark pt-2"> THANUJA PILLA</h4>
        <p>Operational Manager US</p>
        <p> <FontAwesomeIcon icon={faPhone}   /> +1 (214) 306-9588</p>
      
       <p > <FontAwesomeIcon icon={faEnvelope}   />  Thanuja@kestbpo.com </p>
       </Card>
      </Col>
      <Col ><Card>
        <h4 className="text-dark pt-2">KALPANA PILLA</h4>
        <p>Operational Manager Canada</p>
        <p> <FontAwesomeIcon icon={faPhone}   />+1 (437) 967-2306 </p>
      
       <p > <FontAwesomeIcon icon={faEnvelope}   />  Kalpana@kestbpo.com </p>
       </Card>
      </Col>
    </Row>
</div>

 )
};
 export default manage;