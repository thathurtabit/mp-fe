import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import CardStyled from './Card.styled';
import {loadDelay} from '../../../utils/constants/constants';

const Card = ({product}) => (
  <Fragment>
    <TransitionGroup>
      <CSSTransition
            classNames="card"
            appear
            timeout={loadDelay}
          >
        <CardStyled className="card">
          {product.Title || 'Card'}
          <img
            src={product.ProductImage.Link.Href}
            alt={product.Title}
          />
        </CardStyled>
      </CSSTransition>
    </TransitionGroup>
  </Fragment>
);

export default Card;

Card.propTypes = {
  product: PropTypes.objectOf(PropTypes.string).isRequired,
}