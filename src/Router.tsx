import { lazy } from 'react';
import { Route } from 'react-router-dom';
import { AuthGuard } from './guards';
import { PrivateRoutes, PublicRoutes } from './models/routes';
import { AddressProvider } from './pages/Checkout/context/context';
import { RouterLayout } from './RouterLayout';
import RouteWithNotFound from './utilities/routeWithNotFound';
const Main = lazy(() => import('./pages/Main/Main'));
const Cart = lazy(() => import('./pages/CartPage/Cart'));
const Checkout = lazy(() => import('./pages/Checkout/Checkout'));
const Home = lazy(() => import('./pages/Home/Home'));
const CardDetail = lazy(() => import('./pages/CardDetail/CardDetail'));
const Login = lazy(() => import('./pages/Login/Login'));

export const AppRouter: React.FC = () => {

  return (
    <RouteWithNotFound>
      <Route path="/" element={<RouterLayout />}>
        <Route element={<AuthGuard />}>
          <Route path={PrivateRoutes.DASHBOARD} element={<><h1>DASHBOARD</h1></>} />
          <Route path={PublicRoutes.CHECKOUT} element={<Checkout />} />
        </Route>
        <Route path={PublicRoutes.MAIN} element={<Main />} />
        <Route path={PublicRoutes.HOME} element={<Home />} />
        <Route path={PublicRoutes.CART} element={<Cart />} />
        <Route path={PublicRoutes.CARD_DETAIL} element={<CardDetail />} />
      </Route>
      <Route path={PublicRoutes.LOGIN} element={<Login />} />
    </RouteWithNotFound>
  );
};
