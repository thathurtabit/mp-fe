import React from 'react';
import PropTypes from 'prop-types';
import CardThumbStyled from './CardThumb.styled';

const CardThumb = ({ card }) => <CardThumbStyled>{card.Title}</CardThumbStyled>;

export default CardThumb;

CardThumb.propTypes = {
  card: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.objectOf(
      PropTypes.objectOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      )
    ),
  ]).isRequired,
};
