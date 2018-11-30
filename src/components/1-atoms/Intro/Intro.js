import React from 'react';
import IntroStyled from './Intro.styled';
import { splitSpanString } from '../../../utils/helpers/splitSpanString';

const Intro = () => (
  <IntroStyled>Celebrate a {splitSpanString('new job')}</IntroStyled>
);

export default Intro;
