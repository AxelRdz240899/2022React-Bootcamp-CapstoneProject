import { useState, useEffect } from "react";
import { API_BASE_URL } from "../constants";
import { useLatestAPI } from "./useLatestAPI";

export function useProductInformation(productId) {
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

    async function getFeaturedBanners() {
      try {
        setProductInformation({ data: {}, isLoading: true });
        const url = `${API_BASE_URL}/documents/search?ref=${apiRef}&q=%5B%5B%3Ad+%3D+at%28document.
        id%2C+%22${productId}%22%29+%5D%5D`;
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

    getFeaturedBanners();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading, productId]);

  return productInformation;
}
