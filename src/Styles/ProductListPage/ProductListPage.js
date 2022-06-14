import styled from "styled-components";
import { device } from "utils/viewports";

export const StyledMainContainer = styled.section`
  display: flex;

  ${device.mobile} {
    flex-direction: column;
  }

  ${device.laptop} {
    flex-direction: row;
  }
`;

export const StyledSideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${device.laptop} {
    width: 30%;
  }
  ${device.desktopXXL} {
    width: 20%;
  }
`;

export const StyledProductsContainer = styled.div`
  padding: 25px 0;

  ${device.laptop} {
    width: 70%;
  }

  ${device.desktopXXL} {
    width: 80%;
    padding: 0px 25px 25px 25px;
  }
`;

export const StyledTitle = styled.h2`
  color: #004664;
  font-size: 2rem;
  text-align: center;
`;

export const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
`;

export const StyledProductGrid = styled.div`
  display: grid;
  column-gap: 1rem;
  row-gap: 1.5rem;

  ${device.mobile} {
    grid-template-columns: repeat(1, 1fr);
    width: 90%;
  }

  ${device.mobileL} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${device.desktop} {
    grid-template-columns: repeat(3, 1fr);
    width: 80%;
  }

  ${device.desktopXXL} {
    grid-template-columns: repeat(4, 1fr);
  }
`;
