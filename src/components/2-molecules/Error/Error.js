import React from 'react';
import PropTypes from 'prop-types';
import ErrorStyled, { Content, Emoji } from './Error.styled';
import PageTitle from '../../1-atoms/PageTitle/PageTitle';
import { ErrorTitle } from '../../../utils/constants/constants';

const Error = ({ error }) => (
  <ErrorStyled>
    {/* eslint-disable jsx-a11y/accessible-emoji */}
    <Emoji role="img" aria-label={error}>
      ☄️
    </Emoji>
    {/* eslint-enable jsx-a11y/accessible-emoji */}
    <PageTitle title={ErrorTitle} />
    <Content>
      <p>{error}</p>
    </Content>
  </ErrorStyled>
);
export default Error;

Error.propTypes = {
  error: PropTypes.string.isRequired,
};
