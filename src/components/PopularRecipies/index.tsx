import SearchBar from '@/common/SearchBar';
import CustomBox from '@/utils/CustomBox';
import { Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React, { useState } from 'react';
import Foods from '../Foods';

const filters: string[] = ['Breakfast', 'Lunches', 'Dinner', 'Fast Food'];

const FilterBox = styled('div')({
  padding: '15px',
  fontWeight: 'bold',
  border: '1px solid #F9AF9C',
  fontSize: '18px',
  minWidth: '200px',
  margin: '15px 0',
  textAlign: 'center',
  borderRadius: '5px',
  cursor: 'pointer',
  '&.filter': {
    border: '1px solid transparent',
    background: '#fff'
  }
});

function PopularRecipies() {
  const [filter, setFilter] = useState<string>('Breakfast');

  return (
    <Typography
      component='div'
      sx={{ background: '#FFF9F1', padding: '50px 0' }}
    >
      <Container maxWidth='xl'>
        <CustomBox sx={{ justifyContent: 'space-between' }}>
          <Typography variant='h1'>Popular food Recipes</Typography>
          <SearchBar />
        </CustomBox>

        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <CustomBox
              sx={{
                justifyContent: 'center',
                flexDirection: 'column',
                marginTop: '30px',
                alignItems: 'flex-start'
              }}
            >
              {filters?.map((item) => {
                return (
                  <FilterBox
                    className={item === filter ? 'filter' : ''}
                    key={item}
                    onClick={() => {
                      setFilter(item);
                    }}
                  >
                    {item}
                  </FilterBox>
                );
              })}
            </CustomBox>
          </Grid>

          <Grid item xs={12} md={9}>
            <Foods />
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}

export default PopularRecipies;
