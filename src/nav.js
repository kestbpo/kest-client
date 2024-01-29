import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import kest1 from'./kest.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Scrollspy1 from './scrollspy';

function nav(){

   return(
        <>
    <Navbar  expand="lg" className="bg-secondary" data-bs-theme="dark">
      <Container fluid  height={{  }}>
       <Navbar.Brand>
            <img
              id="home"
              src={kest1} 
              width={180}
              height={25}
              className="d-inline-block align-top ps-5"
              alt="React Bootstrap logo"
            />
            
        </Navbar.Brand> 
        <Navbar.Collapse id="basic-navbar-nav" className='px-10'>
          <Scrollspy1/>
        </Navbar.Collapse> 
      </Container>
    </Navbar>
  
        </>
      );
    }
    
   
    export default nav;