import { useAppSelector } from "@/redux";
import { Navigate, Outlet } from "react-router";

export const AuthGuard = () => {
  const user = useAppSelector(state => state.user);

  return user.email ? <Outlet /> : <Navigate replace to={'/login'} />
}

export default AuthGuard;