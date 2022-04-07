import About from '@/components/About';
import Banner from '@/components/Banner';
import Featured from '@/components/Featured';
import PopularRecipies from '@/components/PopularRecipies';
import { Container, Typography } from '@mui/material';
import Image from 'next/image';
import SecondaryBanner from '@/assets/icons/secondary_banner.svg';
import CustomBox from '@/utils/CustomBox';

const HomePage = () => {
  return (
    <>
      <Banner />
      <Featured />
      <About />
      <PopularRecipies />
      <Container maxWidth='xl' sx={{ marginTop: '30px' }}>
        <CustomBox sx={{ justifyContent: 'center' }}>
          <Image src={SecondaryBanner} alt='banner' />
        </CustomBox>
      </Container>

      <Typography component='div' sx={{ marginBottom: '60px' }}></Typography>
    </>
  );
};

export default HomePage;
