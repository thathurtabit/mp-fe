import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyled from './Button.styled';

const Button = ({ title, url, external }) => (
  <ButtonStyled href={url} title={title} {...external && 'target="_blank"'}>
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
