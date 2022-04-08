import CustomFeatureBox from '@/utils/CustomFeatureBox';
import { Container, Grid } from '@mui/material';
import Heading from '../Heading';

import Feedback from '../Feedback';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { feedbackArr } from '@/mockData/Feedbacks';
import { IFeedback } from '@/types/Feedbacks';

function Feedbacks() {
  return (
    <Container maxWidth='xl' sx={{ padding: '40px 0' }}>
      <Heading
        customStyle={{ marginBottom: '40px' }}
        title={'What our customers are saying'}
      />

      <Swiper
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        spaceBetween={0}
        breakpoints={{
          320: {
            slidesPerView: 1
          },
          640: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 1
          },
          1024: {
            slidesPerView: 3
          }
        }}
      >
        {feedbackArr?.map((singleFeedback: IFeedback) => (
          <SwiperSlide key={singleFeedback?.id}>
            <Feedback feedback={singleFeedback} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default Feedbacks;
