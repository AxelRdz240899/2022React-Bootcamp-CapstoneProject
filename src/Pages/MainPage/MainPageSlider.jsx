import React, { useState } from "react";
import { useFeaturedBanners } from "utils/hooks/useFeaturedBanners";
import {
  BannerContainer,
  BannerContent,
  NextBanner,
  PreviousBanner,
  BannerPointContainer,
  BannerPoint,
} from "Styles/SliderStyles";

import LoadingSpinner from "Components/LoadingSpinner";

export function Slider() {
  const [index, updateIndex] = useState(0);
  const { data, isLoading } = useFeaturedBanners();

  let bannersData = [];
  let image = "";
  let bannerPoints;

  if (data && !isLoading) {
    bannersData = data.results;
    image = bannersData[index]?.data.main_image.url;
    bannerPoints = bannersData.map((element, i) => (
      <BannerPoint
        key={element.id}
        selected={index === i ? true : false}
        onClick={() => goToBanner(i)}
      />
    ));
  }

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
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <BannerContainer imgUrl={image}>
          <BannerContent>
            <PreviousBanner onClick={() => backwardIndexHandler()} />
            <NextBanner onClick={() => forwardIndexHandler()} />
            <BannerPointContainer>{bannerPoints}</BannerPointContainer>
          </BannerContent>
        </BannerContainer>
      )}
    </>
  );
}
