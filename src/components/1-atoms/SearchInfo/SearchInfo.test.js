import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import { shallowWithTheme } from '../../../utils/test_config/testHelpers';

import SearchInfo from './SearchInfo';

describe('SearchInfo', () => {
  it('should render correctly', () => {
    const element = shallowWithTheme(<SearchInfo />);
    expect(shallowToJson(element)).toMatchSnapshot();
  });
});
