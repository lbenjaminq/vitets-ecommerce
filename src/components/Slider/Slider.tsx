import Slider from 'react-slick'
import image1 from '@/assets/image.jpg'
import image3 from '@/assets/image-3.jpg'
import image5 from '@/assets/img-5.jpg'
import image6 from '@/assets/image-6.webp'
import "./SlideCar.css"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Box } from '@mui/material'

const images = [image1, image3, image5, image6]

export const SliderComponent = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <Box >
      <Slider {...settings} className="container">
        {
          images.map(image => (
            <div key={image} className="containedSlide">
              <LazyLoadImage
                className='imageSlide'
                src={image}
              />
            </div>
          ))
        }
      </Slider >
    </Box>
  )
}