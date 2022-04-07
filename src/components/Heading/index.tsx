import CustomBox from '@/utils/CustomBox';
import { Typography } from '@mui/material';

const Heading = ({
  title,
  customStyle
}: {
  title: string;
  customStyle?: any;
}) => {
  return (
    <CustomBox sx={{ justifyContent: 'center', maxWidth: '400px', mx: 'auto' }}>
      <Typography
        sx={{
          mx: 'auto',
          textAlign: 'center',
          ...customStyle
        }}
        variant='h1'
      >
        {title}
      </Typography>
    </CustomBox>
  );
};

export default Heading;
