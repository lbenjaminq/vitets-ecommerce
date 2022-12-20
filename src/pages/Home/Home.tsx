import { useState, useEffect } from 'react';
import { Button, Container, Grid, Stack } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/redux';
import { cleanState } from '@/redux/slices/products.slice';
import { CardProduct } from '@/components';
import { FilterCategory, FilterPrice, Search } from './components';
import { api } from '@/api';

export const Home = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(state => state.products.products);

  console.log(products)

  const [price, setPrice] = useState('');
  const [categorySelected, setCategorySelected] = useState('');

  const handleReset = () => {
    dispatch(api.allProducts());
    setPrice('');
    setCategorySelected('');
  };

  useEffect(() => {
    dispatch(api.allProducts());
    return () => { dispatch(cleanState()) };
  }, []);

  return (
    <Container maxWidth="xl" sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Stack direction="row" spacing={{ xs: "10px", md: "60px" }} sx={{ marginTop: "20px" }}>
        <Stack spacing={{ xs: "10px", md: "60px" }} direction={{ sm: "column", md: "row" }}>
          <Search />
          <FilterPrice price={price} setPrice={setPrice} />
        </Stack>
        <Stack spacing={{ xs: "10px", md: "60px" }} direction={{ sm: "column", md: "row" }}>
          <FilterCategory categorySelected={categorySelected} setCategorySelected={setCategorySelected} />
          <Button variant="contained" color="primary" onClick={handleReset}>reset filters</Button>
        </Stack>
      </Stack>
      <Grid
        container
        spacing={4}
        mt={4}
        justifyContent="center"
        wrap={'wrap'}
      >
        {products?.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={6} lg={4}>
            <CardProduct product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;