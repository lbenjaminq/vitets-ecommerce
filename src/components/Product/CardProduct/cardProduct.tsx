import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  IconButton,
  Stack,
  Button,
  Typography
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { MdDownloadDone } from 'react-icons/md'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/redux';
import { addToCart } from '@/redux/slices/cart.slice';
import { setItem } from '@/utilities/useLocalStorage';
import { Product } from '@/types/types';

interface Props {
  product: Product;
}

export const CardProduct: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch();
  const productsCart = useAppSelector(state => state.cartProducts);

  const [disabledBtn, setdisabledBtn] = useState(false)

  const addToCartProduct = () => {
    const { id, brand, title, price, thumbnail, stock } = product;
    dispatch(addToCart({ id, brand, title, price, thumbnail, stock, amount: 1 }));
  };

  useEffect(() => {
    setdisabledBtn(productsCart.some((item) => item.id === product.id));
    setItem('cart', productsCart);
  }, [productsCart])

  return (
    <Card sx={{ backgroundColor: "white", width: { xs: "100%", sm: "300px", md: "380px" } }}>
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
      <Stack direction="row" alignItems="center" justifyContent="space-around">
        <Typography sx={{ color: "black" }}>${product.price}</Typography>
        <Link to={`/detail/${product.id}`} style={{ color: "black", textDecoration: "none" }}>
          <Button variant="contained" sx={{ backgroundColor: "black" }}>
            Show more
          </Button >
        </Link>
        <CardActions disableSpacing>
          <IconButton aria-label="add to cart" onClick={addToCartProduct} disabled={disabledBtn}>
            {
              disabledBtn ?
                <MdDownloadDone color="black" />
                :
                <BsFillCartPlusFill color="black" />
            }
          </IconButton>
        </CardActions>
      </Stack>
    </Card>
  );
};
