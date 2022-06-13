import styled from "styled-components";
import { device } from "utils/viewports";

export const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 0;
`;
export const FeaturedProductsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;

  ${device.mobile} {
    width: 90%;
  }
  ${device.tablet} {
    width: 80%;
  }
  ${device.desktop} {
    width: 90%;
  }
`;

export const CategoriesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;

  ${device.mobile} {
    width: 80%;
  }
`;
