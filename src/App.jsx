import Header from './components/Header';
import CoreConcept from './components/CoreConcept';
import { CORE_CONCEPTS, EXAMPLES } from './data';
import TabButton from './components/TabButton';
import { useState } from 'react';

function App() {
  
  const [selectedTopic,setSelectedTopic] = useState('components')
  
  function handleSelect(selectedButton){
    setSelectedTopic (selectedButton)  
    console.log(selectedTopic)
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map(function(item){return(<CoreConcept key={item.title} {...item}/>);})}
          
          
          </ul>
        </section>
        <section id = "examples">
          <h2>Example</h2>
           <menu>
            <TabButton isSelected={selectedTopic==='components'} onSelect={()=>handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic==='jsx'} onSelect={()=>handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic==='props'} onSelect={()=>handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic==='state'} onSelect={()=>handleSelect('state')}>State</TabButton>
           </menu> 
          <div id="tab-content">
            <h3>
            {EXAMPLES[selectedTopic].title}
            </h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre><code>
              {EXAMPLES[selectedTopic].code}</code></pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
