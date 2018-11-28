import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import CardStyled, {
  CardContent,
  ShortDescription,
  CardLeft,
  CardRight,
} from './Card.styled';
import { loadDelay, NoDesc, NoTitle } from '../../../utils/constants/constants';
import PageTitle from '../../1-atoms/PageTitle/PageTitle';
import CardImage from '../../1-atoms/CardImage/CardImage';
import Button from '../../1-atoms/Button/Button';
import { BuyText } from '../../../utils/constants/constants';

const Card = ({ product }) => (
  <Fragment>
    <TransitionGroup>
      <CSSTransition classNames="card" appear timeout={loadDelay}>
        <CardStyled className="card">
          <CardContent>
            <CardRight>
              <PageTitle title={product.title || NoTitle} />
              <ShortDescription>{product.desc || NoDesc}</ShortDescription>
              <Button
                tabIndex="0"
                title={BuyText}
                url={product.link}
                external
              />
            </CardRight>
            <CardLeft>
              <CardImage
                url={product.imgSrc}
                title={product.title || NoTitle}
              />
            </CardLeft>
          </CardContent>
        </CardStyled>
      </CSSTransition>
    </TransitionGroup>
  </Fragment>
);

export default Card;

Card.propTypes = {
  product: PropTypes.objectOf(PropTypes.string).isRequired,
};
