import styled from "styled-components";
import { device } from "utils/viewports";

export const CarouselContainer = styled.div`
  ${device.mobile} {
    width: 100%;
  }

  ${device.tablet} {
    width: 85%;
  }

  ${device.laptop} {
    width: 90%;
  }
`;
export const ProductGalleryImage = styled.img`
  width: auto;

  ${device.mobile} {
    max-height: 500px;
  }
  ${device.laptop} {
    max-height: 700px;
  }
`;
