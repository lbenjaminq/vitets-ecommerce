import React from 'react';
import { Container, Grid, Paper, Box, Typography, TextField, Button } from '@mui/material';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '@/config/firebase';
import { useNavigate } from 'react-router';
import { useAppDispatch } from '@/redux';
import { userActive } from '@/redux/slices/user.slice';


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
    <Container>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item sx={{ width: { xs: "250px", md: "300px" }, height: "350px" }}>
          <Paper sx={{ height: "100%", padding: "20px" }} variant="elevation">
            <Typography variant="h4" sx={{ textAlign: "center" }}>
              Login
            </Typography>
            <Box sx={{ margin: "20px 0", height: "80%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <TextField
                name="email"
                type="text"
                fullWidth
                label="Email"
                onChange={handleChange}
              />
              <TextField
                name="password"
                type="password"
                fullWidth
                label="Password"
                onChange={handleChange}
              />
              <Button
                variant="contained"
                type="submit"
                onClick={handleLogin}
              >
                Login
              </Button>
              <Button onClick={loginWithGoogle} >With Google</Button>
              <Button onClick={handleOpen} variant="outlined" >Register</Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}
