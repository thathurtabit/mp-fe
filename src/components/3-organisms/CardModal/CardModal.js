import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import CardModalStyled, { CardModalBG } from './CardModal.styled';
import {
  CardContent,
  ShortDescription,
  CardLeft,
  CardRight,
} from '../Card/Card.styled';
import {
  loadDelay,
  NoDesc,
  NoTitle,
  BuyText,
} from '../../../utils/constants/constants';
import CloseModal from '../../1-atoms/CloseModal/CloseModal';
import LoadingSmall from '../../1-atoms/LoadingSmall/LoadingSmall';
import PageTitle from '../../1-atoms/PageTitle/PageTitle';
import CardImage from '../../1-atoms/CardImage/CardImage';
import Button from '../../1-atoms/Button/Button';

const mapStateToProps = state => ({
  products: state.response,
});

export class CardModal extends Component {
  constructor(props) {
    super(props);

    this.modalRef = React.createRef();

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
      product => product.productNo === productId
    )[0];

    this.setState({ product: productData, loading: false });

    this.modalRef.current.focus();
  }

  render() {
    const { product, loading } = this.state;

    return (
      <CardModalBG>
        <TransitionGroup>
          <CSSTransition classNames="modal-in" appear timeout={loadDelay}>
            <CardModalStyled
              data-card-modal
              role="dialog"
              aria-labelledby="modal-title"
              aria-modal="true"
              tabIndex="0"
              className="modal-in"
              ref={this.modalRef}
            >
              <CloseModal />
              {loading ? (
                <LoadingSmall loading />
              ) : (
                <CardContent>
                  <CardRight>
                    <PageTitle title={product.title || NoTitle} />
                    <ShortDescription>
                      {product.desc || NoDesc}
                    </ShortDescription>
                    <Button title={BuyText} url={product.link} external />
                  </CardRight>
                  <CardLeft>
                    <CardImage url={product.imgSrc} title={product.title} />
                  </CardLeft>
                </CardContent>
              )}
            </CardModalStyled>
          </CSSTransition>
        </TransitionGroup>
      </CardModalBG>
    );
  }
}

export default connect(mapStateToProps)(CardModal);

CardModal.defaultProps = {
  location: null,
};
