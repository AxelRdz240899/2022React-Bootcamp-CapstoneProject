import { useState, useEffect } from "react";
import { API_BASE_URL } from "../constants";
import { useLatestAPI } from "./useLatestAPI";

export function useProductSearch(query) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [productInformation, setProductInformation] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getProducts() {
      try {
        setProductInformation({ data: { results: [] }, isLoading: true });
        const url = `${API_BASE_URL}/documents/search?ref=${apiRef}&q=%5B%5Bat(document.type%2C%20%22product%22)%5D%5D&q=%5B%5Bfulltext(document%2C%20%22${query}%22)%5D%5D&lang=en-us&pageSize=100`;
        const response = await fetch(url, {
          signal: controller.signal,
        });
        const data = await response.json();

        setProductInformation({ data, isLoading: false });
      } catch (err) {
        setProductInformation({ data: { results: [] }, isLoading: false });
        console.error(err);
      }
    }

    getProducts();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading, query]);

  return productInformation;
}
