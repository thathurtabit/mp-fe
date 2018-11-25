import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import { shallowWithTheme } from '../../../utils/test_config/testHelpers';

import ThumbIMG from './ThumbIMG';

describe('ThumbIMG', () => {
  it('should render correctly', () => {
    const element = shallowWithTheme(
      <ThumbIMG url="myURL" title="Test title" />
    );
    expect(shallowToJson(element)).toMatchSnapshot();
  });
});
