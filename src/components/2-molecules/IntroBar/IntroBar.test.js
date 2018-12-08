import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import { shallowWithTheme } from '../../../utils/test_config/testHelpers';

import IntroBar from './IntroBar';

describe('IntroBar', () => {
  it('should render correctly', () => {
    const element = shallowWithTheme(<IntroBar />);
    expect(shallowToJson(element)).toMatchSnapshot();
  });
});
