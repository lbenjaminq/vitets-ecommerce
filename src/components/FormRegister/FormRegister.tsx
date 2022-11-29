import React from "react";
import {
  Modal,
  TextField,
  Button,
  Typography,
  Stack,
} from "@mui/material";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom"
import { UserAccount } from "../../types/types";

interface Props {
  open: boolean;
  handleClose: () => void;
  handleOpen: () => void;
}

export const FormRegister: React.FC<Props> = ({
  open,
  handleClose,
  handleOpen,
}) => {
  const auth = getAuth();
  const navigate = useNavigate()

  const [newAccount, setNewAccount] = React.useState<UserAccount>({
    email: "",
    password: "",
    address:"",
    cellphone:0
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
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate('/')
      })
      .catch((error) => {
        console.log(error.message);
      });
    //THIS INFORMATION HAS TO GO TO THE DATABASE
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
          <form style={{width:"25%",backgroundColor:"white",padding:"0 2% 2% 2%",borderRadius:"20px",display:"flex",flexDirection:"column",alignItems:"center"}} onSubmit={handleRegister}>
            {/* <CancelIcon
              onClick={handleClose}
              sx={{ fontSize: "2.5rem", marginLeft: "100%", cursor: "pointer" }}
            /> */}
            <Button onClick={handleClose}>X</Button>
            <Typography
              variant="h3"
              sx={{ textAlign: "center", padding: "4% 0" }}
            >
              Register to buy
            </Typography>
            <Stack direction="row" spacing={2} >
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
              sx={{mt:2.5}}
              onClick={handleRegister}
            >
              Registrarse
            </Button>
          </form>
        </>
      </Modal>
    </>
  );
};