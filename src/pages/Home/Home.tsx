import { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import { Product } from "../../types/types";
import api from "../../api/api";
import { CardProduct } from "../../components";

export const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api.allProducts().then((products) => setProducts(products));
  }, []);

  return (
    <Container maxWidth={false}>
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
