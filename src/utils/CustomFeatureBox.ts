import { Box, styled } from '@mui/system';

const CustomFeatureBox = styled(Box)({
  boxShadow: '14px 20px 69px 0px #00000017',
  padding: '20px',
  position: 'relative',
  '&:first-child': {
    marginLeft: '0'
  }
});

export default CustomFeatureBox;
