import styled from "styled-components";
import { device } from "utils/viewports";

export const CarouselContainer = styled.div`
  ${device.mobile} {
    width: 100%;
    margin-bottom: 15px;
  }
  
  ${device.laptop} {
    width: 90%;
    margin-bottom: 0;
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
