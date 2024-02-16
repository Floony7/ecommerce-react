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
  padding: 0.5rem 2rem;
  background-color: hsl(0, 0%, 83%);
`;

Navbar.displayName = "Navbar";

export const NavLinks = styled.nav`
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
    color: var(--clr-sky-blue);

    &:hover {
      color: var(--clr-magenta);
    }

    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
`;

NavInner.displayName = "NavInner";
