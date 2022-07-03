import React, { useState } from "react";
import Paginator from "Components/Paginator";
import {
  ProductListGrid,
  ProductListContainer,
} from "Styles/SearchPage/ProductList";
import { ProductCard } from "Components/ProductCard";

const productsPerPage = 20;

export default function ProductList({ apiResponse }) {
  const [selectedPage, setPage] = useState(1);
  const pagesNumber = Math.ceil(apiResponse.length / productsPerPage);

  function ChangePage(number) {
    setPage(number);
  }

  const startIndex = (selectedPage - 1) * productsPerPage;
  const productsOnPage = apiResponse.slice(
    startIndex,
    startIndex + productsPerPage
  );

  const productCards = productsOnPage.map((element) => (
    <ProductCard
      selected={false}
      key={element.data.sku}
      name={element.data.name}
      categoryId={element.data.category.id}
      categoryName={element.data.category.slug}
      price={element.data.price}
      imageUrl={element.data.mainimage.url}
      productId={element.id}
    />
  ));
  return (
    <ProductListContainer>
      <ProductListGrid>{productCards}</ProductListGrid>
      <Paginator
        changePageHandler={ChangePage}
        pageSelected={selectedPage}
        pagesNumber={pagesNumber}
      />
    </ProductListContainer>
  );
}
