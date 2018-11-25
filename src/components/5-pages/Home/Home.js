import React, { Component, Fragment, Suspense, lazy } from 'react';
import 'whatwg-fetch';
import Loading from '../../1-atoms/Loading/Loading';

// Lazy load components
const Error = lazy(() => import('../../2-molecules/Error/Error'));
const NoItems = lazy(() => import('../../2-molecules/NoItems/NoItems'));
const CardList = lazy(() => import('../../3-organisms/CardList/CardList'));

class Home extends Component {
  constructor(props) {
    super(props);
    this.apiURL =
      // 'https://search.moonpig.com/api/products?size=12&searchFacets=occasion_level_3:occasion%3Ewell%20done%3Enew%20job'; - CORB error
      this.apiURL = 'https://localhost:3000/api/response.json';

    // Init state
    this.state = {
      error: false,
      products: [],
    };
    this.mounted = false;
  }

  componentDidMount() {
    this.mounted = true;
    this.handleFetchData = this.handleFetchData.bind(this);
    this.handleFetchError = this.handleFetchError.bind(this);

    const { products } = this.state;

    if (!products.length) {
      fetch(this.apiURL)
        .then(response => response.json())
        .then(data => this.handleFetchData(data))
        .catch(error => this.handleFetchError(error));
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  handleFetchData(data) {
    const { products } = this.state;

    if (this.mounted && !products.length) {
      // Filter out duplicates and setState
      this.setState({
        products: Object.values(
          data.Products.reduce(
            (acc, cur) => Object.assign(acc, { [cur.ProductId]: cur }),
            {}
          )
        ),
      });
    }
  }

  handleFetchError(error) {
    this.setState({ error: true });
    console.warn(error);
  }

  render() {
    const { error, products } = this.state;
    return (
      <Fragment>
        <Suspense fallback={<Loading loading />}>
          {error ? (
            <Error error="It's not you, it's us." />
          ) : products !== null && products.length ? (
            <CardList products={products} />
          ) : (
            <NoItems text="No items to view." />
          )}
        </Suspense>
      </Fragment>
    );
  }
}

export default Home;
