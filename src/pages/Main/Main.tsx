import { Footer } from '@/components';
import { ContainerLayout } from '@/styled-components/ContainerLayout';
import { Rows, SliderComponent } from './components';

export const Main = () => {
  return (
    <div>
      <ContainerLayout style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <SliderComponent />
        <Rows category="smartphones" />
        <Rows category="laptops" />
        <Rows category="skincare" />
        <Rows category="tops" />
      </ContainerLayout>
      <Footer />
    </div>
  )
}

export default Main;