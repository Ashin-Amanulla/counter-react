import React from 'react'
import Counter from './Components/Counter';
import { Container } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">

      <Counter/>

      </Container>

      
    </div>
  );
}

export default App;
