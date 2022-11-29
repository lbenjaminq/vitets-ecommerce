import { Box, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { FormRegister } from "../../components"
import {
  signInWithEmailAndPassword,
  getAuth
} from "firebase/auth";
import { UserActive } from "../../types/types";
import { useNavigate } from "react-router";

const initialState = {
  email: "",
  password: ""
}

export const Login = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [user, setUser] = useState<UserActive>(initialState)

  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)
  }
  const handleOpen = () => {
    setOpen(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleLogin = (e: React.MouseEvent) => {
    return signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate('/')
      })
      .catch((error) => {
        console.log(error.message);
        alert('No existe')
      });
  };

  return (
    <div>
      <Container>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: "100vh" }}
        >
          <Grid item>
            <Paper>
              <Typography>
                Login
              </Typography>
              <Box>
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
                <Button onClick={handleOpen} >Register</Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        <FormRegister handleClose={handleClose} handleOpen={handleOpen} open={open} />
      </Container>
    </div>
  )
}
