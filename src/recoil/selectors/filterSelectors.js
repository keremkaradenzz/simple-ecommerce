import { selector } from "recoil";
import { gridProduct, pageCount, productsSearch } from "../atoms/filtersAtom";

export const getPageCount = selector({
  key: "getCount",
  get: ({ get }) => get(pageCount),
});

export const getSearchData = selector({
  key: "getSearchData",
  get: ({ get }) => get(productsSearch),
});

export const getGridProduct = selector({
  key: "getGridProduct",
  get: ({ get }) => get(gridProduct),
});
