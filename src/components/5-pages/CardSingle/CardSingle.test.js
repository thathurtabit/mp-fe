import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import { shallowWithTheme } from '../../../utils/test_config/testHelpers';

import { CardSingle } from './CardSingle';

describe('CardSingle', () => {
  it('should render correctly', () => {
    const element = shallowWithTheme(<CardSingle location="url" api="api" />);
    expect(shallowToJson(element)).toMatchSnapshot();
  });
});
