import CustomFeatureBox from '@/utils/CustomFeatureBox';
import { Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Image from 'next/image';
import FoodImage1 from '@/assets/icons/food1.svg';
import CustomBox from '@/utils/CustomBox';
import { styled } from '@mui/system';
import StarIcon from '@mui/icons-material/Star';
import { IFeaturePosts } from '@/types/Products';

const ImageOverDiv = styled('div')({
  marginTop: '-100px'
});

const TriangleDiv = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  width: '60px',
  height: '30px',
  borderTop: 'solid 30px #FE5F38',
  borderLeft: 'solid 30px transparent',
  borderRight: 'solid 30px transparent'
});

const Food = ({ food }: { food: IFeaturePosts }) => {
  return (
    <>
      <CustomBox sx={{ flexDirection: 'column' }}>
        <CustomFeatureBox
          sx={{
            maxWidth: '240px',
            mx: 'auto',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            background: '#fff'
          }}
        >
          <ImageOverDiv>
            <Image src={food?.image} alt='name' />
          </ImageOverDiv>

          <Typography
            variant='h4'
            sx={{ fontSize: '18px', fontWeight: '600', marginTop: '10px' }}
          >
            {food?.name}
          </Typography>

          <Typography
            component='p'
            textAlign='center'
            sx={{ fontSize: '10px', margin: '10px 0' }}
          >
            Made from the best chicken from the local farm.
          </Typography>

          <CustomBox sx={{ justifyContent: 'space-between', width: '100%' }}>
            <CustomBox>
              <StarIcon sx={{ color: '#FE5F38', fontSize: '16px' }} />
              <Typography
                variant='h2'
                fontSize='14px'
                sx={{ fontWeight: 500, marginLeft: '5px' }}
              >
                {food?.rating.toFixed(1)}
              </Typography>
            </CustomBox>
            <Typography variant='h5'>${40.0}</Typography>
          </CustomBox>

          <CustomBox sx={{ marginTop: '20px' }}>
            <ShoppingCartIcon
              sx={{ color: '#FE5F38', fontSize: '40px', cursor: 'pointer' }}
            />
          </CustomBox>
        </CustomFeatureBox>
        <TriangleDiv />
      </CustomBox>
    </>
  );
};

export default Food;
