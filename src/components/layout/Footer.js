/*eslint-disable*/
import React from "react";
import { Container, Row, Nav, NavItem, NavLink } from "reactstrap";

export default function Footer(){
  return (
    <footer className="footer">
      <Container fluid>
        {/*
          <Nav>
            <NavItem>
              <NavLink href="javascript:void(0)">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="javascript:void(0)">Blog</NavLink>
            </NavItem>
          </Nav>
        */}
        <div className="copyright">
          © {new Date().getFullYear()} made with{" "}
          <i className="tim-icons icon-heart-2" /> by{" "}
          <a
            href="https://www.uplab.io"
            rel="noopener noreferrer"
            target="_blank"
          >
            UpLab Software
          </a>
        </div>
      </Container>
    </footer>
  );
}
