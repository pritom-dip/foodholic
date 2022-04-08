import CustomBox from '@/utils/CustomBox';
import CustomInput from '@/utils/CustomInput';
import { Stack, Typography, Button } from '@mui/material';
import Image from 'next/image';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import Logo from '@/assets/icons/FoodHolic.svg';
import { useSnackbar } from 'notistack';
import { styled } from '@mui/system';
import { useState } from 'react';
import { validateEmail } from '@/helpers/validateEmail';
import Link from 'next/link';

const CustomButton = styled(Button)({
  padding: '15px 40px',
  borderRadius: 0,
  background: '#FFB619',
  fontWeight: 500,
  color: '#000',
  boxShadow: 'none',
  outline: 'none',
  '&:hover': {
    background: '#FFB619',
    color: '#000',
    boxShadow: 'none'
  }
});

const FooterLeftbar = () => {
  const [inputText, setInputText] = useState<string>('');
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    const email = validateEmail(inputText);
    if (!email) {
      enqueueSnackbar('Please provide a valid email!', { variant: 'error' });
      return;
    }
    enqueueSnackbar('Successfully subscribed!', { variant: 'success' });
  };

  return (
    <Stack alignItems='flex-start' spacing={2}>
      <Image src={Logo} alt='logo' />
      <Typography
        component='div'
        sx={{ fontSize: '14px', fontWeight: 500, lineHeight: '24px' }}
      >
        Subscribe to our newsletter to get our news
      </Typography>

      <CustomBox>
        <CustomInput
          onChange={(e: any) => setInputText(e.target.value)}
          placeholder='john@doe.com'
          value={inputText}
        />
        <CustomButton onClick={handleClick} variant='contained'>
          Subscribe
        </CustomButton>
      </CustomBox>

      <CustomBox sx={{ gap: '10px' }}>
        <Link href='https://www.facebook.com/'>
          <a target='_blank' rel='noopener noreferrer'>
            <Facebook sx={{ color: '#1976D2' }} />
          </a>
        </Link>
        <Link href='https://www.instagram.com/'>
          <a target='_blank' rel='noopener noreferrer'>
            <Instagram
              sx={{
                color: '#FFC107'
              }}
            />
          </a>
        </Link>
        <Link href='https://www.twitter.com/'>
          <a target='_blank' rel='noopener noreferrer'>
            <Twitter sx={{ color: '#03A9F4' }} />
          </a>
        </Link>
      </CustomBox>
    </Stack>
  );
};

export default FooterLeftbar;
