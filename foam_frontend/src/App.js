import React, { useEffect, useState } from 'react';
import './App.css';
import Container from './containers/imagesContainer'
import Filters from './components/filters'

function App() {
  const [state, setState] = useState('')
  
  const handleFilter = (event) => {
    setState(event.target.value) 
  }

  return (
    <div className="App">
      <div className='header'>
        <h1>Reactor Run</h1>
        <Filters handleFilter={handleFilter}/>
      </div>
      <Container filterVal={state}/>
    </div>
  );
}

export default App;
