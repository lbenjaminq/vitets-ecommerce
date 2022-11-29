import { Box, AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ECOMMENJA
          </Typography>
          <IconButton >
            <ShoppingCartIcon sx={{color:"white"}} fontSize="large"/>
          </IconButton>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}