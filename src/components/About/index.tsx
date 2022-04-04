import { Container, Grid, Typography } from '@mui/material';
import AboutImage1 from '@/assets/icons/about1.svg';
import AboutImage2 from '@/assets/icons/about2.svg';
import AboutImage3 from '@/assets/icons/about3.svg';
import Image from 'next/image';

interface IAboutContent {
  id: number;
  heading: string;
  subHeading: string;
  icon: string;
}

const AboutContents: IAboutContent[] = [
  {
    id: 1,
    heading: 'Easy to order',
    subHeading: 'Very easy to order from our resturant website.',
    icon: AboutImage1
  },
  {
    id: 2,
    heading: 'Live Order',
    subHeading: 'Custom can order from anywhere and pay from anywhere.',
    icon: AboutImage2
  },
  {
    id: 3,
    heading: 'Best Quality',
    subHeading: 'We use the best of the best ingredients for your taste buds.',
    icon: AboutImage3
  }
];

const About = () => {
  return (
    <Container maxWidth='xl' sx={{ marginTop: '100px' }}>
      <Typography
        component='div'
        sx={{
          marginBottom: '40px',
          maxWidth: '400px',
          mx: 'auto',
          textAlign: 'center'
        }}
      >
        <Typography variant='h1'>Wait A minute for deliciousness</Typography>
      </Typography>

      <Grid container spacing={6}>
        {AboutContents?.map((item: IAboutContent) => {
          return (
            <Grid
              key={item?.id}
              item
              xs={12}
              md={4}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                justifyContent: 'center'
              }}
            >
              <Image src={item?.icon} alt='about image' />
              <Typography
                variant='h3'
                sx={{ fontSize: '18px', fontWeight: 'bold', paddingTop: '8px' }}
              >
                {item?.heading}
              </Typography>
              <Typography
                component='div'
                sx={{
                  fontSize: '12px',
                  color: '#837D7D',
                  maxWidth: '250px',
                  mx: 'auto',
                  textAlign: 'center'
                }}
              >
                {item?.subHeading}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default About;
