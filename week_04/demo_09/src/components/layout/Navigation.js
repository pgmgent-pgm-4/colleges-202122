import { NavLink as  RRNavLink} from "react-router-dom";

import {Nav, NavLink, NavItem} from 'reactstrap';

const Navigation = () => {
  return (
    <Nav
        className="me-auto"
        navbar
      >
      <NavItem>
        <NavLink tag={RRNavLink} to="/posts">
          Posts
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={RRNavLink} to="/about">
          About
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={RRNavLink} to="/contact">
          Contact
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={RRNavLink} to="/3d">
          3D
        </NavLink>
      </NavItem>
    </Nav>
  )
};

export default Navigation;