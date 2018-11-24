import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoaderStyled, { Outer, Inner } from './Loading.styled';

const mapStateToProps = state => ({
  loading: state.loading,
});

const Loading = ({ loading }) => (
  <LoaderStyled loading={loading} aria-label="Loading">
    <Outer>
      <Inner />
    </Outer>
  </LoaderStyled>
);

export default connect(mapStateToProps)(Loading);

Loading.propTypes = {
  loading: PropTypes.bool,
};

Loading.defaultProps = {
  loading: false,
};
