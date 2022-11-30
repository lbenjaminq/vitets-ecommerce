import React from 'react'
import { Container, Grid, Paper, Box, Typography, TextField, Button } from '@mui/material'

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
    </Container>
  )
}
