import Slider from 'react-slick'
import image1 from '@/assets/image.jpg'
import image2 from '@/assets/image-2.jpg'
import image3 from '@/assets/image-3.jpg'
import image4 from '@/assets/image-4.jpg'
import "./SlideCar.css"
import { Container } from '@mui/material'

export const SliderComponent = () => {

  const settings = {
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };

  return (
    <Slider {...settings} className="imageSlide">
      <div>
        <img src={image1} style={{ height: "100%", width: "1300px", margin: "auto" }} />
      </div>
      <div>
        <img src={image2} style={{ width: "1300px", margin: "auto" }} />
      </div>
      <div>
        <img src={image3} style={{ width: "1300px", margin: "auto" }} />
      </div>
      <div>
        <img src={image4} style={{ width: "1300px", margin: "auto" }} />
      </div>
    </Slider>
  )
}