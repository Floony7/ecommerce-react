import { Outlet, Link } from "react-router-dom";
import IceStoreLogo from "../../assets/icestore-logo.svg";
import { LogoContainer, Main, NavLinks, Navbar } from "./navigation.styles";

const Navigation = () => {
  return (
    <Main>
      <Navbar>
        <LogoContainer>
          <Link to="/">
            <img src={IceStoreLogo} width={250} />
          </Link>
        </LogoContainer>
        <NavLinks>
          <Link to="/shop">Shop</Link>
          <Link to="/sign-in">Sign In</Link>
          {/* <Link to="/sign-up">Sign Up</Link> */}
        </NavLinks>
      </Navbar>
      <Outlet />
    </Main>
  );
};

export default Navigation;
