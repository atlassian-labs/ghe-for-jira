import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 2em 1em 1em;
`;

export const NavbarList = styled.ul`
  align-items: center;
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavbarListItems = styled.li`
  &:not(:last-child) {
    margin-right: 0.5em;
  }
`;
