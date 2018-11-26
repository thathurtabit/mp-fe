import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import CardThumbStyled, { CardLink } from './CardThumb.styled';
import LoadingSmall from '../../1-atoms/LoadingSmall/LoadingSmall';

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
          key={productId}
          to={{
            pathname: `/card/${productId}`,
            state: { modal: true }
          }}
          tabIndex="0"
          title={title}
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
