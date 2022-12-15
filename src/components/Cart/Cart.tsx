import { sumTotal } from '@/utilities/sumTotal';
import { useAppDispatch, useAppSelector } from '@/redux';
import { addToCart, removeToCart } from '@/redux/slices/cart.slice';
import { CartProduct } from '@/types/types';
import { Typography, Box, Paper, Container, Stack, IconButton, Button } from '@mui/material';
import { useEffect } from 'react';
import { setItem, sumTotalProducts } from '@/utilities';
import { SDivider } from '@/styled-components/Divider';
import { CartProductCard } from '../Product';
import { AiOutlineRollback } from 'react-icons/ai'
import { useNavigate } from 'react-router';
import { PublicRoutes } from '@/models';

export const Cart = () => {
  const navigate = useNavigate()
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

  const handleClickBack = () => {
    navigate(PublicRoutes.MAIN)
  }

  if (!products.length) return <h1 style={{ color: "black" }}>No products</h1>;

  return (

    <Container maxWidth={false} sx={{ display: "flex", flexDirection: { xs: "column", sm: "column", md: "row", position: "relative" } }}>
      <Button sx={{ position: "absolute", marginTop: "1%" }} onClick={handleClickBack}>
        <AiOutlineRollback style={{ fontSize: "2rem" }} />
      </Button>
      <Box justifyContent='center' sx={{ width: { xs: "100%", sm: "100%", md: "65%" }, marginTop: { xs: "14%", sm: "4%", md: "4%", lg: "2%" } }}>
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
      <Box component='div' sx={{ width: { xs: "100%", sm: "100%", md: "35%" }, height: "400px", display: "flex", alignItems: "center", justifyContent: "center", position: "sticky", top: "0" }}>
        <Paper elevation={3} sx={{ height: { xs: "100%", sm: "100%", md: "80%" }, width: "80%", backgroundColor: "#fff", padding: "30px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <Typography variant="h4" >PRICE DETAILS</Typography>
          <SDivider />
          <Stack direction='row' justifyContent='space-between' >
            <Typography variant="h5">Products Amount</Typography>
            <Typography variant="h5">{sumTotalProducts(products)}</Typography>
          </Stack>
          <Stack direction='row' justifyContent='space-between' >
            <Typography variant="h5">Delivery Charges</Typography>
            <Typography variant="h5">Free</Typography>
          </Stack>
          <SDivider />
          <Stack direction='row' justifyContent='space-between' >
            <Typography variant="h5">Total Amount</Typography>
            <Typography variant="h5">${sumTotal(products)}</Typography>
          </Stack>
        </Paper>
      </Box>
    </Container>

  );
}

