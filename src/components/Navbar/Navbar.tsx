import { Box, AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, SwipeableDrawer, Drawer } from '@mui/material';
import { BsFillCartFill } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useAppDispatch, useAppSelector } from '@/redux';
import { userSignOut } from '@/redux/slices/user.slice';
import { auth } from '@/config/firebase';
import { Container } from '@mui/system';
import { useState } from 'react';
import { PublicRoutes } from '@/models/routes';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { Lists } from './Lists';

interface Pages {
  title: string;
  link: string;
};

const pages: Pages[] = [{ title: 'Search', link: "/home" }, { title: 'Pricing', link: "" }, { title: 'Blog', link: "" }];

export const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const user = useAppSelector(state => state.user);

  const logOut = () => {
    signOut(auth);
    dispatch(userSignOut());
    navigate(PublicRoutes.LOGIN);
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', sm: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ECOMENJA
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpen}
              color="inherit"
            >
              <AiOutlineMenuUnfold />
            </IconButton>
            {/* <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={() => handleCloseNavMenu(page.link)}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
            <Drawer
              onClose={handleClose}
              anchor="left"
              open={open}
            >
              <Lists />
            </Drawer>
          </Box>
          <Link to="/cart">
            <IconButton>
              <BsFillCartFill style={{ color: "white" }} />
            </IconButton>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, alignItems: "center" }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={() => navigate(page.link)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
          {
            user.email ?
              <Button variant="contained" onClick={logOut}>Sign Out</Button>
              :
              <Button variant="contained" onClick={() => navigate(PublicRoutes.LOGIN)}>Sign In</Button>
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
}