import { useEffect, useState } from "react"
import { FormLogin, FormRegister } from "../../components"
import {
  signInWithEmailAndPassword,
  getAuth
} from "firebase/auth";
import { UserActive } from "../../types/types";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { userActive } from '../../redux/slices/user.slice'
import { setItem } from "../../localstorage/useLocalStorage";

const initialState = {
  email: "",
  password: ""
}

export const Login = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useAppDispatch()

  const [user, setUser] = useState<UserActive>(initialState)
  const userState = useAppSelector(state => state.user)

  useEffect(() => {
    setItem('user',userState)
  },[userState])

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
      .then(() => {
        dispatch(userActive(user))
        navigate('/')
      })
      .catch((error) => {
        console.log(error.message);
        alert('No existe')
      });
  };

  return (
    <div>
      <FormLogin handleChange={handleChange} handleLogin={handleLogin} handleOpen={handleOpen} />
      <FormRegister handleClose={handleClose} handleOpen={handleOpen} open={open} />
    </div>
  )
}
