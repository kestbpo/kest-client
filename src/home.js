import 'bootstrap/dist/css/bootstrap.min.css';
import Main from"./main";
import Article from "./article";
import Manage from "./management";
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
      