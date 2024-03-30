import styled from "styled-components";

export const Main = styled.main`
  width: 90vw;
  margin-inline: auto;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

LogoContainer.displayName = "LogoContainer";

export const Navbar = styled.div`
  padding: 0.5rem 2rem;
  background-color: var(--clr-purple);
`;

Navbar.displayName = "Navbar";

export const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-right: 2rem;
`;

export const NavInner = styled.section`
  width: 90vw;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    font-weight: 600;
    font-size: 1.2rem;
    color: white;

    &:hover {
      opacity: 0.8;
    }

    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
`;

NavInner.displayName = "NavInner";
