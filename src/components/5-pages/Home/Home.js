import React, { Component, Fragment, Suspense, lazy } from 'react';
import 'whatwg-fetch';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loading from '../../1-atoms/Loading/Loading';
import { storeResponse } from '../../../state/actions/storeResponse';
import { NoTitle, NoDesc } from '../../../utils/constants/constants';

// Lazy load components
const Error = lazy(() => import('../../2-molecules/Error/Error'));
const NoItems = lazy(() => import('../../2-molecules/NoItems/NoItems'));
const CardList = lazy(() => import('../../3-organisms/CardList/CardList'));

const mapStateToProps = state => ({
  products: state.response,
  api: state.api,
});

const mapDispatchToProps = dispatch => ({
  storeResponse: arr => dispatch(storeResponse(arr)),
});

class Home extends Component {
  constructor(props) {
    super(props);

    this.mounted = false;

    // Init state
    this.state = {
      error: false,
    };
  }

  componentDidMount() {
    this.mounted = true;
    this.handleFetchData = this.handleFetchData.bind(this);
    this.handleFetchError = this.handleFetchError.bind(this);

    const { api, products } = this.props;

    if (!products.length && this.mounted) {
      fetch(api)
        .then(response => response.json())
        .then(data => this.handleFetchData(data))
        .catch(error => this.handleFetchError(error));
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  handleFetchData(data) {
    const { storeResponse, products } = this.props;

    if (this.mounted && !products.length) {
      // Filter out duplicates
      const response = Object.values(
        data.Products.reduce(
          (acc, cur) => Object.assign(acc, { [cur.ProductId]: cur }),
          {}
        )
      );
      // Keep only what we need
      const responseSelection = response.map(res => ({
        title: res.Title || NoTitle,
        desc: res.ShortDescription || NoDesc,
        imgSrc: res.ProductImage.Link.Href,
        id: res.ProductId,
        productNo: res.MoonpigProductNo,
        link: '/',
      }));
      // set to Redux state
      storeResponse(responseSelection);
    }
  }

  handleFetchError(error) {
    this.setState({ error: true });
    console.warn(error);
  }

  render() {
    const { error } = this.state;
    const { products } = this.props;
    return (
      <Fragment>
        <Suspense fallback={<Loading loading />}>
          {error ? (
            <Error error="It's not you, it's us." />
          ) : products !== null && products.length ? (
            <Fragment>
              <CardList products={products} />
            </Fragment>
          ) : (
            <NoItems text="No items to view." />
          )}
        </Suspense>
      </Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

Home.propTypes = {
  api: PropTypes.string.isRequired,
  storeResponse: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    )
  ).isRequired,
};
