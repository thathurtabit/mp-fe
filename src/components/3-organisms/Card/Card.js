import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import CardStyled, {CardContent} from './Card.styled';
import {loadDelay} from '../../../utils/constants/constants';
import PageTitle from '../../1-atoms/PageTitle/PageTitle';
import CardImage from '../../1-atoms/CardImage/CardImage';

const Card = ({product}) => (
  <Fragment>
    <TransitionGroup>
      <CSSTransition
            classNames="card"
            appear
            timeout={loadDelay}
          >
        <CardStyled className="card">
          <CardContent>
            <PageTitle title={product.Title} />
            <CardImage url={product.ProductImage.Link.Href} alt={product.Title}/>
          </CardContent>
        </CardStyled>
      </CSSTransition>
    </TransitionGroup>
  </Fragment>
);

export default Card;

Card.propTypes = {
  product: PropTypes.objectOf(PropTypes.string).isRequired,
}