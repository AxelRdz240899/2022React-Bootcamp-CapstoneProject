import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProductSearch } from "utils/hooks/useProductSearch";
import LoadingSpinner from "Components/LoadingSpinner";
import ProductList from "./ProductList";
import EmptySearch from "./EmptySearch";

export default function SearchPage() {
  const [loadingSearch, setLoading] = useState(true);
  const [searchParams, setSearch] = useSearchParams();

  let query = searchParams.get("q");
  let { data, isLoading } = useProductSearch(query);

  useEffect(() => {
    if (!data.results || isLoading) {
      setLoading(true);
      return () => {};
    } else {
      setLoading(false);
    }
  }, [data, isLoading]);

  return (
    <>
      {loadingSearch ? (
        <LoadingSpinner />
      ) : data.results.length > 0 ? (
        <ProductList apiResponse={data.results} />
      ) : (
        <EmptySearch />
      )}
    </>
  );
}
