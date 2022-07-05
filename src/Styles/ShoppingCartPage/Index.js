import styled from "styled-components";
import { device } from "utils/viewports";

export const CartSectionContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  background-color: #f2f8ff;
`;

export const CartTableContainer = styled.div`
  width: 95%;

  ${device.laptop} {
    width: 80%;
  }
  ${device.desktop} {
    width: 60%;
  }
`;
