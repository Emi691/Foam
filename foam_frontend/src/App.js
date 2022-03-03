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
      <Filters handleFilter={handleFilter}/>
      <Container filterVal={state}/>
    </div>
  );
}

export default App;
