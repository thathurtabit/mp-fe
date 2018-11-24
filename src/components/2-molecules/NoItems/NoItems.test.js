import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import {
  shallowWithTheme,
  mountWithTheme,
} from '../../../utils/test_config/testHelpers';
import { ErrorTitle } from '../../../utils/constants/constants';

import Error from './Error';

describe('Error', () => {
  it('should render correctly', () => {
    const element = shallowWithTheme(<Error title={ErrorTitle} error="404" />);
    expect(shallowToJson(element)).toMatchSnapshot();
  });
  it('should render text correctly', () => {
    const element = mountWithTheme(<Error title={ErrorTitle} error="404" />);
    expect(element.find('h1').text()).toBe(ErrorTitle);
  });
});
