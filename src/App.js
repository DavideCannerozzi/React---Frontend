import './App.css';
import datas from './data/datas.json'
import { useState } from 'react'

const App = () => {

  const[isOpen,setIsOpen] = useState(false)

  return (
      <div className="accordion">
        <div className="header" onClick={() => setIsOpen(!isOpen)} >
          <h3>Header</h3>
          <p>{ isOpen ? ' + ' : ' - ' }</p>
        </div>
        { datas.map( data => 
             <div className="content">
             { isOpen && <p>{ data.content }</p>}
           </div>
        )}
      </div>
  );
}

export default App;
