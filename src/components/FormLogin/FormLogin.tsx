import React from 'react';
import { Container, Grid, Box, Typography, TextField, Button, CssBaseline, Avatar, FormControlLabel, Checkbox, Link, Stack } from '@mui/material';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '@/config/firebase';
import { useNavigate } from 'react-router';
import { useAppDispatch } from '@/redux';
import { userActive } from '@/redux/slices/user.slice';
import { CgCopyright } from 'react-icons/cg';


interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLogin: (e: React.MouseEvent) => Promise<void>;
  handleOpen: () => void;
}

export const FormLogin: React.FC<Props> = ({ handleChange, handleLogin, handleOpen }) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const provider = new GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  provider.setCustomParameters({
    'login_hint': 'user@example.com'
  });

  const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const { email, uid } = result.user;
        if (email && uid) {
          dispatch(userActive({ email, uid }))
        }
        navigate('/')
      }).catch((error) => {
        console.log(error.message);
      });
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          s
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box sx={{ mt: 1 }}>
          <TextField
            name="email"
            type="text"
            fullWidth
            label="Email"
            onChange={handleChange}
            sx={{ mt: 2 }}
          />
          <TextField
            name="password"
            type="password"
            fullWidth
            label="Password"
            onChange={handleChange}
            sx={{ mt: 2 }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleLogin}
          >
            Sign In
          </Button>

          <Stack spacing={10} direction="row" justifyContent="center" sx={{ mt: 2, mb: 4 }} >
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={loginWithGoogle}
            >
              With Google
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={handleOpen}
            >
              Sign Up
            </Button>
          </Stack>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link variant="body2" onClick={handleOpen}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <CgCopyright />
    </Container>
  )
}
