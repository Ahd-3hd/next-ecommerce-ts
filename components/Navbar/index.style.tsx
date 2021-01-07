import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import UserIcon from "../../svg/UserIcon.svg";
import FavoriteIcon from "../../svg/FavoriteIcon.svg";
import CartIcon from "../../svg/CartIcon.svg";

export const Container = styled.nav``;
export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Logo = styled.p`
  flex: 1;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
  color: ${({ theme: { colors } }) => colors.primary};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xl};
  text-shadow: 0px 0px 1px ${({ theme: { colors } }) => colors.primary};
  text-align: center;
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

export const MobileMenu = ({ toggleMenu }) => {
  const [activeLink, setActiveLink] = useState("/");
  const [links] = useState([
    { href: "/", text: "Home" },
    { href: "/shop", text: "Shop" },
    { href: "/blog", text: "Blog" },
    { href: "/faq", text: "F.A.Q" },
    { href: "/contact", text: "Contact" },
  ]);
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
  const [links] = useState([
    { href: "/", text: "Home" },
    { href: "/shop", text: "Shop" },
    { href: "/blog", text: "Blog" },
    { href: "/faq", text: "F.A.Q" },
    { href: "/contact", text: "Contact" },
  ]);
  const [activeLink, setActiveLink] = useState("/");
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
