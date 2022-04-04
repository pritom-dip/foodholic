import About from '@/components/About';
import Banner from '@/components/Banner';
import Featured from '@/components/Featured';
import PopularRecipies from '@/components/PopularRecipies';
import { Typography } from '@mui/material';

const HomePage = () => {
  return (
    <>
      <Banner />
      <Featured />
      <About />
      <PopularRecipies />
      <Typography component='div' sx={{ marginBottom: '60px' }}></Typography>
    </>
  );
};

export default HomePage;
