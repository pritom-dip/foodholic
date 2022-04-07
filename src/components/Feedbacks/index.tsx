import CustomFeatureBox from '@/utils/CustomFeatureBox';
import { Container, Grid, Rating } from '@mui/material';
import Heading from '../Heading';

const feedbackArr = [
  {
    id: 1,
    quote:
      '“ One of my favorite Mexican food restaurant. I can assure you this food is authentic !!!',
    by: 'Mr. Borris Nubadu',
    location: 'Nevada , USA',
    image: ''
  },
  {
    id: 2,
    quote:
      '“ One of my favorite Mexican food restaurant. I can assure you this food is authentic !!!',
    by: 'Mr. Borris Nubadu',
    location: 'Nevada , USA',
    image: ''
  },
  {
    id: 3,
    quote:
      '“ One of my favorite Mexican food restaurant. I can assure you this food is authentic !!!',
    by: 'Mr. Borris Nubadu',
    location: 'Nevada , USA',
    image: ''
  }
];

function Feedbacks() {
  return (
    <Container maxWidth='xl' sx={{ padding: '40px 0' }}>
      <Heading
        customStyle={{ marginBottom: '40px' }}
        title={'What our customers are saying'}
      />

      <Grid container spacing={4}>
        <Grid item md={4}>
          <CustomFeatureBox>
            <Rating value={4} readOnly emptyIcon={<></>} size='small' />
          </CustomFeatureBox>
        </Grid>

        <Grid item md={4}>
          <CustomFeatureBox>sdfsd</CustomFeatureBox>
        </Grid>

        <Grid item md={4}>
          <CustomFeatureBox>sdfsd</CustomFeatureBox>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Feedbacks;
