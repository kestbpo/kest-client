import React, { useState } from 'react';
import Eac1 from './eac1.png';
import bac1 from './bac1.png';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Card from 'react-bootstrap/Card';
import  Button  from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import axios from 'axios';

const MyForm = () => {
  // Define state variables for form fields
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName:"",
    Email: "",
    Phone: "",
    Address:"",
  });
  const [show, setShow] = useState(false);
 
  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  // Handle form submission
  const [result, setResult] = useState(null);

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post('https://kest-server.onrender.com/send', { ...formData })
      .then(response => {
        setResult(response.data); 
        setFormData({
          FirstName: "",
          LastName:"",
          Email: "",
          Phone: "",
          Address:""
        });
      })
      .catch(() => {
        setResult({
          success: false,
          message: 'Something went wrong. Try again later'
        });
      });
  };

  

  return (
  <div id="contact" className='bg-light' >
     <Image src={bac1}width={'100%'} height={100}/>
     
      <Row className='bg-white pb-5 ps-2'>
      <Col >
        <Image src={Eac1} width={'100%'} height={450} />
      </Col>
      <Col className='bg-white pe-4 '>
        <Card  className='pt-2 pb-2'>
    <form onSubmit={handleSubmit}>
      <label className='pt-3 pe-2'>
         FirstName:
        <input
          type="text"
          name="FirstName"
          value={formData.Name}
          onChange={handleChange}
        />
      </label>
      <label className='pt-3'>
         LastName:
        <input
          type="text"
          name="LastName"
          value={formData.Name}
          onChange={handleChange}
        />
      </label>
      <br />

      <label className='pt-3'>
        Phone:
        <input
          type="text"
          name="Phone"
          value={formData.Phone}
          onChange={handleChange}
        />
      </label>
      <br />

      <label className='pt-3 '>
        Email:
        <input
          type="email"
          name="Email"
          value={formData.Email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label className='pt-3 pb-3'>
        Address(City & state): 
        <input
          type="text"
          name="Address"
          value={formData.Address}
          onChange={handleChange}
        />
      </label>

      <br />
      <Button variant='primary' type="submit" onClick={() => setShow(true)}>Submit</Button>
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            
            <strong className="me-auto">Kestbpo</strong>
          </Toast.Header>
          <Toast.Body >Thank you for contacting us, We will get back to you shortly{result && (
        <p className={`${result.success ? 'success' : 'error'}`}>
          {result.message}
        </p>
            
      )}</Toast.Body>
        </Toast>
      </Col>
    </form>
    </Card>
    </Col>
    </Row>
    </div>
  );
};

export default MyForm;
