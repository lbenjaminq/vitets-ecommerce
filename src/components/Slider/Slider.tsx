import Slider from 'react-slick'
import image1 from '@/assets/image-1.jpg'
import image2 from '@/assets/image-2.webp'
import image4 from '@/assets/image-4.jpg'
import "./SlideCar.css"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Box } from '@mui/material'
import { settingsSlider } from '@/config/react-slick'

const images = [image1, image2, image4];

export const SliderComponent = () => {
  return (
    <Box >
      <Slider {...settingsSlider} className="container">
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