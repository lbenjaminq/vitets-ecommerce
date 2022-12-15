import { useAppDispatch, useAppSelector } from '@/redux';
import { addToCart, removeToCart } from '@/redux/slices/cart.slice';
import { CartProduct } from '@/types/types';
import { Box, Container } from '@mui/material';
import { useEffect } from 'react';
import { setItem } from '@/utilities';
import { CartProductCard } from '../../components/Product';
import { AiOutlineRollback } from 'react-icons/ai';
import { PublicRoutes } from '@/models';
import { PaperSummary } from './components/PaperSummary/PaperSummary';

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
      <a href={PublicRoutes.MAIN} style={{ position: "absolute", marginTop: "1%" }} >
        <AiOutlineRollback style={{ fontSize: "2rem" }} />
      </a>
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
      <PaperSummary products={products} />
    </Container>
  );
}

export default Cart;
