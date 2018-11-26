import React, { Component, Fragment, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import RoutesTransition, { Content } from './Routes.styled';
import { loadDelay } from '../../../utils/constants/constants';
import Loading from '../../1-atoms/Loading/Loading';

// Use React.lazy for lazyload / code splitting
const Home = lazy(() => import('../../5-pages/Home/Home'));
const Error = lazy(() => import('../../2-molecules/Error/Error'));
const CardModal = lazy(() => import('../../3-organisms/CardModal/CardModal'));

const mapStateToProps = state => ({
  loading: state.loading,
});

class Routes extends Component {
  constructor(props) {
    super(props);
    this.previousLocation = props.location;
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;

    // set previousLocation if props.location is not modal
    if (
      prevProps.history.action !== "POP" &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = location;
    }
  }

  render() {
    const { location, loading } = this.props;
    const locationPath = location.pathname;
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    ); // not initial render
  
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition
            key={locationPath}
            in={!loading}
            classNames="fade"
            appear
            timeout={loadDelay}
          >
            <RoutesTransition className="fade">
              <Content>
                <Suspense fallback={<Loading />}>
                  <Switch location={isModal ? this.previousLocation : location}>
                    <Route exact path="/" component={() => <Home />} />
                    <Route path="/card/:id" component={() => <CardModal location={location} />} />
                    <Route
                      component={() => <Error error="404: Page not found" />}
                    />
                  </Switch>
                </Suspense>
              </Content>
            </RoutesTransition>
          </CSSTransition>
        </TransitionGroup>
        <Suspense fallback={<Loading />}>
          {isModal && <Route path="/card/:id" component={() => <CardModal location={location} />} />}
        </Suspense>
      </Fragment>
    );
  }
};

export default connect(mapStateToProps)(Routes);

Routes.propTypes = {
  loading: PropTypes.bool.isRequired,
  location: PropTypes.objectOf(PropTypes.string).isRequired,
};
