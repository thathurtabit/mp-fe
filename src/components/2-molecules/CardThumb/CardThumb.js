import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import 'intersection-observer';
import { InView } from 'react-intersection-observer';
import CardThumbStyled, { CardLink } from './CardThumb.styled';
import LoadingSmall from '../../1-atoms/LoadingSmall/LoadingSmall';
import { toggleModal } from '../../../state/actions/toggleModal';

const LazyThumb = lazy(() => import('../../1-atoms/CardImage/CardImage'));

const mapStateToProps = state => ({
  modalOpen: state.modalOpen,
});

const mapDispatchToProps = dispatch => ({
  toggleModal: bool => dispatch(toggleModal(bool)),
});

const CardThumb = ({ product, modalOpen, toggleModal, num }) => {
  const { title, imgSrc, id, productNo } = product;
  const body = document.querySelector('body');

  // Breaking out of React
  if (modalOpen) {
    body.setAttribute('style', 'overflow-y: hidden;');
  } else {
    body.setAttribute('style', 'overflow-y: scroll;');
  }

  return (
    <InView>
      {({ inView, ref }) => (
        <CardThumbStyled ref={ref}>
          {inView && (
            <Suspense key={id} fallback={<LoadingSmall />}>
              <CardLink
                id={`card-thumb-${num}`}
                key={id}
                to={{
                  pathname: `/card/${productNo}`,
                  state: { modal: true },
                }}
                tabIndex="0"
                title={title}
                onClick={() => toggleModal(true)}
              >
                <LazyThumb url={imgSrc} title={title} thumb />
              </CardLink>
            </Suspense>
          )}
        </CardThumbStyled>
      )}
    </InView>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardThumb);

CardThumb.propTypes = {
  modalOpen: PropTypes.bool,
  toggleModal: PropTypes.func.isRequired,
  product: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
};

CardThumb.defaultProps = {
  modalOpen: false,
};
