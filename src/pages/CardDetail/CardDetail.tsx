import { useEffect, useState } from 'react';
import { Stack, Box, Grid, Typography, Container, Button, Divider, TextField } from '@mui/material';
import { useParams } from 'react-router';
import { getProductByCategory, getProductByIdAction, useAppDispatch, useAppSelector } from '@/redux';
import { cleanState } from '@/redux/slices/products.slice';
import style from './CardDetail.module.css'
import { CardProduct } from '@/components';
import Slider from "react-slick";

export const CardDetail = () => {

  const settings = {
    infinite: false,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1704,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 950,
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
  const [similarWord, setSimilarWord] = useState(product?.category);
  const similarProducts = useAppSelector(state => state.products.products);
  console.log("PRODUCT", product?.images)

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
  }, [product]);

  useEffect(() => {
    if (similarWord) {
      dispatch(getProductByCategory(similarWord))
    };
  }, [similarWord]);

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "column", lg: "row" }, justifyContent: "center", alignItems: "center", marginBottom: "5%", backgroundColor: "#a5a5a5", position: "relative" }}>
        <Stack sx={{ width: { md: "70%", lg: "50%" }, display: "flex" }}>
          <img src={product?.thumbnail} className={style.imageProduct} />
        </Stack>
        <Stack spacing={6} sx={{ backgroundColor: "#f5f5f5", padding: "2%", width: { md: "100%", lg: "50%" } }}>
          <Typography sx={{ fontSize: "2rem" }}>
            {product?.title}
          </Typography>
          <Typography>
            {product?.brand}
          </Typography>
          <Typography>
            {product?.rating}⭐
          </Typography>
          <Typography sx={{ fontSize: "1.4rem" }}>
            ${product?.price} ({product?.discountPercentage}% OFF)
          </Typography>
          <Button variant="contained">
            Add to cart
          </Button>
          <Divider sx={{ background: "white", marginTop: "2%" }} />
          <Typography sx={{ fontSize: "1.6rem" }}>
            PRODUCT DETAILS
          </Typography>
          <Typography>
            {product?.description}
          </Typography>
          <Divider sx={{ background: "white", margin: "2%" }} />
          <Typography >
            <strong>Category: </strong>
            {product?.category}
          </Typography>
          <Typography>
            <strong>In Stock: </strong>
            {product?.stock}
          </Typography>
          <Typography sx={{ fontSize: "1.6rem" }}>
            DELIVERY OPTIONS
          </Typography>
          <TextField placeholder='PIN CODE' />
          <Typography>
            100% Original Products
          </Typography>
          <Typography>Pay on delivery might be available</Typography>
          <Typography>Easy 30 days returns and exchanges</Typography>
          <Typography>Try & Buy might be available</Typography>
        </Stack>
      </Box>
      <Box>
        <Typography sx={{ fontSize: "2rem", color: "#fff", textAlign: "center" }}>
          SIMILAR PRODUCTS
        </Typography>
        {
          similarWord &&
          similarProducts.length &&
          <Box sx={{ margin: "auto", width: "80%" }}>
            <Slider {...settings} >
              {
                similarProducts?.map(product => (
                  <CardProduct key={product.id} product={product} />
                ))
              }
            </Slider>
          </Box>
        }
      </Box>
    </>
  )
}
