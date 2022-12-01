import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  IconButtonProps,
  Stack,
  styled,
  Typography,
  Button
} from "@mui/material";
import React, { useEffect } from "react";
import { Product } from "../../../types/types";
import { BsFillCartPlusFill } from 'react-icons/bs'
import { MdExpandMore } from 'react-icons/md'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../redux/slices/cart.slice'
import { setItem } from "../../../localstorage/useLocalStorage";
import { useAppSelector } from "../../../redux/hooks";

interface Props {
  product: Product;
}

export const CardProduct: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch()

  const productsCart = useAppSelector(state => state.products)

  const addToCartProduct = () => {
    const { id, brand, title, price, thumbnail, stock } = product
    dispatch(addToCart({ id, brand, title, price, thumbnail, stock, amount: 1 }))
  }

  useEffect(() => {
    setItem('cart', productsCart)
  }, [productsCart])

  return (
    <Card sx={{backgroundColor:"black",width: { xs: "100%", sm: "300px", md: "410px" } }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <CardHeader
          sx={{ display: "flex", height: "160px" }}
          title={product.title}
          subheader={product.brand}
        />
        <CardMedia
          component="img"
          height="194"
          image={product.images[0]}
          alt={product.title}
          sx={{ objectFit: "cover" }}
        />
      </Stack>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Link to={`/detail/${product.id}`} style={{color:"black",textDecoration:"none"}}>
          <Button variant="contained" color="secondary">
          Show more
          </Button >
        </Link>
        <CardActions disableSpacing>
          <IconButton aria-label="add to cart" onClick={addToCartProduct}>
            <BsFillCartPlusFill color="white"/>
          </IconButton>
        </CardActions>
      </Stack>
    </Card>
  );
};
