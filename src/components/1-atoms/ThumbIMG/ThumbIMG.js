import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import IMG from './ThumbIMG.styled';
import LoadingSmall from '../LoadingSmall/LoadingSmall';
import { loadDelay } from '../../../utils/constants/constants';

export default class ThumbIMG extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    // Only show images once load has complete
    // Note: Must be a prettier way of doing this
    const img = new Image();
    const { url } = this.props;
    img.src = url;
    img.onload = () => this.setState({ loading: false });
  }

  render() {
    const { loading } = this.state;
    const { title, url } = this.props;
    return (
      <Fragment>
        {loading && <LoadingSmall />}
        {!loading && (
          <TransitionGroup>
            <CSSTransition
              in={!loading}
              classNames="thumb"
              appear
              timeout={loadDelay}
            >
              <IMG className="thumb" src={url} alt={title} />
            </CSSTransition>
          </TransitionGroup>
        )}
      </Fragment>
    );
  }
}

ThumbIMG.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
