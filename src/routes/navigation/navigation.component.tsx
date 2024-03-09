import { Outlet, Link } from "react-router-dom";
import IceStoreLogo2 from "../../assets/icestore-logo2.svg";
import Banner from "../../assets/icestoreuk.png";
import {
  LogoContainer,
  Main,
  NavInner,
  NavLinks,
  Navbar,
} from "./navigation.styles";

const Navigation = () => {
  return (
    <div>
      <Navbar>
        <NavInner>
          <LogoContainer>
            <Link to="/">
              <img src={IceStoreLogo2} height={60} />
            </Link>
            <Link to="/">
              <img src={Banner} height={60} />
            </Link>
          </LogoContainer>
          <NavLinks>
            <Link to="/shop">Shop</Link>
            <Link to="/auth">Sign In</Link>
            {/* <Link to="/sign-up">Sign Up</Link> */}
          </NavLinks>
        </NavInner>
      </Navbar>
      <Main>
        <Outlet />
      </Main>
    </div>
  );
};

export default Navigation;
