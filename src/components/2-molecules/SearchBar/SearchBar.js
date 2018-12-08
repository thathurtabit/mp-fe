import React from 'react';
import SearchBarStyled, {
  SearchBarInput,
  SearchBarSubmit,
} from './SearchBar.styled';
import SearchIcon from '../../1-atoms/SearchIcon/SearchIcon';
import { SearchPlaceholder } from '../../../utils/constants/constants';

const SearchBar = () => (
  <SearchBarStyled role="search">
    <SearchBarInput
      type="search"
      tabIndex="-1"
      placeholder={SearchPlaceholder}
      aria-label="Search cards"
    />
    <SearchBarSubmit type="submit" aria-label="Submit">
      <SearchIcon width="20" height="20" title="Search" />
    </SearchBarSubmit>
  </SearchBarStyled>
);

export default SearchBar;
