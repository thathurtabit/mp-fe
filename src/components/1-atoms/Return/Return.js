import React from 'react';
import PropTypes from 'prop-types';
import ReturnStyled from './Return.styled';

const Return = ({ text }) => <ReturnStyled to="/">{text}</ReturnStyled>;

export default Return;

Return.propTypes = {
  text: PropTypes.string.isRequired,
};
