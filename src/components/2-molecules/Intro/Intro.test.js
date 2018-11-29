import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import { shallowWithTheme } from '../../../utils/test_config/testHelpers';

import Intro from './Intro';

describe('Intro', () => {
  it('should render correctly', () => {
    const element = shallowWithTheme(<Intro />);
    expect(shallowToJson(element)).toMatchSnapshot();
  });
});
