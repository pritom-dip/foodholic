import { Container, Grid, Paper, Rating, Typography } from '@mui/material';

import CustomFeatureBox from '@/utils/CustomFeatureBox';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CustomBox from '@/utils/CustomBox';
import Image from 'next/image';
import FeaturedPosts from '@/mockData/Products';
import { IFeaturePosts } from '@/types/Products';

const Featured = () => {
  return (
    <Container maxWidth='xl' sx={{ marginTop: '40px' }}>
      <Grid
        container
        sx={{ alignItems: 'center', justifyContent: 'space-between' }}
        spacing={6}
      >
        {FeaturedPosts?.map((post: IFeaturePosts) => {
          return (
            <Grid item xs={12} md={4} key={post.id}>
              <CustomFeatureBox
                sx={{
                  borderBottomRightRadius: '70px',
                  borderTopRightRadius: '70px'
                }}
              >
                <Typography variant='h5'>{post?.name}</Typography>
                <Typography component='div'>
                  <Rating
                    name='read-only'
                    value={post?.rating}
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
                  <Typography variant='h5'>
                    ${post?.price.toFixed(2)}
                  </Typography>
                </CustomBox>

                <Typography
                  component='div'
                  sx={{ position: 'absolute', bottom: '-10px', right: '0px' }}
                >
                  <Image src={post?.image} alt='name' />
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
