import { Button, Container, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Logo from '@/assets/icons/FoodHolic.svg';
import { useState } from 'react';
import CustomBox from '@/utils/CustomBox';
import CustomInput from '@/utils/CustomInput';
import { styled } from '@mui/system';
import { validateEmail } from '@/helpers/validateEmail';
import React from 'react';
import { SnackbarProvider, VariantType, useSnackbar } from 'notistack';

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

const Footer = () => {
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
    <Container maxWidth='xl' sx={{ marginTop: '30px' }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
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
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}></Grid>
      </Grid>
      <Typography component='div' sx={{ marginBottom: '200px' }}></Typography>
    </Container>
  );
};

export default Footer;
