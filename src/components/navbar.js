import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const MainNavbar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md" fixed="top">
        <NavbarBrand className="text-danger font-weight-bold" href="/">
          Valencia Tech Club
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Events</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Officers</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Advisors</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Repairs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Teams</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default MainNavbar;
