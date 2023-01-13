import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Wrapper from "../Wrapper";
import { useRecoilState, useRecoilValue } from "recoil";
import { productsSearch } from "../../recoil/atoms/filtersAtom";
import { myCart } from "../../recoil/atoms/cartAtom";
import Badge from "@mui/material/Badge";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  border: "1px solid gray",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
  marginTop: 10,
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Header = () => {
  const [value, setValue] = useState("");
  const [, setSearch] = useRecoilState(productsSearch);
  const cart = useRecoilValue(myCart);

  useEffect(() => {
    const setDebounceSearch = setTimeout(() => {
      setSearch(value);
    }, 1000);
    return () => clearTimeout(setDebounceSearch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={10}>
            <h1>eCommerce</h1>
          </Grid>
          <Grid item xs={6} md={2}>
            <Wrapper marginTop={25}>
              <Badge badgeContent={cart.length} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
              Shopping Cart
            </Wrapper>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Header;
