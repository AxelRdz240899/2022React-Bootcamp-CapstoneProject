import styled from "styled-components";
import { device } from "utils/viewports";

export const MainContainer = styled.div`
  background-color: #f2f8ff;
  padding: 20px 30px;
  display: flex;
  ${device.mobile} {
    flex-direction: column;
  }
  ${device.laptop} {
    flex-direction: row;
  }
`;
export const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${device.laptop} {
    width: 50%;
  }
`;