import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchBarStyled, {
  SearchBarInput,
  SearchBarSubmit,
} from './SearchBar.styled';
import SearchIcon from '../../1-atoms/SearchIcon/SearchIcon';
import { SearchPlaceholder } from '../../../utils/constants/constants';
import { setSearch } from '../../../state/actions/setSearch';

const mapStateToProps = state => ({
  searchValue: state.searchValue,
});

const mapDispatchToProps = dispatch => ({
  setSearch: string => dispatch(setSearch(string)),
});

class SearchBar extends Component {
  constructor(props) {
    super(props);

    const { searchValue } = props;

    this.state = { value: searchValue };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { setSearch } = this.props;
    const { value } = event.target;
    this.setState({ value });
    setSearch(value);
  }

  handleSubmit(event) {
    const { setSearch } = this.props;
    const { value } = this.state;
    console.log('Search term: ', value);

    setSearch(value);
    event.preventDefault();
  }

  render() {
    const { value } = this.state;
    return (
      <SearchBarStyled role="search" onSubmit={this.handleSubmit}>
        <SearchBarInput
          type="search"
          tabIndex="-1"
          placeholder={SearchPlaceholder}
          aria-label="Search cards"
          value={value}
          onChange={this.handleChange}
        />
        <SearchBarSubmit type="submit" aria-label="Submit">
          <SearchIcon width="20" height="20" title="Search" />
        </SearchBarSubmit>
      </SearchBarStyled>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);

SearchBar.propTypes = {
  setSearch: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
};
