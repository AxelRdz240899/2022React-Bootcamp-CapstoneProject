/* eslint-disable max-len */
export const API_BASE_URL = "https://wizeline-academy.cdn.prismic.io/api/v2";

export const getCategoriesUrl =
  "/documents/search?ref={apiRef}&q=%5B%5Bat(document.type%2C%20%22category%22)%5D%5D&lang=en-us&pageSize=30";

export const getFeaturedProductsUrl =
  "/documents/search?ref={apiRef}&q=%5B%5Bat(document.type%2C%20%22product%22)%5D%5D&q=%5B%5Bat(document.tags%2C%20%5B%22Featured%22%5D)%5D%5D&lang=en-us&pageSize=16";

export const getProductsUrl =
  "/documents/search?ref={apiRef}&q=%5B%5Bat(document.type%2C%20%22product%22)%5D%5D&lang=en-us&pageSize=100";
