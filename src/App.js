import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function App() {


//promise.then(resolveFunction).catch(failureFunction);
  return (
   
    <Container className="container p-3">
    <Navbar expand="lg " variant="dark" bg="dark" >
    <Navbar.Brand href="#">COVID 19 TRACKER APP</Navbar.Brand>
    </Navbar>
    </Container>
   
  );
}

export default App;
