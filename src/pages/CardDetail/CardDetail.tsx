import { useEffect, useState } from 'react';
import { Stack, Box, Grid, Typography } from '@mui/material';
import { useParams } from 'react-router';
import { getProductByCategory, getProductByIdAction, useAppDispatch, useAppSelector } from '@/redux';
import { cleanState } from '@/redux/slices/products.slice';
import style from './CardDetail.module.css'
import { CardProduct } from '@/components';
import { ContainerLayout } from '@/styled-components/ContainerLayout';
import Slider from "react-slick";

export const CardDetail = () => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1604,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const { id } = useParams();
  const dispatch = useAppDispatch();
  const product = useAppSelector(state => state.products.productDetail);
  const [similarWord, setSimilarWord] = useState(product?.category)
  const similarProducts = useAppSelector(state => state.products.products)

  useEffect(() => {
    if (id) {
      dispatch(getProductByIdAction(id));
    };
    return () => { dispatch(cleanState()) };
  }, [dispatch]);

  useEffect(() => {
    if (product) {
      setSimilarWord(product.category)
    }
  }, [product])

  useEffect(() => {
    if (similarWord) {
      dispatch(getProductByCategory(similarWord))
    };
  }, [similarWord])

  return (
    <ContainerLayout>
      <Box component="div" sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "calc(100vh - 64px)",
        fontFamily: "sans-serif"
      }}>
        <Grid container sx={{ display: "flex", border: "2px solid red", backgroundColor: "#f5f5f5", width: { xs: "100%", md: "1200px" } }} >
          <Grid item lg="auto">
            <img src={product?.images[0]} className={style.img} />
          </Grid>
          <Grid lg="auto" item sx={{ color: "black", border: "2px solid red", width: { xs: "100%", md: "50%" } }}>
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
      {
        similarWord &&
        similarProducts.length &&
        <Box sx={{ border: "2px solid red", margin: "auto", width: "90%" }}>
          <Slider {...settings}>
            {
              similarProducts?.map(product => (
                <CardProduct key={product.id} product={product} />
              ))
            }
          </Slider>
        </Box>
      }
    </ContainerLayout>
  )
}
