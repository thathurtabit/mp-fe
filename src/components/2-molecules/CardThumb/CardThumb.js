import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import CardThumbStyled, { CardLink } from './CardThumb.styled';
import LoadingSmall from '../../1-atoms/LoadingSmall/LoadingSmall';
import CardModal from '../../3-organisms/CardModal/CardModal';

const CardThumb = ({ product }) => {
  const {
    Title: title,
    ProductImage: image,
    ProductId: id,
    MoonpigProductNo: productId,
  } = product;
  const { Href: imgURL } = image.Link;
  const LazyThumb = lazy(() => import('../../1-atoms/ThumbIMG/ThumbIMG'));

  return (
    <CardThumbStyled>
      <Suspense key={id} fallback={<LoadingSmall />}>
        <CardLink
          parentPath="/"
          path={`/card/${productId}`}
          component={CardModal}
        >
          <LazyThumb url={imgURL} title={title} />
        </CardLink>
      </Suspense>
    </CardThumbStyled>
  );
};

export default CardThumb;

CardThumb.propTypes = {
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
