import styled from "styled-components";
import { device } from "utils/viewports";
import { Link } from "react-router-dom";

export const CategoryCardText = styled.div`
  cursor: pointer;
  z-index: 3;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: 700;
  background-color: #57c0ff;
  padding: 8px;
  border-radius: 12px;

  ${device.mobile} {
    font-size: 1.6rem;
  }

  ${device.mobileL} {
    font-size: 1.8rem;
  }

  ${device.tablet} {
    font-size: 1.4rem;
  }

  ${device.desktopXXL} {
    font-size: 1.6rem;
  }
`;

export const CategoryStyledCard = styled.div`
  display: flex;
  border-radius: 12px;
  margin: 0.5rem;
  position: relative;

  overflow-x: hidden;
  &:hover ${CategoryCardText} {
    transition: all 0.5s ease-in-out;
    opacity: 0;
  }

  ${device.mobile} {
    width: 100%;
  }

  ${device.tablet} {
    width: 45%;
  }

  ${device.desktop} {
    width: 30%;
  }
`;

export const CategoryStyledImage = styled.img`
  cursor: pointer;
  z-index: 1;
  height: auto;
  width: 100%;

  ${device.mobile} {
    opacity: 0.8;
  }

  ${device.tablet} {
    opacity: 0.7;
  }

  &:hover {
    transition: opacity 0.5s ease-in-out;
    opacity: 1;
  }
`;
