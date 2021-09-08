import React from "react";
import { NavbarContainer, NavbarList, NavbarListItems } from "./Navbar.styles";
import ArrowLeftIcon from "@atlaskit/icon/glyph/arrow-left";
import EditorHelpIcon from "@atlaskit/icon/glyph/editor/help";

export const Navbar = () => {
  // TODO - add links to back icon and nav list items
  // TODO - replace question mark with icon
  return (
    <NavbarContainer>
      <ArrowLeftIcon label="Back" />

      <NavbarList>
        <NavbarListItems>
          <EditorHelpIcon label="Help" />
        </NavbarListItems>
        <NavbarListItems>Help</NavbarListItems>
      </NavbarList>
    </NavbarContainer>
  );
};
