import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './footer';
import Headers from './header';
import Nav from './nav';
import Home from './home'
import './App.css';
function App() {
    return (
      
      <div className="App">
         <header className="App-header">
           <div> <Headers/></div> 
         </header>
         <nav>
           <Nav/>
         </nav>
         <Home/>
         <footer className="footer">
           <Footer/>
         </footer>
      </div>
     
    );
  }
  
  export default App;