import LoadingSpinner from "Components/LoadingSpinner";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductInformation } from "utils/hooks/useProductInformation";

export default function ProductPage() {
  const [product, setProduct] = useState({
    tags: [""],
    data: {
      name: "",
      price: 0,
      stock: 0,
      sku: "",
      category: {
        slug: "",
      },
      description: [{ text: "" }],
    },
  });
  let { productId } = useParams();
  const { data, isLoading } = useProductInformation(productId);

  useEffect(() => {
    if (!data || isLoading) {
      return () => {};
    } else {
      setProduct(data.results[0]);
    }
  }, [data, isLoading]);

  const tags = product.tags?.map((element) => {
    return (
      <>
        <label>{element}</label>
        <br />
      </>
    );
  });
  return (
    <>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <div>
          {/* Nombre */}
          <label>{product.data.name}</label>
          <br />
          {/* Precio */}
          <label>{product.data.price}</label>
          <br />

          {/* Stock */}
          <label>{product.data.stock}</label>
          <br />

          {/* SKU */}
          <label>{product.data.sku}</label>
          <br />

          {/* Nombre Categoria */}
          <label>{product.data.category.slug}</label>
          <br />

          {/* TAGS */}
          {tags}

          {/* Descripcion */}
          <p>{product.data.description[0].text}</p>
          <br />

          {/* Input Numerico */}
          <input type="number" />
          <br />

          {/* Boton carrito */}
          <button> Add to Cart</button>
        </div>
      )}
    </>
  );
}
