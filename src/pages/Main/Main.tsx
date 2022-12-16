import { Footer } from '@/components';
import { Rows, SliderComponent } from './components';

export const Main = () => {
  return (
    <>
      <div style={{ maxWidth: "1800px", margin: "auto" }}>
        <SliderComponent />
        <Rows category="smartphones" />
        <Rows category="laptops" />
        <Rows category="skincare" />
        <Rows category="tops" />
      </div>
      <Footer />
    </>
  )
}

export default Main;