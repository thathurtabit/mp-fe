import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchInfoStyled, { Quote, Span } from './SearchInfo.styled';

const mapStateToProps = state => ({
  searchValue: state.searchValue,
  total: state.productCount,
});

const SearchInfo = ({ searchValue, total }) => {
  const content = () => {
    if (searchValue.length) {
      return (
        <SearchInfoStyled>
          <Quote>{searchValue}</Quote> has <Span>{total}</Span> results
        </SearchInfoStyled>
      );
    }
    return (
      <SearchInfoStyled>
        Showing <Span>{total}</Span> results
      </SearchInfoStyled>
    );
  };
  return content();
};

export default connect(mapStateToProps)(SearchInfo);

SearchInfo.propTypes = {
  total: PropTypes.number.isRequired,
  searchValue: PropTypes.string,
};

SearchInfo.defaultProps = {
  searchValue: null,
};
