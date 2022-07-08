import styled from "styled-components";
import { device } from "utils/viewports";
import { Button } from "./Button";

export const StyledHeader = styled.header`
  box-shadow: 0 1px 4px 0 rgb(0 0 0 / 10%);
  height: 130px;
  align-items: center;
  justify-content: center;
  ${device.mobileL} {
    height: 100px;
    align-items: center;
    justify-content: space-evenly;
  }
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: fixed;
  background-color: white;
  top: 0;
  z-index: 9999;
`;

export const LogoContainer = styled.div`
  ${device.mobile} {
    width: 100%;
    text-align: center;
  }

  ${device.mobileL} {
    width: auto;
  }
`;

export const StyledLogo = styled.img`
  cursor: pointer;
  height: 70px;

  ${device.tablet} {
    height: 80px;
  }
`;

export const StyledInput = styled.input`
  height: 30px;
  border-radius: 12px;
  border: 2px solid #158cd2;
  font-size: 0.8rem;
  padding-left: 15px;
  width: 80%;
  &:focus {
    outline: 0;
    transition: border-color 0.6s ease-in-out;
    border-color: #0060b7;
  }

  ${device.mobileL} {
    width: 80%;
  }

  ${device.tablet} {
    height: 35px;
    font-size: 1rem;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 65%;
  margin-right: 20px;

  ${device.mobileL} {
    width: 65%;
  }

  ${device.tablet} {
    width: 55%;
  }

  ${device.laptop} {
    width: 50%;
  }
`;

export const HeaderButton = styled(Button)`
  margin-left: 15px;
  font-size: 0.8rem;
  ${device.desktop} {
    font-size: 1rem;
  }
`;
