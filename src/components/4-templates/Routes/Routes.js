import React, { Fragment, Suspense, lazy } from 'react';
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

const mapStateToProps = state => ({
  loading: state.loading,
});

const Routes = ({ ...props }) => {
  const { location, loading } = props;
  const locationPath = location.pathname;

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
                <Switch location={location}>
                  <Route exact path="/" component={() => <Home />} />
                  <Route
                    component={() => <Error error="404: Page not found" />}
                  />
                </Switch>
              </Suspense>
            </Content>
          </RoutesTransition>
        </CSSTransition>
      </TransitionGroup>
    </Fragment>
  );
};

export default connect(mapStateToProps)(Routes);

Routes.propTypes = {
  loading: PropTypes.bool.isRequired,
  location: PropTypes.objectOf(PropTypes.string).isRequired,
};
