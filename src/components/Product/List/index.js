import React, { useEffect, useMemo } from "react";
import Filter from "../Filter";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Wrapper from "../../Wrapper";
import { useRecoilState, useRecoilValue } from "recoil";
import { pageCount, productsSearch } from "../../../recoil/atoms/filtersAtom";
import { useQuery } from "react-query";
import { getFilteredProducts } from "../../../api/products";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Item from "../Item";
import { getGridProduct } from "../../../recoil/selectors/filterSelectors";

const List = () => {
  const [count, setCount] = useRecoilState(pageCount);
  const searchValue = useRecoilValue(productsSearch);
  const grid = useRecoilValue(getGridProduct);
  const { isLoading, isError, data, error, refetch } = useQuery(
    "fetchProduct",
    () => getFilteredProducts(count)
  );

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const filteredData = useMemo(() => {
    return data?.filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [searchValue, data]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }
  return (
    <React.Fragment>
      <Filter />
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {filteredData &&
              filteredData?.map((product) => (
                <Grid key={product.id} item xs={6} md={grid}>
                  <Item product={product} />
                </Grid>
              ))}
          </Grid>
        </Box>
        <Wrapper justifyContent="flex-end" marginRight="125px">
          <Wrapper width="300px" marginTop="25px">
            <div>{count} items per page</div>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={count}
                onChange={(e) => setCount(e.target.value)}
              >
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={12}>12</MenuItem>
                <MenuItem value={"all"}>All</MenuItem>
              </Select>
            </FormControl>
          </Wrapper>
        </Wrapper>
      </div>
    </React.Fragment>
  );
};

export default List;
