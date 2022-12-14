import { useEffect } from 'react';
import { useParams } from 'react-router';
import { settings } from '@/config/react-slick';
import { CardProduct, Footer } from '@/components';
import { Stack, Box, Typography, Container, Button, TextField, Divider } from '@mui/material';
import { cleanState } from '@/redux/slices/products.slice';
import Slider from 'react-slick';
import style from './CardDetail.module.css';
import { getProductByCategory, useAppDispatch, useAppSelector } from '@/redux';
import { SDivider } from '@/styled-components/Divider';
import { TiStar } from 'react-icons/ti';
import { TbBus, TbListDetails } from 'react-icons/tb';
import { RiLuggageCartLine } from 'react-icons/ri';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { addToCartProduct } from '@/utilities';
import { AiOutlineRollback } from 'react-icons/ai';
import { PublicRoutes } from '@/models';
import { api } from '@/api';

const CardDetail = () => {

  const { id } = useParams();
  const dispatch = useAppDispatch();
  const product = useAppSelector(state => state.products.productDetail);
  const similarProducts = useAppSelector(state => state.products.products);

  useEffect(() => {
    if (id) {
      dispatch(api.getProductById(id));
    };
    return () => { dispatch(cleanState()) };
  }, [dispatch, id]);

  useEffect(() => {
    if (product) {
      dispatch(getProductByCategory(product.category));
    };
  }, [product]);

  if (!product) return <>Loading</>

  return (
    <Container maxWidth={false}>
      <Box sx={BoxContainer}>
        <a href={PublicRoutes.MAIN} style={{ position: "absolute", top: "0", left: "10px", color: "black" }} >
          <AiOutlineRollback style={{ fontSize: "2rem" }} />
        </a>       <Stack sx={StackImg}>
          <LazyLoadImage src={product?.thumbnail} className={style.imageProduct} />
        </Stack>
        <Stack
          spacing={6}
          sx={StackProduct}
        >
          <Stack spacing={2}>
            <Typography sx={{ fontSize: "3rem" }}>
              {product?.title}
            </Typography>
            <Typography sx={{ fontSize: "1.6rem" }}>
              {product?.brand} - {product?.category}
            </Typography>
          </Stack>
          <SDivider />
          <Stack
            direction="row"
            alignItems="center"
            sx={SizeMedium}
          >
            <TiStar style={SizeMedium} />
            {product?.rating}
          </Stack>
          <Typography sx={SizeMedium}>
            ${product?.price} ({product?.discountPercentage}% OFF)
          </Typography>
          <Button
            variant="contained"
            sx={{ width: "200px", fontSize: "1.2em" }}
            onClick={() => addToCartProduct(product, dispatch)}
          >
            ADD TO CART
            <RiLuggageCartLine
              style={{ marginLeft: "4%" }}
              size="1.4em"
            />
          </Button>
          <SDivider />
          <Stack
            direction={'row'}
            spacing={2}
            alignItems="center"
          >
            <Typography sx={SizeMedium}>
              PRODUCT DETAILS
            </Typography>
            <TbListDetails size={"2em"} />
          </Stack>
          <Typography sx={{ fontSize: "1.4rem" }}>
            {product?.description}
          </Typography>
          <Typography sx={{ fontSize: "1.6rem" }}>
            <strong>In Stock: </strong>
            {product?.stock} units
          </Typography>
          <SDivider />
          <Stack
            direction={'row'}
            spacing={2}
            alignItems="center"
          >
            <Typography sx={SizeMedium}>
              DELIVERY OPTIONS
            </Typography>
            <TbBus color='black' size={"2em"} />
          </Stack>
          <TextField placeholder='PIN CODE' />
          <Stack spacing={1}>
            <Typography>100% Original Products</Typography>
            <Typography>Pay on delivery might be available</Typography>
            <Typography>Easy 30 days returns and exchanges</Typography>
            <Typography>Try & Buy might be available</Typography>
          </Stack>
        </Stack>
      </Box>
      <Box sx={{ marginBottom: "2%" }}>
        <Typography sx={{
          fontSize: "2rem",
          textAlign: "center",
          margin: "2%"
        }}
        >
          SIMILAR PRODUCTS
        </Typography>
        {
          similarProducts.length &&
          <Box sx={{ margin: "auto", width: "80%", marginBottom: "6%" }}>
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
      <Footer />
    </Container>
  )
};

const BoxContainer = {
  display: "flex",
  flexDirection: { xs: "column", lg: "row" },
  justifyContent: "space-evenly",
  marginBottom: "5%",
  backgroundColor: "#a5a5a5",
  position: "relative",
  padding: "2%"
};

const StackImg = {
  width: { xs: "100%", sm: "100%", md: "100%", lg: "50%" },
  display: "flex",
  backgroundColor: { xs: "none", lg: "#fff" },
  position: { sm: "relative", md: "sticky" },
  top: { md: "none", lg: "0px" },
  height: { xs: "50vh", sm: "70vh", md: "90vh" },
  marginTop: "2%"
};

const StackProduct = {
  backgroundColor: "#f5f5f5",
  padding: "2%",
  width: { xs: "100%", md: "100%", lg: "40%" },
  height: "fit-content",
  marginTop: "2%"
};

const SizeMedium = {
  fontSize: "2rem"
};

export default CardDetail;