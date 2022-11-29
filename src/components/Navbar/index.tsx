import { Box, AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

export const Navbar = () => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ECOMMENJA
          </Typography>
          <Link to="/checkout">
            <IconButton>
              <ShoppingCartIcon sx={{ color: "white" }} fontSize="large" />
            </IconButton>
          </Link>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}