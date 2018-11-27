import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import { shallowWithTheme } from '../../../utils/test_config/testHelpers';

import Button from './Button';

describe('Button', () => {
  it('should render correctly', () => {
    const element = shallowWithTheme(<Button title="title" url="url" />);
    expect(shallowToJson(element)).toMatchSnapshot();
  });
});
