import About from '@/components/About';
import Banner from '@/components/Banner';
import Featured from '@/components/Featured';
import { Typography } from '@mui/material';

const HomePage = () => {
  return (
    <>
      <Banner />
      <Featured />
      <About />
      <Typography component='div' sx={{ marginBottom: '60px' }}></Typography>
    </>
  );
};

export default HomePage;
