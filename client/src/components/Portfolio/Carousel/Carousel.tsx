import style from './Carousel.module.scss'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules'

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/autoplay'

const Carousel: React.FC<{
  images: string[]
}> = ({ images }): JSX.Element => {
  return (
    <div className={style.container}>
      {images?.length > 0 && (
        <Swiper
          className={style.container__slider}
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true
          }}
        >
          {images?.map((o, i) => {
            return (
              <SwiperSlide key={i}>
                <img alt="imagen" src={`/img/slider/${o}`} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      )}
    </div>
  )
}

export default Carousel
