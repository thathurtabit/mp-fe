import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import { shallowWithTheme } from '../../../utils/test_config/testHelpers';

import Loading from './Loading';

describe('Loading', () => {
  it('should render correctly', () => {
    const element = shallowWithTheme(<Loading loading />);
    expect(shallowToJson(element)).toMatchSnapshot();
  });
});
