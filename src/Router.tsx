import { Routes, Route } from 'react-router-dom';
import { CardDetail, Checkout, Home, Login, Main } from './pages';
import { RouterLayout } from './RouterLayout';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/detail/:id" element={<CardDetail />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
