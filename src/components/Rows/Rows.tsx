import React, { useEffect, useState } from 'react'
import { Box, Container, Typography } from '@mui/material'
import { api } from '@/api';
import { CardProduct } from '../Product';
import { Product } from '@/types/types';
import Slider from "react-slick";
import "./Rows.css"

interface Props {
  category: string;
}

export const Rows: React.FC<Props> = ({ category }) => {
  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1604,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ]
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
            <Slider {...settings} className="SliderRow">
              {products.length &&
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