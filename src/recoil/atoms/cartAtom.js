import { atom } from "recoil";

export const myCart = atom({
  key: "cartList",
  default: [],
});
