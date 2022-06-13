import styled from "styled-components";
import { device } from "utils/viewports";

export const StyledMainContainer = styled.section`
  display: flex;
`;

export const StyledSideBarContainer = styled.div`
  border: 1px solid blue;

  display: flex;
  flex-direction: column;
  align-items: center;
  ${device.desktop} {
    width: 20%;
  }
`;

export const StyledProductsContainer = styled.div`
  border: 1px solid red;
  ${device.desktop} {
    width: 80%;
  }
`;
