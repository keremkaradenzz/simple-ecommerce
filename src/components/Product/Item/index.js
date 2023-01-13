import React from "react";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardContent, CardMedia, Card } from "@mui/material";
import Rating from "@mui/material/Rating";
import Wrapper from "../../Wrapper";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useSetRecoilState } from "recoil";
import { myCart } from "../../../recoil/atoms/cartAtom";
const Item = ({ product }) => {
  const setTodoList = useSetRecoilState(myCart);
  const handleAddCart = () => {
    setTodoList((prevState) => [...prevState, product]);
  };
  return (
    <Card sx={{ maxWidth: 345, minHeight: 250 }}>
      <CardActionArea>
        <Wrapper justifyContent="flex-end">
          <div onClick={handleAddCart}>
            <AddShoppingCartIcon />
          </div>
        </Wrapper>
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          alt="green iguana"
        />
        <CardContent
          style={{
            display: "flex",
            height: "50px",
            justifyContent: "space-between",
            flexDirection: "column",
            minHeight: "60px",
          }}
        >
          <Typography gutterBottom variant="p" component="div">
            {product.title}
          </Typography>
          <Wrapper justifyContent="space-between">
            <Rating name="read-only" value={product.rating.rate} readOnly />
            <div>${product.price}</div>
          </Wrapper>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Item;
