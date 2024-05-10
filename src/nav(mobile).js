import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import kest1 from'./kest.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Scrollspy1 from './scrollspy';
import {Nav } from 'react-bootstrap';

function navMobile() {
    return (
    <>
       <Navbar  variant="dark" bg="dark" expand="lg">
      <Container fluid>
      <Navbar.Brand>
            <img
              src={kest1} 
              width={180}
              height={25}
              className="d-inline-block align-top ps-5"
              alt="React Bootstrap logo"
            />
            
        </Navbar.Brand> 
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <Scrollspy1/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    )
}

export default navMobile