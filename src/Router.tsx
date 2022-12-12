import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { RouterLayout } from './RouterLayout';
const Main = lazy(() => import('./pages/Main/Main'))
const Home = lazy(() => import('./pages/Home/Home'))
const Checkout = lazy(() => import('./pages/Checkout/Checkout'))
const CardDetail = lazy(() => import('./pages/CardDetail/CardDetail'))
const Login = lazy(() => import('./pages/Login/Login'))


export const AppRouter: React.FC = () => {
  return (
    <Suspense fallback={<h1>Still Loading…</h1>}>
      <Routes>
        <Route path="/" element={<RouterLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/detail/:id" element={<CardDetail />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Suspense>
  );
};
