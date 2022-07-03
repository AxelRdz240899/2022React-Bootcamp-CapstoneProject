import styled from "styled-components";
import { device } from "utils/viewports";
export const Content = styled.section`
  padding-top: 130px;

  ${device.mobileL} {
    padding-top: 100px;
  }
`;
