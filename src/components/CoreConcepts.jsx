import { CORE_CONCEPTS } from "../data.js";
import CoreConcept from './CoreConcept.jsx';
function CoreConcepts(){
    return(<section id="core-concepts">
    <h2>Core Concepts</h2>
    <ul>
      {CORE_CONCEPTS.map(function(item){return(<CoreConcept key={item.title} {...item}/>);})}
    
    
    </ul>
  </section>);
}

export default CoreConcepts;
