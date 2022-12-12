import { useEffect, useState } from 'react';
import { FormLogin, FormRegister } from '../../components';
import {
  signInWithEmailAndPassword,
  getAuth
} from 'firebase/auth';
import { UserActive } from '../../types/types';
import { useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { userActive } from '../../redux/slices/user.slice';
import { setItem } from '../../utilities/useLocalStorage';

const initialState = {
  email: "",
  uid: "",
  password: ""
};

export const Login = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userState = useAppSelector(state => state.user);

  const [user, setUser] = useState<UserActive>(initialState);
  const [open, setOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setItem('user', userState);
  }, [userState]);

  const handleLogin = (e: React.MouseEvent) => {
    return signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userFirebase) => {
        const { email, uid } = userFirebase.user
        if (email && uid) {
          dispatch(userActive({ email, uid }))
        }
        navigate('/')
      })
      .catch((error) => {
        console.log(error.message);
        alert('No existe')
      });
  };

  return (
    <div style={{ backgroundColor: "white", height: "100vh", width: "100vw", display: "flex", alignItems: "center" }}>
      <FormLogin handleChange={handleChange} handleLogin={handleLogin} handleOpen={handleOpen} />
      <FormRegister handleClose={handleClose} handleOpen={handleOpen} open={open} />
    </div>
  )
}

export default Login;