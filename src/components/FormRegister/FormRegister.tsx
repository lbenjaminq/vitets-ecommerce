import React from 'react';
import {
  Modal,
  TextField,
  Button,
  Typography,
  Stack,
  Box,
} from '@mui/material';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { AiFillCloseCircle } from 'react-icons/ai';
import { UserAccount } from '@/types/types';

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
  const navigate = useNavigate();

  const [newAccount, setNewAccount] = React.useState<UserAccount>({
    email: "",
    password: "",
    address: "",
    cellphone: 0
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
      .then(() => navigate('/login'))
      .catch((error) => console.log(error.message));
  };

  return (
    <>
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
        <>
          <Box component="form" sx={{ width: "350px", height: { xs: "500px", md: "500px", lg: "500px" }, backgroundColor: "white", padding: "0 2% 2% 2%", borderRadius: "20px", display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }} onSubmit={handleRegister}>
            <AiFillCloseCircle
              style={{ position: "absolute", right: "3px", cursor: "pointer", fontSize: "2rem" }}
              onClick={handleClose}
            />
            <Typography
              sx={{ fontSize: { xs: "1.5rem", md: "2rem" }, textAlign: "center", padding: { xs: "4% 0", md: "8% 0" } }}
            >
              Register to buy
            </Typography>
            <Stack direction="row" spacing={2}>
              <Stack direction="column">
                <TextField
                  fullWidth
                  label="email"
                  type="email"
                  sx={{ mt: 2, mb: 1.5, width: "100%" }}
                  name="email"
                  value={newAccount.email}
                  autoComplete="off"
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  label="password"
                  type="password"
                  sx={{ mt: 1.5, mb: 1.5, width: "100%" }}
                  name="password"
                  value={newAccount.password}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  label="address"
                  type="text"
                  sx={{ mt: 1.5, mb: 1.5, width: "100%" }}
                  name="address"
                  value={newAccount.address}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  label="cellphone"
                  type="text"
                  sx={{ mt: 1.5, mb: 1.5, width: "100%" }}
                  name="cellphone"
                  value={newAccount.cellphone}
                  onChange={handleChange}
                />
              </Stack>
            </Stack>
            <Button
              variant="contained"
              type="submit"
              sx={{ mt: 2.5 }}
              onClick={handleRegister}
              color="primary"
            >
              Registrarse
            </Button>
          </Box>
        </>
      </Modal>
    </>
  );
};