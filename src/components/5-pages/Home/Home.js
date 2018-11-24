import React, { Component, Fragment, Suspense, lazy } from 'react';
import 'whatwg-fetch';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { onLoad } from '../../../state/actions/onLoad';
import Loading from '../../1-atoms/Loading/Loading';

// Lazy load components
const Error = lazy(() => import('../../2-molecules/Error/Error'));
const NoItems = lazy(() => import('../../2-molecules/NoItems/NoItems'));
const CardList = lazy(() => import('../../3-organisms/CardList/CardList'));

const mapStateToProps = state => ({
  loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
  onLoad: bool => dispatch(onLoad(bool)),
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.apiURL =
      // 'https://search.moonpig.com/api/products?size=12&searchFacets=occasion_level_3:occasion%3Ewell%20done%3Enew%20job';
      this.apiURL = 'https://localhost:3000/api/response.json';

    // Init state
    this.state = {
      error: false,
      products: [{}],
    };
    this.mounted = false;
  }

  componentDidMount() {
    this.mounted = true;
    const { loading, onLoad } = this.props;
    this.handleFetchData = this.handleFetchData.bind(this);
    this.handleFetchError = this.handleFetchError.bind(this);

    fetch(this.apiURL)
      .then(response => response.json())
      .then(data => this.handleFetchData(data, loading, onLoad))
      .catch(error => this.handleFetchError(error, loading, onLoad));
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  handleFetchData(data, loading, onLoad) {
    if (loading) onLoad(false);

    console.log(data.Products.filter(product => product.Title));

    if (this.mounted) {
      this.setState({
        products: data.Products.filter(product => product.Title),
      });
    }
  }

  handleFetchError(error, loading, onLoad) {
    this.setState({ error: true });
    if (loading) onLoad(false);
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

Home.propTypes = {
  loading: PropTypes.bool.isRequired,
};
