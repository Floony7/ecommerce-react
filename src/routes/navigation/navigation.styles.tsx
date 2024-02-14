import styled from "styled-components";

export const Main = styled.main`
  width: 90vw;
  margin-inline: auto;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

LogoContainer.displayName = "LogoContainer";

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;

  a {
    font-weight: 600;
    font-size: 1.2rem;

    &:hover {
      color: mediumturquoise;
    }
  }
`;

Navbar.displayName = "Navbar";

export const NavLinks = styled.nav`
  margin-right: 2rem;
`;
