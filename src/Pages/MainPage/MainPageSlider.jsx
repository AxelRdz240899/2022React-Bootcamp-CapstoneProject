import React, { useEffect, useState } from "react";
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
  const [loading, setLoading] = useState(true);
  const [index, updateIndex] = useState(0);
  const [response, setResponse] = useState([]);
  const { data, loadingResponse } = useFeaturedBanners();

  let image = "";
  let bannerPoints;

  useEffect(() => {
    if (!data || loadingResponse) {
      return () => {};
    } else {
      setLoading(false);
      setResponse(data.results);
    }
  }, [data, loadingResponse]);

  image = response[index]?.data.main_image.url;
  bannerPoints = response.map((element, i) => (
    <BannerPoint
      key={element.id}
      selected={index === i ? true : false}
      onClick={() => goToBanner(i)}
    />
  ));

  function forwardIndexHandler() {
    let indexAux = index === response.length - 1 ? 0 : index + 1;
    updateIndex(indexAux);
  }

  function backwardIndexHandler() {
    let indexAux = index - 1 < 0 ? index + response.length - 1 : index - 1;
    updateIndex(indexAux);
  }

  function goToBanner(i) {
    if (i !== index) {
      updateIndex(i);
    }
  }

  return (
    <>
      {loading ? (
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
