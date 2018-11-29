import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import uuidv1 from 'uuid/v1';
import { CSSTransition } from 'react-transition-group';
import CardThumb from '../../2-molecules/CardThumb/CardThumb';
import CardListStyled from './CardList.styled';
import { loadDelay } from '../../../utils/constants/constants';

const CardList = ({ products }) => (
  <Fragment>
    <CSSTransition classNames="cards-in" appear timeout={loadDelay}>
      <CardListStyled id="card-list" className="cards-in">
        {products.map((product, index) => (
          <CardThumb num={index} key={uuidv1()} product={product} />
        ))}
      </CardListStyled>
    </CSSTransition>
  </Fragment>
);

export default CardList;

CardList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.string).isRequired,
};
