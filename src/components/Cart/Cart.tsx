import { sumTotal } from '@/utilities/sumTotal';
import { useAppDispatch, useAppSelector } from '@/redux';
import { addToCart, removeToCart } from '@/redux/slices/cart.slice';
import { CartProduct } from '@/types/types';
import { Typography, Box, Paper, Container, Stack } from '@mui/material';
import { useEffect } from 'react';
import { setItem } from '@/utilities';
import { SDivider } from '@/styled-components/Divider';
import { CartProductCard } from '../Product';

export const Cart = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(state => state.cartProducts);

  const addToCartProducts = (item: CartProduct) => {
    dispatch(addToCart(item));
  };

  useEffect(() => {
    setItem('cart', products);
  }, [products]);

  const removeToCartProduct = (item: CartProduct) => {
    dispatch(removeToCart(item));
  };

  if (!products.length) return <h1 style={{ color: "black" }}>No products</h1>;

  return (

    <Container maxWidth={false} sx={{ display: "flex", flexDirection: { xs: "column", sm: "column", md: "row", position: "relative" } }}>
      <Box justifyContent='center' sx={{ width: { xs: "100%", sm: "100%", md: "65%" } }}>
        {
          products?.map((product) => (
            <CartProductCard
              key={product.id}
              product={product}
              addToCartProducts={addToCartProducts}
              removeToCartProduct={removeToCartProduct}
            />
          ))
        }
      </Box>
      <Box component='div' sx={{ width: "35%", height: "500px", display: "flex", alignItems: "center", justifyContent: "center", position: "sticky", top: "0" }}>
        <Paper elevation={3} sx={{ height: "80%", width: "80%", backgroundColor: "#fff" }}>
          <Typography variant="h4" sx={{ margin: "4%" }}>PRICE DETAILS</Typography>
          <SDivider />
          <Stack direction='row' justifyContent='space-between' ml={4} mr={4} mt={5} mb={5}>
            <Typography variant="h5">Products Amount</Typography>
            <Typography variant="h5">{products.length}</Typography>
          </Stack>
          <Stack direction='row' justifyContent='space-between' ml={4} mr={4} mt={5} mb={5}>
            <Typography variant="h5">Delivery Charges</Typography>
            <Typography variant="h5">Free</Typography>
          </Stack>
          <SDivider />
          <Stack direction='row' justifyContent='space-between' ml={4} mr={4} mt={5}>
            <Typography variant="h5">Total Amount</Typography>
            <Typography variant="h5">${sumTotal(products)}</Typography>
          </Stack>
        </Paper>
      </Box>
    </Container>

  );
}

