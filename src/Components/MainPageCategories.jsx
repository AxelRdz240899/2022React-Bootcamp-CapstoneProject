import React, { useState, useEffect } from "react";
import {
  CategoriesGridContainer,
  CategoriesContainer,
} from "../Styles/CategoriesStyles";
import { SectionTitle } from "../Styles/GeneralStyles";
import { CategoriesCarousel } from "./CategoriesMobileCarousel";
import { CategoryCard } from "./CategoryCard";

export function Categories({ categories }) {
  const [mobileVersion, setMobileVersion] = useState(false);

  const handleResize = () => {
    checkMobileVersionHandler();
  };

  const checkMobileVersionHandler = () => {
    if (window.innerWidth < 768) {
      setMobileVersion(true);
    } else {
      setMobileVersion(false);
    }
  };

  useEffect(() => {
    checkMobileVersionHandler();
    window.addEventListener("resize", handleResize);
  });

  // Lista de categorias
  const categoriesList = categories.map((element) => (
    <CategoryCard
      key={element.id}
      name={element.data.name}
      imageSrc={element.data.main_image.url}
    />
  ));

  return (
    <CategoriesContainer>
      <SectionTitle> Categories </SectionTitle>
      {mobileVersion && <CategoriesCarousel categories={categoriesList} />}
      {!mobileVersion && (
        <CategoriesGridContainer>{categoriesList}</CategoriesGridContainer>
      )}
    </CategoriesContainer>
  );
}
