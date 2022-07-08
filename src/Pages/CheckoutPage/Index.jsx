import React from "react";
import { TotalSection } from "Components/ProductTotal";
import { useSelector } from "react-redux";
import { StyledTitle } from "Styles/GeneralStyles";
import {
  FormContainer,
  PageContainer,
  SummaryTable,
  Input,
  TextArea,
  ButtonsContainer,
} from "Styles/CheckoutPage/Index";
import { getProductsFromCart } from "redux/slices/cartSlice";
import ProductRow from "./ProductRow";
import { Button } from "Styles/Button";
import { Link } from "react-router-dom";
export default function CheckoutPage() {
  const products = useSelector(getProductsFromCart);

  const productsRows = products.map((element) => (
    <ProductRow
      key={element.id}
      name={element.name}
      number={element.requested}
      price={element.unitaryPrice}
    />
  ));

  let total = 0;
  products.forEach((element) => {
    total += Number(element.requested * element.unitaryPrice);
  });

  return (
    <PageContainer>
      <StyledTitle>Shipping Information</StyledTitle>
      <FormContainer>
        <Input width={"100%"} type="text" size={50} placeholder="Name" />
        <Input width={"40%"} type="text" size={20} placeholder="Email" />
        <Input width={"40%"} type="text" size={10} placeholder="ZIP" />
        <TextArea type="text" rows={4} placeholder="Notes" />
      </FormContainer>
      <StyledTitle>Summary</StyledTitle>
      <SummaryTable>{productsRows}</SummaryTable>
      <TotalSection total={total} />
      <ButtonsContainer>
        <Button primary>Place order</Button>
        <Link to="/cart">
          <Button>Go back to cart</Button>
        </Link>
      </ButtonsContainer>
    </PageContainer>
  );
}
