import React from 'react';
import PropTypes from 'prop-types';
import uuidv1 from 'uuid/v1';
import CardThumb from '../../2-molecules/CardThumb/CardThumb';
import CardListStyled from './CardList.styled';

const CardList = ({ products }) => (
  <CardListStyled>
    {products.length
      ? products.map(product => <CardThumb key={uuidv1()} card={product} />)
      : 'Nothing to display'}
  </CardListStyled>
);

export default CardList;

CardList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

CardList.defaultProps = {
  products: [],
};
