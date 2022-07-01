import styled from "styled-components";
import { device } from "utils/viewports";

export const ProductListContainer = styled.div`
  background-color: #f2f8ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProductListGrid = styled.div`
  display: grid;
  column-gap: 1rem;
  row-gap: 1.5rem;
  justify-content: center;

  ${device.mobile} {
    grid-template-columns: repeat(1, 1fr);
    width: 90%;
    margin: 20px 0;
  }

  ${device.mobileL} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${device.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${device.desktopXXL} {
    grid-template-columns: repeat(5, 1fr);
  }
`;
