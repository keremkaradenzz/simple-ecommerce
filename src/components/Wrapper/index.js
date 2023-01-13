import React from "react";
import { styled } from "@mui/material/styles";

const WrapperDiv = styled("div")((rest) => {
  delete rest?.children;
  delete rest?.theme;
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    ...rest,
  };
});

const Wrapper = ({ children, ...rest }) => {
  return <WrapperDiv {...rest}>{children}</WrapperDiv>;
};

export default Wrapper;
