import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Grid3x3Icon from "@mui/icons-material/Grid3x3";
import Grid4x4Icon from "@mui/icons-material/Grid4x4";
import Wrapper from "../../Wrapper";
import { useRecoilState } from "recoil";
import { gridProduct } from "../../../recoil/atoms/filtersAtom";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const Filter = ({ title = "PRODUCTS" }) => {
  const [grid, setGrid] = useRecoilState(gridProduct);
  const { width } = useWindowDimensions();

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1, marginTop: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={10}>
            {title}
          </Grid>
          <Grid item xs={6} md={2}>
            <Wrapper>
              <div>{width <= 901 ? 2 : 12 / grid} items by row</div>
              <Wrapper>
                <div onClick={() => setGrid(4)}>
                  <Grid3x3Icon
                    style={{
                      fill: grid === 4 && "white",
                      background: grid === 4 && "black",
                      cursor: "pointer",
                    }}
                  />
                </div>
                <div onClick={() => setGrid(3)}>
                  <Grid4x4Icon
                    style={{
                      fill: grid === 3 && "white",
                      background: grid === 3 && "black",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </Wrapper>
            </Wrapper>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Filter;
