import styled from 'styled-components';
import { device } from '../utils/viewports';
import { MdShoppingCart } from "react-icons/md";

export const StyledHeader = styled.header`
  border-bottom: 2px solid #158cd2;
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const StyledLogo = styled.img`
  height: 60px;
`;

export const StyledCartIcon = styled(MdShoppingCart)`
  font-size: 3rem;
  color: gray;
  cursor: pointer;
`;

export const StyledInput = styled.input`
  height: 50%;
  border-radius: 8px;
  border: 2px solid #5e5e5e;
  font-size: 1.3rem;
  padding-left: 15px;

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