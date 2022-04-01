import { Button } from '@mui/material';
import { styled } from '@mui/system';

const CustomButton = styled(Button)({
  background: '#12C659',
  fontSize: '18px',
  fontWeight: 600,
  lineHeight: '22px',
  color: '#fff',
  padding: '17px 50px',
  '&:hover': {
    background: '#12C659',
    color: '#fff',
    opacity: '0.8'
  }
});

export default CustomButton;
