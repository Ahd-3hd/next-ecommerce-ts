import { useEffect, useState } from "react";
import styled from "styled-components";
import CaretDown from "../svg/CaretDown.svg";

export const Wrapper = styled.div`
  margin-top: 2rem;
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.lg}) {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 1fr 3fr;
  }
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
  cursor: pointer;
  :hover {
    background: ${({ theme: { colors } }) => colors.primary};
    color: #fff;
  }
`;

export const DropdownContainer = styled.div`
  padding-bottom: 0.5rem;
  border-bottom: 2px solid ${({ theme: { colors } }) => colors.grey};
  margin: 0.85rem 0;
`;
export const DropdownHeader = styled.div<{ toggle: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  > svg {
    fill: ${({ theme: { colors } }) => colors.primary};
    width: 15px;
    transition: transform 0.3s ease;
    transform: rotateZ(${({ toggle }) => (toggle ? "180deg" : "0deg")});
  }
`;
export const DropdownHeaderTitle = styled.span`
  fill: ${({ theme: { colors } }) => colors.primary};
  margin: 0;
`;

export const DropdownOptionsContainer = styled.div<{
  optionsNum: number;
  toggle: boolean;
}>`
  height: ${({ toggle, optionsNum }) =>
    toggle ? `${optionsNum * 32}px` : "0"};
  overflow: hidden;
  transition: height 0.4s ease;
`;
export const DropdownOption = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
`;
export const DropdownRadio = styled.input`
  display: none;
`;
export const DropdownLabel = styled.label`
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
export const CustomRadio = styled.div<{ checked: boolean }>`
  height: 16px;
  width: 16px;
  border-radius: 15px;
  background: ${({ theme: { colors } }) => colors.primary};
  margin-right: 0.5rem;
  position: relative;
  cursor: pointer;

  ::after {
    content: "";
    position: absolute;
    width: ${({ checked }) => (checked ? "10px" : "0")};
    height: ${({ checked }) => (checked ? "10px" : "0")};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    border-radius: 100%;
    background: ${({ theme: { colors } }) => colors.grey};
    transition: all 0.3s ease;
  }
`;

export const Dropdown = ({ title, options, setParams, checked, reset }) => {
  const [toggleOptions, setToggleOptions] = useState(false);
  const [isChecked, setIsChecked] = useState("all");
  useEffect(() => {
    setIsChecked(checked);
  }, [reset]);
  return (
    <DropdownContainer>
      <DropdownHeader
        onClick={() => setToggleOptions((prevState) => !prevState)}
        toggle={toggleOptions}
      >
        <DropdownHeaderTitle>{title}</DropdownHeaderTitle>
        <CaretDown />
      </DropdownHeader>
      <DropdownOptionsContainer
        optionsNum={options.length}
        toggle={toggleOptions}
      >
        {options.map((option) => (
          <DropdownOption key={option}>
            <DropdownRadio
              type="radio"
              id={`${option}${title}`}
              name={title}
              defaultChecked={checked === option}
              onChange={() =>
                setParams((prevState) => {
                  setIsChecked(option);
                  prevState[title] = option;
                  return prevState;
                })
              }
            />
            <DropdownLabel htmlFor={`${option}${title}`}>
              <CustomRadio checked={isChecked === option} />
              {option}
            </DropdownLabel>
          </DropdownOption>
        ))}
      </DropdownOptionsContainer>
    </DropdownContainer>
  );
};

export const ResetSearchButton = styled.button`
  width: 100%;
  background: transparent;
  border: none;
  font-weight: 600;
  color: ${({ theme: { colors } }) => colors.secondary};
  padding: 1rem 0;
  text-decoration: underline;

  margin: 1rem 0;
`;

export const ProductsContainer = styled.div`
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.lg}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const NoResults = styled.p`
  text-align: center;
  color: ${({ theme: { colors } }) => colors.primary};
`;
