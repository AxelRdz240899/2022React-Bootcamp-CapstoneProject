import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export function CategoriesCarousel({ categories }) {
  const [index, updateIndex] = useState(0);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      setTimeout(() => {
        updateIndex(index === categories.length - 1 ? 0 : index + 1);
      }, 4000);
    }
    return () => {
      isMounted = false;
    };
  }, [index, categories.length]);
  return <>{categories[index]}</>;
}

CategoriesCarousel.propTypes = {
  categories: PropTypes.array.isRequired,
};
