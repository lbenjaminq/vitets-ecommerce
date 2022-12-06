import { Footer, Rows, Search, SliderComponent } from '@/components'
import { useAppDispatch } from '@/redux'
import { ContainerLayout } from '@/styled-components/ContainerLayout'

export const Main = () => {

  return (
    <div>
      <ContainerLayout style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        {/* <SliderComponent /> */}
        <Rows category="smartphones" />
        <Rows category="laptops" />
        <Rows category="skincare" />
      </ContainerLayout>
      <Footer />
    </div>
  )
}