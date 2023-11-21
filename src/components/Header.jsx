import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Row, Col } from "react-bootstrap";

function Header() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

  return (
    <Row className="align-items-center p-5">
      <Col xs={12} md={3} className="d-flex justify-content-start">
        <img
          src="src/assets/img/pokemon_logo.svg"
          alt="pokemon logo"
          style={{ width: "100%" }}
        />
      </Col>
      <Col xs={12} md={9}>
        <Navbar expand="md" className="menu">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink className={setActiveClass} to="/home">
                Home
              </NavLink>
              <NavLink className={setActiveClass} to="/pokemon">
                Pokemon
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Col>
    </Row>
  );
}

export default Header;
