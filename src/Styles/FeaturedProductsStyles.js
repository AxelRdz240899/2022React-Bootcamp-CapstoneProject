import styled from "styled-components";
import { device } from "../utils/viewports";

export const FeaturedProductsContainer = styled.section`
  margin-top: 15px;
`;
export const GridContainer = styled.div`
  display: grid;
  column-gap: 1rem;
  row-gap: 1.5rem;

  ${device.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }

  ${device.mobileL} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${device.desktop} {
    grid-template-columns: repeat(4, 1fr);
  }
  ${device.desktopXXL} {
    grid-template-columns: repeat(6, 1fr);
  }
`;
