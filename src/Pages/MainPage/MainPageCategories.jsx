import React, { useState, useEffect } from "react";
import {
  CategoriesGridContainer,
  CategoriesContainer,
} from "Styles/CategoriesStyles";
import { StyledTitle } from "Styles/GeneralStyles";
import { CategoriesCarousel } from "./CategoriesMobileCarousel";
import { CategoryCard } from "Components/CategoryCard";
import { useWizelineGetEndpoints } from "utils/hooks/useWizelineGetEndpoints";
import LoadingSpinner from "Components/LoadingSpinner";
import { getCategoriesUrl } from "utils/constants";

export function Categories() {
  const [categories, setCategories] = useState([]);
  const { data, isLoading } = useWizelineGetEndpoints(getCategoriesUrl);

  useEffect(() => {
    if (!data || isLoading) {
      return () => {};
    }
    setCategories(data.results);
  }, [data, isLoading]);

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
  const categoriesList = categories?.map((element) => (
    <CategoryCard
      key={element.id}
      name={element.data.name}
      imageSrc={element.data.main_image.url}
      categoryId={element.id}
    />
  ));

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <CategoriesContainer>
          <StyledTitle> Categories </StyledTitle>
          {mobileVersion && <CategoriesCarousel categories={categoriesList} />}
          {!mobileVersion && (
            <CategoriesGridContainer>{categoriesList}</CategoriesGridContainer>
          )}
        </CategoriesContainer>
      )}
    </>
  );
}
