import './App.css';
import datas from './data/datas.json'
import { useState } from 'react'

function App() {

  const[isOpen,setIsOpen] = useState(false)

  return (
      <div className="accordion">
        <div className="header" onClick={() => setIsOpen(!isOpen)} >
          <h3>Header</h3>
          <p>{ isOpen ? ' + ' : ' - ' }</p>
        </div>
        <div className="content">
          { isOpen && <p>Content Accordion</p>}
        </div>
      </div>
  );
}

export default App;
