import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import {
  BsFillChatSquareFill,
  BsFillPersonFill,
  BsFillTelephoneInboundFill,
} from "react-icons/bs";
import navigationStyle from "../../assets/css/nav.module.css";
import itHostLogo from "../../assets/images/it-host-logo.png";

const Navigation = () => {
  return (
    <Navbar className={navigationStyle.navBgColor} expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="text-light">
          <span>
            <img src={itHostLogo} alt="it-host-logo" />
          </span>
          <span> IT-HOST</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto me-5" style={{ marginLeft: "5rem" }}>
            <Nav.Link href="#home" className="me-5 text-light">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="me-5 text-light">
              Hosting
            </Nav.Link>
            <Nav.Link href="#link" className="me-5 text-light">
              Service
            </Nav.Link>

            <Nav.Link href="#link" className="me-5 text-light">
              Blog
            </Nav.Link>
            <Nav.Link href="#link" className="me-5 text-light">
              Contact
            </Nav.Link>
          </Nav>
          <Nav className={navigationStyle.navStyle}>
            <Nav.Link href="#home" className="text-light">
              <BsFillPersonFill />
            </Nav.Link>
            <Nav.Link href="#link" className="text-light">
              <BsFillTelephoneInboundFill />
            </Nav.Link>

            <Nav.Link href="#link" className="text-light">
              <BsFillChatSquareFill />
            </Nav.Link>
            <Nav.Link href="#link" className="text-light">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
