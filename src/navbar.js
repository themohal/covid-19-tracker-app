import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {


//promise.then(resolveFunction).catch(failureFunction);
  return (
    <div className="body">
    <Container className="container ">
       
    <Navbar expand="lg " variant="dark" bg="dark" >
    <Navbar.Brand href="#">COVID 19 TRACKER APP</Navbar.Brand>
    </Navbar>
    
    <div className="header">

    </div>
    </Container>
   </div>

  );
}

export default NavBar;
