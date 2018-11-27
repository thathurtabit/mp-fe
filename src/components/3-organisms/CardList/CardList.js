import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import uuidv1 from 'uuid/v1';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import CardThumb from '../../2-molecules/CardThumb/CardThumb';
import CardListStyled from './CardList.styled';
import { loadDelay } from '../../../utils/constants/constants';

export default class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.delay = ''; // Used for smooth transtiona after lazy loading
  }

  componentDidMount() {
    this.delay = setTimeout(
      () => this.setState({ show: true, modalActive: true }),
      loadDelay
    );
  }

  componentWillUnmount() {
    clearTimeout(this.delay);
  }

  render() {
    const { products } = this.props;
    const { show } = this.state;
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition
            in={show}
            classNames="cards-in"
            appear
            timeout={loadDelay}
          >
            <CardListStyled className="cards-in">
              {products.map(product => (
                <CardThumb key={uuidv1()} product={product} />
              ))}
            </CardListStyled>
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
  }
}

CardList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.string).isRequired,
};
