import { useState, useEffect } from 'react';
import { Button, Container, Grid, Stack } from '@mui/material';
import { getProductAction, useAppDispatch, useAppSelector } from '@/redux';
import { cleanState } from '@/redux/slices/products.slice';
import { CardProduct, FilterCategory, FilterPrice, Search } from '@/components';
import { api } from '@/api';

export const Home = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(state => state.products.products);

  const [price, setPrice] = useState('');
  const [categorySelected, setCategorySelected] = useState('');

  const handleReset = () => {
    dispatch(getProductAction());
    setPrice('');
    setCategorySelected('');
  };

  useEffect(() => {
    dispatch(getProductAction());
    return () => { dispatch(cleanState()) };
  }, []);

  return (
    <Container maxWidth={false}>
      <Stack direction="row" spacing={12} sx={{ marginTop: "20px" }}>
        <Search />
        <FilterPrice price={price} setPrice={setPrice} />
        <FilterCategory categorySelected={categorySelected} setCategorySelected={setCategorySelected} />
        <Button variant="outlined" color="primary" onClick={handleReset}>reset filters</Button>
      </Stack>
      <Grid
        container
        rowSpacing={4}
        columnSpacing={{ xs: 1, sm: 2, md: 4 }}
        sx={{ margin: "auto" }}
      >
        {products?.map((product) => (
          <Grid key={product.id} item>
            <CardProduct product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
