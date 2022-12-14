import React from 'react';
import { CartProduct } from '@/types/types';
import { Box, Card, CardContent, CardMedia, IconButton, Paper, Stack, Typography } from '@mui/material';
import { AiFillMinusCircle } from 'react-icons/ai';
import { IoMdAddCircle } from 'react-icons/io';

interface Props {
  product: CartProduct,
  addToCartProducts: (item: CartProduct) => void,
  removeToCartProduct: (item: CartProduct) => void
}

export const CartProductCard: React.FC<Props> = ({ product, addToCartProducts, removeToCartProduct }) => {
  return (
    <Card sx={{ maxWidth: "100%", margin: "4%" }}>
      <Stack sx={{ maxWidth: "100%", minHeight: { xs: "200px", sm: "250px" } }}>
        <Stack direction="row" mt={2}>
          <CardMedia
            component="img"
            sx={{ margin: { sm: "0 5%" }, width: { xs: "100px", sm: "200px" }, height: { xs: "100px", sm: "200px" } }}
            image={product.thumbnail}
            alt={product.title}
          />
          <CardContent sx={{ display: "flex", justifyContent: { md: "space-between" }, width: "100%", flexDirection: { xs: "column", sm: "column", md: "row" } }}>
            <Stack mb={2}>
              <Typography component="a" href={`/detail/${product.id}`} gutterBottom variant="h5" sx={{
                color: 'inherit',
                textDecoration: 'none',
              }}>
                {product.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {product.brand}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                $ {product.price}
              </Typography>
            </Stack>
            <Stack>
              <Paper elevation={3} sx={{ width: "fit-content" }}>
                <Box component="div" sx={{ display: "flex", alignItems: "center" }}>
                  <IconButton onClick={() => removeToCartProduct(product)}>
                    <AiFillMinusCircle />
                  </IconButton >
                  <Typography color={"black"}>
                    {product.amount}
                  </Typography>
                  <IconButton onClick={() => addToCartProducts(product)}>
                    <IoMdAddCircle />
                  </IconButton>
                </Box >
              </Paper >
            </Stack>
          </CardContent>
        </Stack>
      </Stack>
    </Card >
  )
}