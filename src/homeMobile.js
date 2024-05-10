import 'bootstrap/dist/css/bootstrap.min.css';
import Main from"./mainMobile";
import Article from "./articleMobile";
import Manage from "./managementMobile";
import MyForm from "./form"

    function App() {
        return (
          <div>
            
            <section>
            <div><Main/></div>
            <div><Article/> </div>
           </section>
           <article id="section3">
             <Manage/>
           </article> 
           <div><MyForm/></div>
         </div>
         
        );
      }
      
      export default App;
      