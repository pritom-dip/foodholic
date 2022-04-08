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
    <Typography
      component='div'
      sx={{
        marginBottom: '40px',
        maxWidth: { md: '400px', sm: '280px' },
        mx: 'auto',
        textAlign: 'center'
      }}
    >
      <Typography variant='h1' sx={{ padding: '0px 15px' }}>
        {title}
      </Typography>
    </Typography>
  );
};

export default Heading;
