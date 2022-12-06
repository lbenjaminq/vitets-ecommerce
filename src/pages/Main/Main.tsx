import { Rows, SliderComponent } from '@/components'
import { ContainerLayout } from '@/styled-components/ContainerLayout'

export const Main = () => {

  return (
    <ContainerLayout style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <SliderComponent />
      <Rows category="smartphones" />
      <Rows category="laptops" />
      <Rows category="skincare" />
    </ContainerLayout>
  )
}