import styled from "styled-components";
import { device } from "utils/viewports";
import { MdShoppingCart } from "react-icons/md";

export const StyledHeader = styled.header`
  box-shadow: 0 1px 4px 0 rgb(0 0 0 / 10%);
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const StyledLogo = styled.img`
  cursor: pointer;
  height: 60px;
`;

export const StyledCartIcon = styled(MdShoppingCart)`
  font-size: 2.5rem;
  color: gray;
  cursor: pointer;

  &:hover {
    transition: 0.3s color ease-in-out;
    color: #158cd2;
  }
`;

export const StyledInput = styled.input`
  height: 50%;
  border-radius: 12px;
  border: 2px solid #158cd2;
  font-size: 1.3rem;
  padding-left: 15px;

  &:focus {
    outline: 0;
    transition: border-color 0.6s ease-in-out;
    border-color: #0060b7;
  }

  ${device.mobile} {
    width: 45%;
    font-size: 0.8rem;
  }

  ${device.mobileL} {
    width: 65%;
  }

  ${device.tablet} {
    width: 55%;
    font-size: 1rem;
  }

  ${device.laptop} {
    width: 50%;
  }
`;
