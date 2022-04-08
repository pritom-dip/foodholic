import { Container, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import mobileApp from '@/assets/icons/mobileApp.svg';
import CustomBox from '@/utils/CustomBox';
import BrandImage from '@/assets/icons/Badge.svg';

const Addvertisement = () => {
  return (
    <Typography
      component='div'
      sx={{ background: '#FFF9F1', padding: '80px 0' }}
    >
      <Container maxWidth='xl'>
        <Grid container spacing={6} sx={{ alignItems: 'center' }}>
          <Grid item xs={12} md={4} textAlign='center'>
            <Image src={mobileApp} alt='mobile' />
          </Grid>
          <Grid item xs={12} md={8}>
            <Stack spacing={2}>
              <Typography
                component='div'
                sx={{ fontSize: '36px', fontWeight: 700, lineHeight: '40px' }}
              >
                Have you got our App?
              </Typography>

              <Typography
                component='div'
                sx={{
                  fontSize: '18px',
                  color: '#767676',
                  lineHeight: '24px',
                  maxWidth: '400px'
                }}
              >
                Best cooks and best delivery serive all at your service. Hot
                tasty foods.
              </Typography>

              <CustomBox sx={{ gap: '15px' }}>
                <Image src={BrandImage} alt={'image'} />
                <Image src={BrandImage} alt={'image'} />
              </CustomBox>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
};

export default Addvertisement;
