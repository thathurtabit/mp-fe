import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import { shallowWithTheme } from '../../../utils/test_config/testHelpers';

import Card from './Card';

describe('Card', () => {
  it('should render correctly', () => {
    const element = shallowWithTheme(
      <Card product={{}} />
    );
    expect(shallowToJson(element)).toMatchSnapshot();
  });
});
