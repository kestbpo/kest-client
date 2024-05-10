import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './footer';
import Headers from './header';
import NavMobile from './nav(mobile)';
import Home from './home'
import './App.css';

function Layout() {
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
  
  export default Layout;