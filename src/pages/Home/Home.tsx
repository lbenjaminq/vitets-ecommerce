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
      <Stack direction="row" spacing={12} sx={{ marginTop: "20px" }}>
        <Search />
        <FilterPrice price={price} setPrice={setPrice} />
        <FilterCategory categorySelected={categorySelected} setCategorySelected={setCategorySelected} />
        <Button variant="contained" color="primary" onClick={handleReset}>reset filters</Button>
      </Stack>
      <Grid
        container
        spacing={4}
        sx={{ margin: "auto", justifyContent: "center" }}
        wrap={'wrap'}
      >
        {products?.map((product) => (
          <Grid key={product.id} item >
            <CardProduct product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;