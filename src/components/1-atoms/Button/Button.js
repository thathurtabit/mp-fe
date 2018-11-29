import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyled from './Button.styled';

const Button = ({ title, url }) => (
  <ButtonStyled tabIndex="0" data-buy-button href={url} title={title}>
    {title}
  </ButtonStyled>
);

export default Button;

Button.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  external: PropTypes.bool,
};

Button.defaultProps = {
  external: false,
};
