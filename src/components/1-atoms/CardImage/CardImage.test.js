import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import { shallowWithTheme } from '../../../utils/test_config/testHelpers';

import CardImage from './CardImage';

describe('CardImage', () => {
  it('should render correctly', () => {
    const element = shallowWithTheme(
      <CardImage url="myURL" title="Test title" />
    );
    expect(shallowToJson(element)).toMatchSnapshot();
  });
});
