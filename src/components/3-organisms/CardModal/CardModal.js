import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import CardModalStyled, { CardModalBG } from './CardModal.styled';
import { loadDelay } from '../../../utils/constants/constants';
import CloseModal from '../../1-atoms/CloseModal/CloseModal';
import LoadingSmall from '../../1-atoms/LoadingSmall/LoadingSmall';

const mapStateToProps = state => ({
  products: state.response,
});

export class CardModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    const { location, products } = this.props;
    const productId = location.pathname
      .split('/')
      .filter(loc => loc)
      .pop();
    const productData = products.filter(
      product => product.MoonpigProductNo === productId
    )[0];

    this.setState({ product: productData, loading: false });
  }

  render() {
    const { product, loading } = this.state;

    return (
      <CardModalBG>
        <TransitionGroup>
          <CSSTransition classNames="modal-in" appear timeout={loadDelay}>
            <CardModalStyled
              role="dialog"
              aria-labelledby="modal-title"
              aria-modal="true"
              tabIndex="0"
              className="modal-in"
            >
              <CloseModal />
              {loading ? (
                <LoadingSmall loading />
              ) : (
                <Fragment>
                  <h1>{product.Title || 'Card'}</h1>
                  <img
                    src={product.ProductImage.Link.Href}
                    alt={product.Title}
                  />
                </Fragment>
              )}
            </CardModalStyled>
          </CSSTransition>
        </TransitionGroup>
      </CardModalBG>
    );
  }
}

export default connect(mapStateToProps)(CardModal);

CardModal.propTypes = {
  location: PropTypes.string.isRequired,
};
