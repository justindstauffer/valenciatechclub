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
      <Navbar id='nav' color="dark" dark expand="md" fixed="top">
        <NavbarBrand className="text-danger font-weight-bold" href="/">
          Valencia Tech Club
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto flexed" navbar>
            <NavItem>
              <NavLink className="text-danger" href="#top">
                Home
              </NavLink>
            </NavItem>
            <NavItem className='navspace'>|</NavItem>
            <NavItem>
              <NavLink className="text-danger" href="#teams">
                Teams
              </NavLink>
            </NavItem>
            <NavItem className="navspace">|</NavItem>
            <NavItem>
              <NavLink className="text-danger" href="#officers">
                Officers
              </NavLink>
            </NavItem>
            <NavItem className="navspace">|</NavItem>
            <NavItem>
              <NavLink className="text-danger" href="#advisors">
                Advisors
              </NavLink>
            </NavItem>
            <NavItem className="navspace">|</NavItem>
            <NavItem>
              <NavLink className="text-danger" href="/components/">
                Events
              </NavLink>
            </NavItem>
            <NavItem className="navspace">|</NavItem>
            <NavItem>
              <NavLink className="text-danger" href="/components/">
                Repairs
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default MainNavbar;
