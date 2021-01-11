import styled from "styled-components";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import UserIcon from "../../svg/UserIcon.svg";
import FavoriteIcon from "../../svg/FavoriteIcon.svg";
import CartIcon from "../../svg/CartIcon.svg";

export const Container = styled.nav``;
export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const BottomBar = styled.div`
  display: flex;
  margin-top: 0.7rem;
`;
export const Logo = styled.a`
  flex: 1;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
  color: ${({ theme: { colors } }) => colors.primary};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xl};
  text-shadow: 0px 0px 1px ${({ theme: { colors } }) => colors.primary};
  margin: 0.7rem 0;
`;
export const DesktopMenuList = styled.ul`
  flex: 4;
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: none;
  justify-content: space-evenly;
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    display: flex;
  }
`;
export const MenuItem = styled.li`
  margin: 0.8rem 0;
`;

export const MenuItemLink = styled.a<{ active: boolean }>`
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
  text-shadow: 0px 0px 1px ${({ theme: { colors } }) => colors.grey};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.md};
  color: ${({ theme: { colors }, active }) =>
    active ? colors.secondary : colors.primary};
  padding-bottom: 0.2rem;
  border-bottom: 2px solid
    ${({ theme: { colors }, active }) => (active ? colors.secondary : "none")};
  transition: color 0.3s ease;
  :hover {
    color: ${({ theme: { colors } }) => colors.secondary};
  }
`;

export const Buttons = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const IconButton = styled.a`
  > svg {
    width: 20px;
    height: 20px;
    fill: ${({ theme: { colors } }) => colors.primary};
    transition: fill 0.3s ease;
  }
  :hover {
    svg {
      fill: ${({ theme: { colors } }) => colors.secondary};
    }
  }
`;

export const MenuButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  flex: 0.2;
  outline: none;
  cursor: pointer;
  > svg {
    fill: ${({ theme: { colors } }) => colors.primary};
    width: 20px;
  }
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    display: none;
  }
`;

export const MobileMenuList = styled.ul<{ toggleMenu: boolean }>`
  list-style-type: none;
  padding: 0;
  margin: 0;
  height: ${({ toggleMenu }) => (toggleMenu ? "50px" : "0")};
  overflow: hidden;
  transition: height 0.5s ease;
  display: flex;
  justify-content: space-evenly;
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    display: none;
  }
`;

export const BrowseCategoriesButton = styled.a`
  flex: 1;
  background: ${({ theme: { colors } }) => colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  > svg {
    fill: #ffffff;
    width: 16px;
  }
`;
export const BrowseCategoriesSpan = styled.span`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.md};
  color: #ffffff;
  font-weight: 500;
  display: none;
  margin-left: 1rem;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    display: inline;
  }
`;
export const SearchForm = styled.form`
  flex: 3;
  display: flex;
`;
export const SearchField = styled.input`
  flex: 4;
  border: 1px solid ${({ theme: { colors } }) => `${colors.primary}11`};
  padding-left: 1rem;
  outline: none;
  ::placeholder {
    font-weight: 500;
    color: ${({ theme: { colors } }) => `${colors.primary}33`};
    font-family: inherit;
  }
  color: ${({ theme: { colors } }) => colors.primary};
  font-weight: 600;
`;
export const DropdownWrapper = styled.div`
  position: relative;
  flex: 2;
  border: 1px solid ${({ theme: { colors } }) => `${colors.primary}11`};
  background: #ffffff;
  display: none;
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    display: inline;
  }
  ::after {
    content: ">";
    position: absolute;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.2rem;
    pointer-events: none;
  }
`;
export const CategoriesDropDown = styled.select`
  height: 100%;
  width: 100%;
  background: #ffffff;
  border: none;
  color: ${({ theme: { colors } }) => colors.primary};
  font-weight: 700;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: "";
  padding: 0 1rem;
`;
export const DropdownOptions = styled.option`
  color: ${({ theme: { colors } }) => colors.primary};
  font-weight: 700;
`;
export const SearchButton = styled.button`
  flex: 2;
  background: none;
  border: 1px solid ${({ theme: { colors } }) => `${colors.primary}11`};
  cursor: pointer;
  transition: background-color 0.4s ease;
  > svg {
    width: 20px;
    transition: fill 0.4s ease;
    fill: ${({ theme: { colors } }) => colors.primary};
  }
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    flex: 1;
  }
  :hover {
    background: ${({ theme: { colors } }) => colors.primary};
    > svg {
      fill: #ffffff;
    }
  }
`;

export const MobileMenu = ({ toggleMenu }) => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState("/");
  const [links] = useState([
    { href: "/", text: "Home" },
    { href: "/shop", text: "Shop" },
    { href: "/blog", text: "Blog" },
    { href: "/faq", text: "F.A.Q" },
  ]);
  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router]);
  return (
    <MobileMenuList toggleMenu={toggleMenu}>
      {links.map((item) => (
        <MenuItem key={item.text} onClick={() => setActiveLink(item.href)}>
          <Link href={item.href} passHref>
            <MenuItemLink active={item.href === activeLink}>
              {item.text}
            </MenuItemLink>
          </Link>
        </MenuItem>
      ))}
    </MobileMenuList>
  );
};

export const DesktopMenu = () => {
  const router = useRouter();
  const [links] = useState([
    { href: "/", text: "Home" },
    { href: "/shop", text: "Shop" },
    { href: "/blog", text: "Blog" },
    { href: "/faq", text: "F.A.Q" },
  ]);
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router]);
  return (
    <DesktopMenuList>
      {links.map((item) => (
        <MenuItem key={item.text} onClick={() => setActiveLink(item.href)}>
          <Link href={item.href} passHref>
            <MenuItemLink active={item.href === activeLink}>
              {item.text}
            </MenuItemLink>
          </Link>
        </MenuItem>
      ))}
    </DesktopMenuList>
  );
};

export const UserButtons = () => {
  const [links] = useState([
    { href: "/profile", icon: UserIcon },
    { href: "/favorites", icon: FavoriteIcon },
    { href: "/cart", icon: CartIcon },
  ]);
  return (
    <Buttons>
      {links.map((item) => (
        <Link href={item.href} passHref key={item.href}>
          <IconButton>
            <item.icon />
          </IconButton>
        </Link>
      ))}
    </Buttons>
  );
};
