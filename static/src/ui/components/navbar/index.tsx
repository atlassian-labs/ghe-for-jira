import React from "react";
import { NavbarContainer, NavbarList, NavbarListItems } from './Navbar.styles';

export const Navbar = () => {
  const tempBackIcon = "<";

  // TODO - add links to back icon and nav list items
  // TODO - replace back icon with correct image
  // TODO - replace question mark with icon
  return (
    <NavbarContainer>
      <span>{tempBackIcon}</span>

      <NavbarList>
        <NavbarListItems>?</NavbarListItems>
        <NavbarListItems>Help</NavbarListItems>
      </NavbarList>
    </NavbarContainer>
  );
};
