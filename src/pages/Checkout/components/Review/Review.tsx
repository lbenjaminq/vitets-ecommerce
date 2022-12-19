import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useAppSelector } from '@/redux';
import { sumTotal, sumTotalProducts } from '@/utilities';

export default function Review() {

  const products = useAppSelector(state => state.cartProducts)

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.id} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.title} secondary={product.amount} />
            <Typography variant="body2">$ {product.price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total Products" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ({sumTotalProducts(products)})
          </Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $ {sumTotal(products)}
          </Typography>
        </ListItem>
      </List>
    </React.Fragment>
  );
}