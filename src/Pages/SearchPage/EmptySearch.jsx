import React from "react";
import {
  Container,
  Text,
  Icon,
  ComplementarySearch,
} from "Styles/SearchPage/EmptySearch";
export default function EmptySearch() {
  return (
    <Container>
      <Icon />
      <Text>Oops! We couldn't find any product with your search term</Text>
      <ComplementarySearch>Please try with another search</ComplementarySearch>
    </Container>
  );
}
