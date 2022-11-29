import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  IconButtonProps,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { Product } from "../../../types/types";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../redux/slices/cart.slice'
import { setItem } from "../../../localstorage/useLocalStorage";
import { useAppSelector } from "../../../redux/hooks";

interface Props {
  product: Product;
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const CardProduct: React.FC<Props> = ({ product }) => {
  const [expanded, setExpanded] = React.useState(false);
  const dispatch = useDispatch()
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const productsCart = useAppSelector(state=>state.products)

  const addToCartProduct = () => {
    const { id,brand,title,price,thumbnail,stock } = product
    dispatch(addToCart({id,brand,title,price,thumbnail,stock,amount:1}))
  }

  useEffect(()=> {
    setItem('cart',productsCart)
  },[productsCart])

  return (
    <Card sx={{width:{xs:"100%",sm:"300px", md:"410px"}}}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <CardHeader
          sx={{ display: "flex", height: "160px" }}
          title={product.title}
          subheader={product.brand}
        />
        <CardMedia
          component="img"
          height="194"
          image={product.images[0]}
          alt={product.title}
          sx={{ objectFit: "cover" }}
        />
      </Stack>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          {/* <ExpandMoreIcon /> */}
          exp
        </ExpandMore>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
          </CardContent>
        </Collapse>
        <Link to={`/detail/${product.id}`}>Detalle</Link>
        <CardActions disableSpacing>
          <IconButton aria-label="add to cart" onClick={addToCartProduct}>
            {/* <FavoriteIcon /> */}
            fav
          </IconButton>
        </CardActions>
      </Stack>
    </Card>
  );
};
