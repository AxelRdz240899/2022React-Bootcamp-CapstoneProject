import React from "react";
import PropTypes from "prop-types";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  CarouselContainer,
  ProductGalleryImage,
} from "Styles/ProductPage/ProductGallery";
import { BannerPoint } from "Styles/SliderStyles";

export default function ProductGallery({ product }) {
  const productGalleryContent = product?.data?.images?.map((element) => {
    return (
      <div key={element.image.url}>
        <ProductGalleryImage src={element.image.url} alt={element.image.url} />
      </div>
    );
  });
  return (
    <CarouselContainer>
      <Carousel
        styles={styles}
        dynamicHeight={true}
        autoPlay
        swipable={true}
        emulateTouch={true}
        showArrows={true}
        showThumbs={false}
        renderIndicator={(clickHandler, isSelected, index, label) => {
          return (
            <BannerPoint
              key={index}
              selected={isSelected}
              onClick={clickHandler}
            />
          );
        }}
      >
        {productGalleryContent}
      </Carousel>
    </CarouselContainer>
  );
}

ProductGallery.propTypes = {
  product: PropTypes.object.isRequired,
};
