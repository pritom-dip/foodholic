import { Container, Grid, Typography } from '@mui/material';

const FooterRightBar = () => {
  return (
    <Grid container spacing={4}>
      <Grid item md={4} xs={12}>
        <Typography
          component='div'
          sx={{
            fontSize: '18px',
            fontWeight: '600',
            lineHeight: '24px'
          }}
        >
          Company
        </Typography>
      </Grid>
    </Grid>
  );
};

export default FooterRightBar;
