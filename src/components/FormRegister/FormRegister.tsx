import React from 'react';
import {
  Modal,
  TextField,
  Button,
  Typography,
  Box,
  Container,
  CssBaseline,
  Avatar,
  Grid,
  FormControlLabel,
  Checkbox,
  Link,
} from '@mui/material';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { AiFillCloseCircle } from 'react-icons/ai';
import { UserAccount } from '@/types/types';
import { CgCopyright } from 'react-icons/cg';

interface Props {
  open: boolean;
  handleClose: () => void;
  handleOpen: () => void;
}

export const FormRegister: React.FC<Props> = ({
  open,
  handleClose,
}) => {
  const auth = getAuth();
  const [newAccount, setNewAccount] = React.useState<UserAccount>({
    email: "",
    password: "",
    address: "",
    cellphone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewAccount({
      ...newAccount,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, newAccount.email, newAccount.password)
      .then(() => {
        window.location.reload()
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        zIndex: "100",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container component="main" maxWidth="xs" sx={{ background: "white", position: "relative", borderRadius: "10px" }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>s
          </Avatar>
          <AiFillCloseCircle
            style={{ position: "absolute", right: "2px", top: "2px", cursor: "pointer", fontSize: "2rem" }}
            onClick={handleClose}
          />
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleRegister} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="email"
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={newAccount.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  fullWidth
                  label="password"
                  type="password"
                  name="password"
                  id="password"
                  required
                  value={newAccount.password}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="address"
                  type="text"
                  name="address"
                  value={newAccount.address}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="cellphone"
                  type="text"
                  name="cellphone"
                  value={newAccount.cellphone}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <CgCopyright />
      </Container>
    </Modal>
  );
};