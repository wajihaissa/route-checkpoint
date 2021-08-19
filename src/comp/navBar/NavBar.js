import React from "react";
import { Navbar } from "react-bootstrap";
import { Container, Nav, Form } from "react-bootstrap";
import { Rating } from 'react-simple-star-rating'


const NavBar = ({setSearch,setSelecterating,selecterating}) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">checkpoint</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">movies</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Rating onClick={(x)=>setSelecterating(x)} ratingValue={selecterating}/>
          <Form.Control
            type="text"
            placeholder="search movie"
            style={{ width: "600px" }}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
