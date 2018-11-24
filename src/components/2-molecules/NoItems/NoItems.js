import React from 'react';
import PropTypes from 'prop-types';
import NoItemsStyled, { Content, Emoji } from './NoItems.styled';
import PageTitle from '../../1-atoms/PageTitle/PageTitle';
import { NoItemsTitle } from '../../../utils/constants/constants';

const NoItems = ({ text }) => (
  <NoItemsStyled>
    {/* eslint-disable jsx-a11y/accessible-emoji */}
    <Emoji role="img" aria-label="Server problem">
      🥣
    </Emoji>
    {/* eslint-enable jsx-a11y/accessible-emoji */}
    <PageTitle title={NoItemsTitle} />
    <Content>
      <p>{text}</p>
    </Content>
  </NoItemsStyled>
);
export default NoItems;

NoItems.propTypes = {
  text: PropTypes.string.isRequired,
};
