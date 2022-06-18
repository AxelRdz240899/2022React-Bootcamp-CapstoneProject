import styled from "styled-components";
import { device } from "utils/viewports";

export const StyledMainContainer = styled.section`
  display: flex;

  ${device.mobile} {
    flex-direction: column;
  }

  ${device.laptop} {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const StyledSideBarContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: "#e5e5e5";
  ${device.laptop} {
    width: 25%;
    border-right: 2px solid #0f5e9c;
  }
`;

export const StyledProductsContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${device.laptop} {
    width: 75%;
    padding: 0px 25px 0px 25px;
  }

  ${device.desktop} {
    width: 75%;
  }

  ${device.desktopXXL} {
    width: 80%;
  }
`;

export const StyledTitle = styled.h2`
  color: #03396c;
  font-size: 2rem;
  text-align: center;
  margin: 0.5rem 0;
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
    width: 80%;
    margin: 20px 0;
  }

  ${device.mobileL} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${device.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${device.desktopXXL} {
    grid-template-columns: repeat(4, 1fr);
  }
`;
