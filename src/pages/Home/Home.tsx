import { useEffect } from "react";
import { Container, Grid, Stack } from "@mui/material";
import { CardProduct, FilterCategory, FilterPrice, Search } from "../../components";
import { getProductAction } from "../../redux/actions/products";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { cleanState } from "../../redux/slices/products.slice";

export const Home = () => {

  const dispatch = useAppDispatch()
  const products = useAppSelector(state => state.products.products)

  useEffect(() => {
    dispatch(getProductAction())
    return () => { dispatch(cleanState()) }
  }, [products]);

  return (
    <Container maxWidth={false}>
      <Stack direction="row" spacing={12} sx={{ marginTop: "20px" }}>
        <Search />
        <FilterPrice />
        <FilterCategory />
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
