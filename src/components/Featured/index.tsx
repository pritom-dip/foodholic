import { Container, Grid, Paper, Rating, Typography } from '@mui/material';
import FeaturedImage1 from '@/assets/icons/feature1.svg';
import CustomFeatureBox from '@/utils/CustomFeatureBox';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CustomBox from '@/utils/CustomBox';
import Image from 'next/image';

const FeaturedPosts = [
  {
    id: 1,
    name: 'Grilled Chicken Bowl',
    image: FeaturedImage1,
    rating: 5,
    price: 40
  },
  {
    id: 2,
    name: 'Grilled Chicken Bowl',
    image: FeaturedImage1,
    rating: 5,
    price: 40
  },
  {
    id: 3,
    name: 'Grilled Chicken Bowl',
    image: FeaturedImage1,
    rating: 5,
    price: 40
  }
];

const Featured = () => {
  return (
    <Container maxWidth='xl' sx={{ marginTop: '40px' }}>
      <Grid
        container
        sx={{ alignItems: 'center', justifyContent: 'space-between' }}
        spacing={6}
      >
        {FeaturedPosts?.map((post) => {
          return (
            <Grid item xs={12} md={4} key={post.id}>
              <CustomFeatureBox
                sx={{
                  borderBottomRightRadius: '70px',
                  borderTopRightRadius: '70px'
                }}
              >
                <Typography variant='h5'>Grilled Chicken Bowl</Typography>
                <Typography component='div'>
                  <Rating
                    name='read-only'
                    value={5}
                    readOnly
                    sx={{ color: '#12C659', fontSize: '14px' }}
                  />
                </Typography>
                <CustomBox>
                  <ShoppingCartIcon
                    sx={{
                      fontSize: '14px',
                      color: '#FE5F38',
                      marginRight: '10px'
                    }}
                  />
                  <Typography variant='h5'>$40.00</Typography>
                </CustomBox>

                <Typography
                  component='div'
                  sx={{ position: 'absolute', bottom: '-10px', right: '0px' }}
                >
                  <Image src={FeaturedImage1} alt='name' />
                </Typography>
              </CustomFeatureBox>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Featured;
