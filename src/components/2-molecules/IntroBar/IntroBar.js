import React from 'react';
import IntroBarStyled from './IntroBar.styled';
import Intro from '../../1-atoms/Intro/Intro';
import SearchInfo from '../../1-atoms/SearchInfo/SearchInfo';

const IntroBar = () => (
  <IntroBarStyled>
    <Intro />
    <SearchInfo />
  </IntroBarStyled>
);

export default IntroBar;
