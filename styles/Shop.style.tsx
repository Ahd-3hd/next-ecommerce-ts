import { useState } from "react";
import styled from "styled-components";
import { DropdownOptions } from "../components/Navbar/index.style";
import CaretDown from "../svg/CaretDown.svg";

export const Wrapper = styled.div`
  margin-top: 2rem;
`;
export const FilterSection = styled.div`
  padding: 1rem 0;
`;
export const ProductsSection = styled.div``;

export const FilterButton = styled.button`
  width: 100%;
  height: 40px;
  background: transparent;
  border: 2px solid ${({ theme: { colors } }) => colors.primary};
  color: ${({ theme: { colors } }) => colors.primary};
  font-weight: 600;
  font-size: 1.1rem;
  transition: background 0.3s ease;
  :hover {
    background: ${({ theme: { colors } }) => colors.primary};
    color: #fff;
  }
`;
export const DropDownContainer = styled.div``;
export const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.5rem 0;
  border-bottom: 2px solid ${({ theme: { colors } }) => colors.grey};
  margin: 1rem 0;
  cursor: pointer;
`;
export const Label = styled.span`
  color: ${({ theme: { colors } }) => colors.primary};
`;
export const DropdownCaret = styled.div<{ toggle: boolean }>`
  > svg {
    fill: ${({ theme: { colors } }) => colors.primary};
    width: 15px;
    transition: transform 0.3s ease;
    transform: rotateZ(${({ toggle }) => (toggle ? "180deg" : "0deg")});
  }
`;

export const DropDownOptionsContainer = styled.div<{
  toggle: boolean;
  height: number;
}>`
  height: ${({ toggle, height }) => (toggle ? height : 0)}px;
  overflow: hidden;
  transition: height 0.3s ease;
`;
export const DropDownOption = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
`;
export const OptionLabel = styled.label`
  font-size: 0.85rem;
  color: ${({ theme: { colors } }) => colors.primary};
`;
export const OptionInput = styled.input`
  display: none;
`;
export const OptionInputReplacement = styled.div`
  width: 20px;
  height: 20px;
  background: ${({ theme: { colors } }) => colors.primary};
  margin-right: 1rem;
  border-radius: 20px;
  position: relative;
`;

export const Dropdown = ({ title, options }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <DropDownContainer>
      <LabelContainer onClick={() => setToggle((prevState) => !prevState)}>
        <Label>{title}</Label>
        <DropdownCaret toggle={toggle}>
          <CaretDown />
        </DropdownCaret>
      </LabelContainer>
      <DropDownOptionsContainer toggle={toggle} height={options.length * 40}>
        {options.map((opt) => (
          <DropDownOption key={opt}>
            <OptionInputReplacement id={opt} />
            <OptionInput id={opt} type="radio"></OptionInput>
            <OptionLabel htmlFor={opt}>{opt}</OptionLabel>
          </DropDownOption>
        ))}
      </DropDownOptionsContainer>
    </DropDownContainer>
  );
};
