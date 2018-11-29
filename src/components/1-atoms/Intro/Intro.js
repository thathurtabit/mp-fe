import React from 'react';
import IntroStyled from './Intro.styled';
import { splitSpanString } from '../../../utils/helpers/splitSpanString';

const Intro = () => (
  <IntroStyled>Welcome to {splitSpanString('moonpig')}</IntroStyled>
);

export default Intro;
