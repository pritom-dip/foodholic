import CustomBox from '@/utils/CustomBox';
import CustomFeatureBox from '@/utils/CustomFeatureBox';
import { Avatar, Grid, Rating, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Avatar1 from '@/assets/icons/avatar1.svg';
import { IFeedback } from '@/types/Feedbacks';

const Feedback = ({ feedback }: { feedback: IFeedback }) => {
  return (
    <CustomFeatureBox
      sx={{ m: '3rem 2.5rem', boxShadow: '14px 20px 46px rgba(0, 0, 0, 0.04)' }}
    >
      <Rating
        value={feedback?.rating}
        readOnly
        emptyIcon={<></>}
        size='small'
      />
      <Typography
        component='div'
        sx={{
          fontSize: '14px',
          fontWeight: 500,
          color: '#000000',
          margin: '20px 0'
        }}
      >
        {'“ '}
        {feedback?.quote}
      </Typography>
      <CustomBox>
        <Avatar alt='Remy Sharp' sx={{ width: 56, height: 56 }}>
          <Image src={feedback?.image} alt={feedback?.by} />
        </Avatar>

        <Stack spacing={0} sx={{ marginLeft: '20px' }}>
          <Typography
            sx={{ fontSize: '14px', fontWeight: 600, lineHeight: '24px' }}
            component='div'
          >
            {feedback?.by}
          </Typography>
          <Typography
            component='div'
            sx={{
              fontSize: '12px',
              fontWeight: 500,
              lineHeight: '24px'
            }}
          >
            {feedback?.location}
          </Typography>
        </Stack>
      </CustomBox>
    </CustomFeatureBox>
  );
};

export default Feedback;
