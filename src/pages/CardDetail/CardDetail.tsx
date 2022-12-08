import { useEffect, useState } from 'react';
import { Stack, Box, Typography, Container, Button, Divider, TextField } from '@mui/material';
import { useParams } from 'react-router';
import { getProductByCategory, getProductByIdAction, useAppDispatch, useAppSelector } from '@/redux';
import { cleanState } from '@/redux/slices/products.slice';
import style from './CardDetail.module.css'
import { CardProduct } from '@/components';
import Slider from "react-slick";
import { TiStar } from 'react-icons/ti'

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
    <Container maxWidth={false}>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "column", lg: "row" }, justifyContent: "space-around", alignItems: "center", marginBottom: "5%", backgroundColor: "#a5a5a5", position: "relative" }}>
        <Stack sx={{ width: { md: "70%", lg: "40%" }, display: "flex", backgroundColor: "#fff", border: "2px solid black", position: { sm: "relative", md: "sticky" }, top: { md: "none", lg: "0px" }, height: "90vh" }}>
          <img src={product?.thumbnail} className={style.imageProduct} />
        </Stack>
        <Stack spacing={6} sx={{ backgroundColor: "#f5f5f5", padding: "2%", width: { xs: "100%", md: "100%", lg: "40%" }, height: "fit-content", marginTop: "2%" }}>
          <Stack spacing={2}>
            <Typography sx={{ fontSize: "3rem" }}>
              {product?.title}
            </Typography>
            <Typography sx={{ fontSize: "1.6rem" }}>
              {product?.brand} - {product?.category}
            </Typography>
          </Stack>
          <Divider sx={{ background: "white", marginTop: "2%" }} />
          <Stack direction="row" alignItems="center" sx={{ fontSize: "2rem" }}>
            <TiStar style={{ fontSize: "2rem" }} />
            {product?.rating}
          </Stack>
          <Typography sx={{ fontSize: "1.4rem" }}>
            ${product?.price} ({product?.discountPercentage}% OFF)
          </Typography>
          <Button variant="contained">
            Add to cart
          </Button>
          <Divider sx={{ background: "white", marginTop: "2%" }} />
          <Typography sx={{ fontSize: "2rem" }}>
            PRODUCT DETAILS
          </Typography>
          <Typography sx={{ fontSize: "1.4rem" }}>
            {product?.description}
          </Typography>
          <Typography sx={{ fontSize: "1.6rem" }}>
            <strong>In Stock: </strong>
            {product?.stock} units
          </Typography>
          <Divider sx={{ background: "white", margin: "2%" }} />
          <Typography sx={{ fontSize: "2rem" }}>
            DELIVERY OPTIONS
          </Typography>
          <TextField placeholder='PIN CODE' />
          <Stack sx={{ fontSize: "2rem" }} >
            <Typography>100% Original Products</Typography>
            <Typography>Pay on delivery might be available</Typography>
            <Typography>Easy 30 days returns and exchanges</Typography>
            <Typography>Try & Buy might be available</Typography>
          </Stack>
        </Stack>
      </Box>
      <Box sx={{ marginBottom: "2%" }}>
        <Typography sx={{ fontSize: "2rem", color: "#fff", textAlign: "center", margin: "2%" }}>
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
    </Container>
  )
}
