import React, { useEffect, useState } from 'react';
import './App.css';
import Container from './containers/imagesContainer'

function App() {
  const [state, setState] = useState('')
  
  return (
    <div className="App">
      <Container filter={state}/>
    </div>
  );
}

export default App;
