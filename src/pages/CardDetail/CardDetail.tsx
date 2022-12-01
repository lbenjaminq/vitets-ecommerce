import { useEffect } from 'react';
import { Stack, Box, Grid, Typography } from '@mui/material';
import { useParams } from 'react-router';
import { getProductByIdAction, useAppDispatch, useAppSelector } from '@/redux';
import { cleanState } from '@/redux/slices/products.slice';

export const CardDetail = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const product = useAppSelector(state => state.products.productDetail);

  useEffect(() => {
    if (id) {
      dispatch(getProductByIdAction(id));
    };
    return () => { dispatch(cleanState()) };
  }, []);

  return (
    <Box component="div" sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "calc(100vh - 64px)",
      border: "2px solid red",
      fontFamily: "sans-serif"
    }}>
      <Grid container columns={12} sx={{ display: "flex", justifyContent: "space-around" }} >
        <Grid item lg="auto">
          <img src={product?.images[0]} style={{ width: "fit-content" }} />
        </Grid>
        <Grid item lg="auto">
          <Typography variant="h3" >{product?.title}</Typography>
          <Typography variant="h5" >{product?.brand}</Typography>
          <Grid container >
            <Grid item sx={{ margin: "20px 0px" }}>
              <Stack spacing={6} direction="row">
                <Stack spacing={4}>
                  <Typography>
                    <strong>Rating: </strong>
                    {product?.rating}
                  </Typography>
                  <Typography>
                    <strong>Price: </strong>
                    ${product?.price}
                  </Typography>
                </Stack>
                <Stack spacing={4}>
                  <Typography >
                    <strong>Category: </strong>
                    {product?.category}
                  </Typography>
                  <Typography>
                    <strong>In Stock: </strong>
                    {product?.stock}
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
          <Stack>
            <strong>Description: </strong>
            {product?.description}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}

const TypographyVariant = {
  fontSize: "2em"
}