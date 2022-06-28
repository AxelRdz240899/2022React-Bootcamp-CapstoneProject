import React from "react";
import { ProductCard } from "Components/ProductCard";

export default function getFilteredProductList(filters, products) {
    let filteredProductList = [];

    if (filters.length === 0) {
        filteredProductList = products;
    } else {
        products.forEach((product) => {
            if (filters.indexOf(product.data.category.id) !== -1) {
                filteredProductList.push(product);
            }
        });
    }
    return filteredProductList.map((element) => (
        <ProductCard
            selected={true}
            key={element.data.sku}
            name={element.data.name}
            categoryId={element.data.category.id}
            categoryName={element.data.category.slug}
            price={element.data.price}
            imageUrl={element.data.mainimage.url}
            productId={element.id}
        />
    ));
}