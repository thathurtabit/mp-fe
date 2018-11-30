import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import { shallowWithTheme } from '../../../utils/test_config/testHelpers';

import Return from './Return';

describe('Return', () => {
  it('should render correctly', () => {
    const element = shallowWithTheme(<Return text="Return" />);
    expect(shallowToJson(element)).toMatchSnapshot();
  });
});
