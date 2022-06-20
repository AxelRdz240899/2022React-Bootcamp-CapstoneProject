import React, { useEffect, useState } from "react";
import CategorySidebarElement from "./CategorySidebarElement";
import { StyledCategoryListContainer } from "Styles/ProductListPage/SideBar";
import { StyledTitle } from "Styles/ProductListPage/ProductListPage";
import { useWizelineGetEndpoints } from "utils/hooks/useWizelineGetEndpoints";
import { getCategoriesUrl } from "utils/constants";

export default function SideBar({ categoryClick }) {
  const [categories, setCategories] = useState([]);
  let { data, isLoading } = useWizelineGetEndpoints(getCategoriesUrl);

  useEffect(() => {
    if (!data && isLoading) {
      return () => {};
    }

    setCategories(data.results);
  }, [data, isLoading]);
  function categoryClickHandler(categoryId) {
    categoryClick(categoryId);
  }

  const categoriesList = categories?.map((element) => {
    return (
      <CategorySidebarElement
        key={element.id}
        onClickHandler={categoryClickHandler}
        categoryId={element.id}
        categoryName={element.data.name}
      />
    );
  });
  return (
    <>
      <StyledTitle> Categories </StyledTitle>
      <StyledCategoryListContainer>
        {categoriesList}
      </StyledCategoryListContainer>
    </>
  );
}
