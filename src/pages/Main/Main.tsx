import { Footer } from '@/components';
import { Rows, SliderComponent } from './components';

export const Main = () => {
  return (
    <div>
      <SliderComponent />
      <Rows category="smartphones" />
      <Rows category="laptops" />
      <Rows category="skincare" />
      <Rows category="tops" />
      <Footer />
    </div>
  )
}

export default Main;