import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CardThumbStyled, { CardLink } from './CardThumb.styled';
import LoadingSmall from '../../1-atoms/LoadingSmall/LoadingSmall';
import { toggleModal } from '../../../state/actions/toggleModal';

const LazyThumb = lazy(() => import('../../1-atoms/ThumbIMG/ThumbIMG'));

const mapStateToProps = state => ({
  modalOpen: state.modalOpen,
});

const mapDispatchToProps = dispatch => ({
  toggleModal: bool => dispatch(toggleModal(bool)),
});

const CardThumb = ({ product, modalOpen, toggleModal }) => {
  const {
    Title: title,
    ProductImage: image,
    ProductId: id,
    MoonpigProductNo: productId,
  } = product;
  const { Href: imgURL } = image.Link;
  const body = document.querySelector('body');

  // Breaking out of React
  if (modalOpen) {
    body.setAttribute('style', 'overflow-y: hidden;');
  } else {
    body.setAttribute('style', 'overflow-y: auto;');
  }

  return (
    <CardThumbStyled>
      <Suspense key={id} fallback={<LoadingSmall />}>
        <CardLink
          key={productId}
          to={{
            pathname: `/card/${productId}`,
            state: { modal: true },
          }}
          tabIndex="0"
          title={title}
          onClick={() => toggleModal(true)}
        >
          <LazyThumb url={imgURL} title={title} />
        </CardLink>
      </Suspense>
    </CardThumbStyled>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardThumb);

CardThumb.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  product: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.objectOf(
      PropTypes.objectOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      )
    ),
  ]).isRequired,
};
