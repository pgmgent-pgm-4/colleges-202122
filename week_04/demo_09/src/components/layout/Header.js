import Navigation from "./Navigation";
import { NavLink as RRNavLink } from 'react-router-dom';
import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavbarText, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

const Header = () => {
  return (
    <header className="header">
      <Navbar
        color="light"
        expand="md"
        full
        light
      >
        <NavbarBrand href="/">
          <NavLink tag={RRNavLink} to="/">
            PGM Platform
          </NavLink>
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck(){}} />
        <Collapse navbar>
          <Navigation/>
        </Collapse>
      </Navbar>
    </header>
  )
};

export default Header;