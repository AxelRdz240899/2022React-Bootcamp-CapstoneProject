import styled from "styled-components";
import { device } from "../utils/viewports";
import { MdNavigateBefore, MdNavigateNext, MdCircle } from "react-icons/md";

export const BannerContainer = styled.div`
  width: 100%;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  background-repeat: no-repeat;

  ${device.mobile} {
    height: 50vh;
  }
  ${device.tablet} {
  }

  ${device.laptop} {
    height: 60vh;
  }

  ${device.desktop} {
    background-size: contain;
    background-position: center center;
  }
`;

export const BannerContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 20px;
`;

export const BannerPointContainer = styled.div`
  background-color: white;
  border-radius: 17px;
  padding: 4px 6px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BannerPoint = styled(MdCircle)`
  cursor: pointer;
  font-size: 1.5rem;
  color: ${(props) => (props.selected ? "#57c0ff" : "#e5e5e5")};

  ${device.desktop} {
    font-size: 2rem;
  }
`;
export const PreviousBanner = styled(MdNavigateBefore)`
  cursor: pointer;
  background-color: #57c0ff;
  border-radius: 50%;
  position: absolute;
  top: 40%;
  left: 10%;
  color: white;

  ${device.mobile} {
    left: 5%;
    font-size: 3rem;
  }

  ${device.tablet} {
    font-size: 4rem;
  }

  ${device.laptop} {
    font-size: 4.5rem;
  }
`;

export const NextBanner = styled(MdNavigateNext)`
  cursor: pointer;
  background-color: #57c0ff;
  border-radius: 50%;
  position: absolute;
  top: 40%;
  right: 10%;
  color: white;

  ${device.mobile} {
    right: 5%;
    font-size: 3rem;
  }

  ${device.tablet} {
    font-size: 4rem;
  }

  ${device.laptop} {
    font-size: 4.5rem;
  }
`;
