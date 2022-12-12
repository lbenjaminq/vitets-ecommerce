import { lazy } from 'react';
import { Route } from 'react-router-dom';
import { AuthGuard } from './guards';
import { PrivateRoutes, PublicRoutes } from './models/routes';
import { RouterLayout } from './RouterLayout';
import { RouteWithNotFound } from './utilities';
const Main = lazy(() => import('./pages/Main/Main'));
const Home = lazy(() => import('./pages/Home/Home'));
const Checkout = lazy(() => import('./pages/Checkout/Checkout'));
const CardDetail = lazy(() => import('./pages/CardDetail/CardDetail'));
const Login = lazy(() => import('./pages/Login/Login'));

export const AppRouter: React.FC = () => {

  return (
    <RouteWithNotFound>
      <Route element={<AuthGuard />}>
        <Route path={PrivateRoutes.DASHBOARD} element={<><h1>DASHBOARD</h1></>} />
      </Route>
      <Route path="/" element={<RouterLayout />}>
        <Route path={PublicRoutes.MAIN} element={<Main />} />
        <Route path={PublicRoutes.HOME} element={<Home />} />
        <Route path={PublicRoutes.CART} element={<Checkout />} />
        <Route path={PublicRoutes.CARD_DETAIL} element={<CardDetail />} />
      </Route>
      <Route path={PublicRoutes.LOGIN} element={<Login />} />
    </RouteWithNotFound>
  );
};
