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
import { MdDownloadDone } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/redux';
import { Product } from '@/types/types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { addToCartProduct, setItem } from '@/utilities';

interface Props {
  product: Product;
};

export const CardProduct: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch();
  const productsCart = useAppSelector(state => state.cartProducts);

  const [disabledBtn, setdisabledBtn] = useState(false);

  useEffect(() => {
    setItem('cart', productsCart);
  }, [productsCart]);

  useEffect(() => {
    setdisabledBtn(productsCart.some((item) => item.id === product.id));
  }, [productsCart]);

  return (
    <Card sx={{ backgroundColor: "white", height: "260px", width: { xs: "100%", sm: "300px", md: "380px" } }}>
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
        <LazyLoadImage
          height="194"
          src={product.images[0]}
          alt={product.title}
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
          <IconButton aria-label="add to cart" onClick={() => addToCartProduct(product, dispatch)} disabled={disabledBtn}>
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
