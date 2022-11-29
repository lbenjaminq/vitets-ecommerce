import { Routes, Route } from "react-router-dom";
import { CardDetail, Checkout, Home } from "./pages";
import { RouterLayout } from "./RouterLayout";
import { ContainerLayout } from "./styled-components/ContainerLayout";

export const AppRouter: React.FC = () => {
  return (
    <ContainerLayout>
      <Routes>
        <Route path="/" element={<RouterLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/detail/:id" element={<CardDetail/>} />
        </Route>
      </Routes>
    </ContainerLayout>
  );
};
