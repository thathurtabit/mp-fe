import React, { Component, Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CardSingleStyled from './CardSingle.styled';
import Loading from '../../1-atoms/Loading/Loading';
import { NoTitle, NoDesc } from '../../../utils/constants/constants';

const Error = lazy(() => import('../../2-molecules/Error/Error'));
const NoItems = lazy(() => import('../../2-molecules/NoItems/NoItems'));
const Card = lazy(() => import('../../3-organisms/Card/Card'));

const mapStateToProps = state => ({
  api: state.api,
  products: state.response,
});

export class CardSingle extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, error: false };
  }

  componentDidMount() {
    this.mounted = true;
    this.handleFetchData = this.handleFetchData.bind(this);
    this.handleFetchError = this.handleFetchError.bind(this);

    const { api, products } = this.props;

    if (!products.length && this.mounted) {
      fetch(api, {credentials: 'same-origin', method: 'GET'})
        .then(response => response.json())
        .then(data => this.handleFetchData(data))
        .catch(error => this.handleFetchError(error));
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  handleFetchData(data) {
    const { location, products } = this.props;
    const productId = location
      .split('/')
      .filter(loc => loc)
      .pop();

    if (this.mounted && !products.length) {
      // Filter out single Card
      const productSingle =
        data.Products.filter(prod => prod.MoonpigProductNo === productId)[0] ||
        null;
      // Keep what we need
      const product = {
        title: productSingle.Title || NoTitle,
        desc: productSingle.ShortDescription || NoDesc,
        imgSrc: productSingle.ProductImage.Link.Href,
        id: productSingle.ProductId,
        productNo: productSingle.MoonpigProductNo,
        link: '/',
      };

      this.setState({ product, loading: false });
    }
  }

  handleFetchError(error) {
    this.setState({ error: true });
    console.warn(error);
  }

  render() {
    const { loading, product, error } = this.state;

    return (
      <CardSingleStyled>
        {loading && <Loading loading />}
        <Suspense fallback={<Loading loading={loading} />}>
          {error ? (
            <Error error="It's not you, it's us." />
          ) : product !== null ? (
            <Card product={product} />
          ) : (
            <NoItems text="No items found." />
          )}
        </Suspense>
      </CardSingleStyled>
    );
  }
}

export default connect(mapStateToProps)(CardSingle);

CardSingle.propTypes = {
  location: PropTypes.string.isRequired,
  api: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.object,
      ])
    )
  ),
};

CardSingle.defaultProps = {
  products: [],
};
