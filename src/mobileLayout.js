import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './footerMobile';
import Headers from './header';
import NavMobile from './nav(mobile)';
import Home from './homeMobile'
import './App.css';

function Layout1() {
    return (
    <>
      <div className='App'>
         <header >
           
         </header>
         <nav id="home">
           <NavMobile/>
         </nav>
         <Home/>
         <Footer/>
      </div>
      <div> <Headers/></div> 
     </>
    );
  }
  
  export default Layout1;