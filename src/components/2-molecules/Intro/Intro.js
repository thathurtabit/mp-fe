import React from 'react';
import IntroStyled from './Intro.styled';
import {splitSpanString} from '../../../utils/helpers/splitSpanString';

const Intro = () => <IntroStyled>{splitSpanString('Welcome to Moonpig')}</IntroStyled>;

export default Intro;