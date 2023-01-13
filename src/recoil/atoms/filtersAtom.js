import { atom } from "recoil";

export const pageCount = atom({
  key: "countPage",
  default: 6,
});

export const productsSearch = atom({
  key: "searchProducts",
  default: "",
});

export const gridProduct = atom({
  key: "grid",
  default: 3,
});
