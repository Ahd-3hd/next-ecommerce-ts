import {
  Container,
  TopBar,
  Logo,
  DesktopMenu,
  UserButtons,
  MenuButton,
  MobileMenu,
} from "./index.style";
import MenuIcon from "../../svg/MenuIcon.svg";
import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <Container>
      <TopBar>
        <Logo>Shopper.</Logo>
        <DesktopMenu />
        <UserButtons />
        <MenuButton onClick={() => setToggleMenu((prevState) => !prevState)}>
          <MenuIcon />
        </MenuButton>
      </TopBar>
      <MobileMenu toggleMenu={toggleMenu} />
    </Container>
  );
};

export default Navbar;
