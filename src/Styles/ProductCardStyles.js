import styled from 'styled-components';
import { device } from '../utils/viewports';

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

export const StyledProductImage = styled.img`
  height: auto;
  ${device.mobile} {
    width: 90%;
  }

  ${device.tablet} {
    width: 80%;
  }

  ${device.laptop} {
    width: 60%;
  }

  ${device.desktop} {
    width: 55%;
  }
`;