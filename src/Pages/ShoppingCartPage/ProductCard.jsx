import React, { useState } from "react";
import {
  StyledProductCard,
  StyledImage,
  ProductInformationContainer,
  NameLabel,
  PriceLabel,
  ImageContainer,
  InputContainer,
  TotalLabel,
  TotalTitle,
  IconContainer,
  DeleteIcon,
  PriceSpan,
  QtyLabel,
} from "Styles/ShoppingCartPage/ProductCard";
import { QuantityInput } from "Styles/ProductPage/ProductInformationCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductsFromCart,
  updateProductFromCart,
  deleteProductFromCart,
} from "redux/slices/cartSlice";
import swal from "sweetalert2";

export default function ProductCard({
  productId,
  name,
  image,
  price,
  quantity,
}) {
  const productIndex = useSelector(getProductsFromCart).findIndex(
    (element) => element.id === productId
  );
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(quantity);
  function handleProductChange(event) {
    let value = event.target.value;
    setInputValue(value);
    if (value) {
      dispatch(
        updateProductFromCart({
          index: productIndex,
          requested: Number(value),
        })
      );
    }
  }

  function deleteProduct() {
    dispatch(deleteProductFromCart(productId));
    swal.fire({
      title: "The product has been succesfully deleted from the cart",
      icon: "success",
    });
  }

  return (
    <StyledProductCard>
      <ImageContainer>
        <StyledImage src={image} alt={name} />
      </ImageContainer>
      <ProductInformationContainer>
        <NameLabel>{name}</NameLabel>
        <PriceLabel>
          Unit price: <PriceSpan>{"$" + price + " USD"}</PriceSpan>
        </PriceLabel>
      </ProductInformationContainer>
      <InputContainer>
        <QtyLabel>Qty: </QtyLabel>
        <QuantityInput
          value={inputValue}
          onChange={(event) => handleProductChange(event)}
          type="number"
          min={1}
        />
      </InputContainer>
      <ProductInformationContainer>
        <TotalTitle>TOTAL</TotalTitle>
        <TotalLabel> {"$" + Number(price * quantity) + " USD"}</TotalLabel>
      </ProductInformationContainer>
      <IconContainer>
        <DeleteIcon onClick={deleteProduct} />
      </IconContainer>
    </StyledProductCard>
  );
}
