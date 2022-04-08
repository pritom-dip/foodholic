import FooterLeftbar from '@/components/FooterLeftbar';
import { Container, Grid, Stack, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Container maxWidth='xl' sx={{ marginTop: '30px' }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <FooterLeftbar />
        </Grid>
        <Grid item xs={12} md={6}></Grid>
      </Grid>
      <Typography component='div' sx={{ marginBottom: '200px' }}></Typography>
    </Container>
  );
};

export default Footer;
