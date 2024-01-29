import Carousel from 'react-bootstrap/Carousel';
import serv1 from './serv1.png';
import serv2 from './serv2.png';
import serv3 from './serv3.png';
import serv4 from './serv4.png';
import serv5 from './serv5.png';
import serv6 from './serv6.png';
import Image from 'react-bootstrap/esm/Image';




function Dark() {
  return (
    <Carousel className="bg-black pt-5" style={{height:'12rem'}}>
      <Carousel.Item className=" pt-4">
      <Image src={serv2} width={300}  />
        <Carousel.Caption>
          <h3 className=" pb-2">services we offer</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className=" pt-4">
      <Image src={serv5} width={300}   />
        <Carousel.Caption>
          <h3 className=" pb-2">services we offer</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className=" pt-4">
      <Image src={serv3} width={300}   />
         <Carousel.Caption>
          <h3 className=" pb-2">services we offer</h3>
        </Carousel.Caption>
      </Carousel.Item>
    <Carousel.Item className=" pt-4" >
    <Image src={serv4} width={300}   />
    <Carousel.Caption>
      <h3 className=" pb-2">services we offer</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className=" pt-4">
  <Image src={serv6} width={300}   />
    <Carousel.Caption>
      <h3 className=" pb-2">services we offer</h3>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item className=" pt-4">
  <Image src={serv1} width={300}   />
    <Carousel.Caption>
      <h3 className=" pb-2">services we offer</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  );
}

export default Dark;
   