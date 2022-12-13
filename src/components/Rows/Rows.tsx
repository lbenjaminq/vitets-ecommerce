import React, { useEffect, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { api } from '@/api';
import { CardProduct } from '../Product';
import { Product } from '@/types/types';
import Slider from "react-slick";
import "./Rows.css";
import { Settings } from '@/config/react-slick';

interface Props {
  category: string;
};

export const Rows: React.FC<Props> = ({ category }) => {

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getProductCategory(category).then(products => {
      setProducts(products);
      setLoading(false);
    });
  }, [category]);

  return (
    <Box sx={{ margin: { xs: "8%", sm: "2%" } }}>
      {
        loading ?
          <Typography>Cargando</Typography>
          :
          <>
            <Typography sx={{ fontSize: "2rem" }} >{category.toUpperCase()}</Typography>
            <Slider {...Settings} className="SliderRow">
              {
                products?.map((product) => (
                  <CardProduct key={product.id} product={product} />
                ))
              }
            </Slider>
          </>
      }
    </Box>
  )
}