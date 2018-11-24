import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import { shallowWithTheme } from '../../../utils/test_config/testHelpers';

import CardThumb from './CardThumb';

describe('CardThumb', () => {
  it('should render correctly', () => {
    const element = shallowWithTheme(
      <CardThumb card={{ Title: 'Card Title' }} />
    );
    expect(shallowToJson(element)).toMatchSnapshot();
  });
});
