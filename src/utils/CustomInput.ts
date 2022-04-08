import { styled } from '@mui/system';
const CustomInput = styled('input')({
  padding: '20px',
  borderRadius: 0,
  border: 0,
  background: '#FFF3E3',
  '&:focus': {
    border: 0,
    outline: 'none'
  },
  '&:focus-visible': {
    border: 0,
    outline: 'none'
  }
});

export default CustomInput;
