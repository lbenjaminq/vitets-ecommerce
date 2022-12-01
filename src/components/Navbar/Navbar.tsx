import { Box, AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material'
import { BsFillCartFill } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom';
import { signOut, getAuth } from 'firebase/auth'
import { useAppDispatch } from '../../redux/hooks';
import { userSignOut } from '../../redux/slices/user.slice';

export const Navbar = () => {
  const auth = getAuth();
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const logout = () => {
    signOut(auth)
    dispatch(userSignOut())
    navigate('/login')
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ECOMMENJA
          </Typography>
          <Link to="/checkout">
            <IconButton>
              <BsFillCartFill style={{color:"white"}} />
            </IconButton>
          </Link>
          <Button color="inherit" onClick={logout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}