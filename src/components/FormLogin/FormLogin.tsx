import React from 'react';
import { Container, Grid, Paper, Box, Typography, TextField, Button } from '@mui/material';

interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLogin: (e: React.MouseEvent) => Promise<void>;
  handleOpen: () => void;
}

export const FormLogin: React.FC<Props> = ({ handleChange, handleLogin, handleOpen }) => {
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
              <Button onClick={handleOpen} variant="outlined" >Register</Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}
