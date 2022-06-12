import React, { useState } from "react";
import {
  BannerContainer,
  BannerContent,
  NextBanner,
  PreviousBanner,
  BannerPointContainer,
  BannerPoint,
} from "Styles/SliderStyles";

const featuredBanners = require("mocks/en-us/featured-banners.json");

const bannersData = featuredBanners.results;

export function Slider() {
  const [index, updateIndex] = useState(0);

  const image = bannersData[index].data.main_image.url;

  const bannerPoints = featuredBanners.results.map((element, i) => (
    <BannerPoint
      key={element.id}
      selected={index === i ? true : false}
      onClick={() => goToBanner(i)}
    />
  ));

  function forwardIndexHandler() {
    let indexAux = index === bannersData.length - 1 ? 0 : index + 1;
    updateIndex(indexAux);
  }

  function backwardIndexHandler() {
    let indexAux = index - 1 < 0 ? index + bannersData.length - 1 : index - 1;
    updateIndex(indexAux);
  }

  function goToBanner(i) {
    if (i !== index) {
      updateIndex(i);
    }
  }

  return (
    <BannerContainer imgUrl={image}>
      <BannerContent>
        <PreviousBanner onClick={() => backwardIndexHandler()} />
        <NextBanner onClick={() => forwardIndexHandler()} />
        <BannerPointContainer>{bannerPoints}</BannerPointContainer>
      </BannerContent>
    </BannerContainer>
  );
}
