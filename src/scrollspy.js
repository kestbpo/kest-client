// ScrollSpyComponent.js
import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import './App.css';


const Scrollspy1 = () => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Determine the active section based on the scroll position
      // Adjust the logic based on your specific layout and sections
      const sections = document.querySelectorAll('.scrollspy-section');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 50; // Adjust the offset as needed
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.id);
        }
      });
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Nav  >
         <Nav.Item  className={activeSection === 'home' ? 'active' : ''}>
         <Nav.Link href="#home"><h4>Home</h4></Nav.Link>
         </Nav.Item>
         <Nav.Item className={activeSection === 'about Us' ? 'active' : ''}>
         <Nav.Link href="#about Us"><h4>About Us</h4></Nav.Link>
         </Nav.Item>
         <Nav.Item className={activeSection === 'service' ? 'active' : ''}>
         <Nav.Link href="#service"><h4>Services</h4></Nav.Link>
         </Nav.Item>
         <Nav.Item className={activeSection === 'contact' ? 'active' : ''}>
         <Nav.Link href="#contact"> <h4>Contact Us</h4></Nav.Link>
         </Nav.Item>
         <Nav.Item className={activeSection === 'manage' ? 'active' : ''}>
         <Nav.Link href="#manage"> <h4>managment</h4></Nav.Link>
         </Nav.Item>
     </Nav>
     
  </div>
  );
};


export default Scrollspy1;
