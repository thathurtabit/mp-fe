import React, { Component, Fragment, Suspense, lazy } from 'react';
import 'whatwg-fetch';
import memoize from 'memoize-one';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loading from '../../1-atoms/Loading/Loading';
import { storeResponse } from '../../../state/actions/storeResponse';
import { NoTitle, NoDesc } from '../../../utils/constants/constants';
import Intro from '../../1-atoms/Intro/Intro';
import SearchBar from '../../2-molecules/SearchBar/SearchBar';
import { upperCaseIncludes } from '../../../utils/helpers/upperCaseIncludes';

// Lazy load components
const Error = lazy(() => import('../../2-molecules/Error/Error'));
const NoItems = lazy(() => import('../../2-molecules/NoItems/NoItems'));
const CardList = lazy(() => import('../../3-organisms/CardList/CardList'));

const mapStateToProps = state => ({
  products: state.response,
  api: state.api,
  searchValue: state.searchValue,
});

const mapDispatchToProps = dispatch => ({
  storeResponse: arr => dispatch(storeResponse(arr)),
});

class Home extends Component {
  constructor(props) {
    super(props);

    this.mounted = false;
    this.memoizedFilter = this.memoizedFilter.bind(this);

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
      fetch(api, { credentials: 'same-origin', method: 'GET' })
        .then(response => response.json())
        .then(data => this.handleFetchData(data))
        .catch(error => this.handleFetchError(error));
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  memoizedFilter = memoize((products, searchValue) =>
    products.filter(res => upperCaseIncludes(res.title, searchValue))
  );

  handleFetchData(data) {
    const { storeResponse, products, searchValue } = this.props;

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
      // Filter by search term
      const filteredSelection = responseSelection.filter(res =>
        upperCaseIncludes(res.title, searchValue)
      );

      console.log('searchValue: ', searchValue.length);

      // set to Redux state
      storeResponse(searchValue.length ? filteredSelection : responseSelection);
    }
  }

  handleFetchError(error) {
    this.setState({ error: true });
    console.warn(error);
  }

  render() {
    const { error } = this.state;
    const { products, searchValue } = this.props;
    const filteredProducts = this.memoizedFilter(products, searchValue);

    return (
      <Fragment>
        <Suspense fallback={<Loading loading />}>
          {error ? (
            <Error error="It's not you, it's us." />
          ) : products !== null && products.length ? (
            <Fragment>
              <SearchBar />
              <Intro />
              <CardList products={filteredProducts} />
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
  searchValue: PropTypes.string,
  storeResponse: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    )
  ).isRequired,
};

Home.defaultProps = {
  searchValue: null,
};
