import React, { useEffect, useState } from 'react'
import { Box, Container, Typography } from '@mui/material'
import { api } from '@/api';
import { CardProduct } from '../Product';
import { Product } from '@/types/types';
import Slider from "react-slick";

interface Props {
  category: string;
}

export const Rows: React.FC<Props> = ({ category }) => {
  const settings = {
    infinite: true,
    speed: 700,
    variableWidth: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.getProductCategory(category).then(products => {
      setProducts(products)
      setLoading(false)
    })
  }, [category])


  return (
    <Box sx={{ margin: "3%" }}>
      {
        loading ?
          <Typography>Cargando</Typography>
          :
          <>
            <Typography sx={{ fontSize: "2rem" }} color="secondary">{category.toUpperCase()}</Typography>
            <Slider {...settings}>
              {products.length &&
                products?.map((product) => (
                  <CardProduct product={product} />
                ))
              }
            </Slider>
          </>
      }
    </Box>
  )
}