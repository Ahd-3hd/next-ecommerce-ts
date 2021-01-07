import {
  Container,
  TopBar,
  Logo,
  DesktopMenu,
  UserButtons,
  MenuButton,
  MobileMenu,
  BottomBar,
  BrowseCategoriesButton,
  SearchField,
  CategoriesDropDown,
  SearchButton,
  SearchForm,
  BrowseCategoriesSpan,
  DropdownOptions,
  DropdownWrapper,
} from "./index.style";
import MenuIcon from "../../svg/MenuIcon.svg";
import CategoriesIcon from "../../svg/CategoriesIcon.svg";
import SearchIcon from "../../svg/SearchIcon.svg";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <Container>
      <TopBar>
        <Link href="/" passHref>
          <Logo>Shopper.</Logo>
        </Link>
        <DesktopMenu />
        <UserButtons />
        <MenuButton onClick={() => setToggleMenu((prevState) => !prevState)}>
          <MenuIcon />
        </MenuButton>
      </TopBar>
      <MobileMenu toggleMenu={toggleMenu} />
      <BottomBar>
        <Link href="/categories" passHref>
          <BrowseCategoriesButton>
            <CategoriesIcon />
            <BrowseCategoriesSpan>Browse Categories</BrowseCategoriesSpan>
          </BrowseCategoriesButton>
        </Link>
        <SearchForm>
          <SearchField placeholder="Search for items or brands" />
          <DropdownWrapper>
            <CategoriesDropDown>
              <DropdownOptions>All Categories</DropdownOptions>
              <DropdownOptions>Shirts</DropdownOptions>
              <DropdownOptions>Dresses</DropdownOptions>
              <DropdownOptions>Shoes</DropdownOptions>
              <DropdownOptions>Pants</DropdownOptions>
            </CategoriesDropDown>
          </DropdownWrapper>
          <SearchButton>
            <SearchIcon />
          </SearchButton>
        </SearchForm>
      </BottomBar>
    </Container>
  );
};

export default Navbar;
