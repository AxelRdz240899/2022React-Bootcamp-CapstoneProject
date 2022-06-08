import React, { useState, useEffect } from "react";

export function CategoriesCarousel({ categories }) {
  const [index, updateIndex] = useState(0);

  // useEffect(() => {
  //   setTimeout(() => {
  //     updateIndex(index === categories.length - 1 ? 0 : index + 1);
  //   }, 4000);
  // }, [index, categories.length]);
  return <>{categories[index]}</>;
}
