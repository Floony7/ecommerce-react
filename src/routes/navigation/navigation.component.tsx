import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import IceStoreLogo2 from "../../assets/icestore-logo2.svg";
import Banner from "../../assets/icestoreuk.png";
import {
  LogoContainer,
  Main,
  NavInner,
  NavLinks,
  Navbar,
} from "./navigation.styles";
import { UserContext } from "../../contexts/user.context";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  console.log(currentUser);

  const handleSignOut = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

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
            {currentUser ? (
              <span className="nav-link" onClick={handleSignOut}>
                Sign Out
              </span>
            ) : (
              <Link to="/auth">Sign In</Link>
            )}

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
