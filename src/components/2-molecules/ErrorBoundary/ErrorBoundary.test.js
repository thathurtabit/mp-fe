import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import { shallowWithTheme } from '../../../utils/test_config/testHelpers';

import ErrorBoundary from './ErrorBoundary';

describe('ErrorBoundary', () => {
  it('should render correctly', () => {
    const element = shallowWithTheme(<ErrorBoundary />);
    expect(shallowToJson(element)).toMatchSnapshot();
  });
});
