import { Button, Container, Grid, Typography } from '@mui/material';
import BannerImage from '@/assets/icons/banner.svg';
import Image from 'next/image';
import CustomButton from '@/utils/Custombutton';
import CustomBox from '@/utils/CustomBox';

const Banner = () => {
  return (
    <>
      <Container maxWidth='xl' sx={{ marginTop: '40px' }}>
        <Grid container sx={{ alignItems: 'center' }}>
          <Grid item xs={12} md={6}>
            <Typography
              variant='h1'
              sx={{ fontSize: '72px', textAlign: { xs: 'center', md: 'left' } }}
            >
              Great and Tasty Foods
            </Typography>

            <Typography
              variant='h6'
              sx={{
                margin: '30px 0',
                fontWeight: '500',
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              The food places is an neighborhood resturant Serving seasonal
              global cuisine driven by the faire.
            </Typography>

            <CustomBox
              sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}
            >
              <CustomButton
                variant='contained'
                sx={{ textAlign: { xs: 'center', md: 'left' } }}
              >
                Order Now
              </CustomButton>
            </CustomBox>
          </Grid>
          <Grid
            sx={{ display: 'flex', justifyContent: 'flex-end' }}
            item
            xs={12}
            md={6}
          >
            <Image src={BannerImage} alt='banner' />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Banner;
