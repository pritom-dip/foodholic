import SearchBar from '@/common/SearchBar';
import FeaturedPosts from '@/mockData/Products';
import { IFeaturePosts } from '@/types/Products';
import CustomBox from '@/utils/CustomBox';
import CustomButton from '@/utils/Custombutton';
import { Container, Grid, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import React, { useState } from 'react';
import Food from '../Food';

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
  const [foods, setFoods] = useState<IFeaturePosts[]>(FeaturedPosts);

  return (
    <Typography
      component='div'
      sx={{ background: '#FFF9F1', padding: '80px 0' }}
    >
      <Container maxWidth='xl'>
        <CustomBox sx={{ justifyContent: 'space-between' }}>
          <Typography variant='h1'>Popular food Recipes</Typography>
          <SearchBar />
        </CustomBox>

        <Grid container spacing={4} sx={{ paddingTop: '50px' }}>
          <Grid item xs={12} md={3}>
            <CustomBox
              sx={{
                justifyContent: 'center',
                flexDirection: 'column',
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
            <CustomBox
              sx={{
                marginTop: '50px',
                justifyContent: 'space-between'
              }}
            >
              <Grid container spacing={6}>
                {foods?.map((food: IFeaturePosts) => (
                  <Food key={food?.id} food={food} />
                ))}
              </Grid>
            </CustomBox>

            <CustomBox sx={{ justifyContent: 'center', marginTop: '50px' }}>
              <CustomButton
                variant='contained'
                sx={{ textAlign: { xs: 'center', md: 'left' } }}
              >
                View All
              </CustomButton>
            </CustomBox>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}

export default PopularRecipies;
