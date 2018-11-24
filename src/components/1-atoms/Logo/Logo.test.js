import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import { shallowWithTheme } from '../../../utils/test_config/testHelpers';

import Logo from './Logo';

describe('Logo', () => {
  it('should render correctly', () => {
    const element = shallowWithTheme(<Logo title="Test title" />);
    expect(shallowToJson(element)).toMatchSnapshot();
  });
});
