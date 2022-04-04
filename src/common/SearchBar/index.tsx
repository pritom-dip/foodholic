import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/system';
import { InputBase } from '@mui/material';

const SearchWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  background: '#FEF3E3',
  padding: '0 10px',
  borderRadius: '68px'
});

const CustomSearchInput = styled(InputBase)({
  fontSize: '12px',
  color: '#A5A5A5'
});

function SearchBar() {
  return (
    <SearchWrapper>
      <SearchIcon sx={{ fontSize: '18px', marginRight: '10px' }} />
      <CustomSearchInput placeholder='Search' />
    </SearchWrapper>
  );
}

export default SearchBar;
