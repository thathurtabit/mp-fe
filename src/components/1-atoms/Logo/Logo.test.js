import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import {
  shallowWithTheme,
  mountWithTheme,
} from '../../../utils/test_config/testHelpers';

import Logo from './Logo';

const title = 'test title';

describe('Logo', () => {
  it('should render correctly', () => {
    const element = shallowWithTheme(<Logo title={title} />);
    expect(shallowToJson(element)).toMatchSnapshot();
  });

  it('should return title attr correctly', () => {
    const element = mountWithTheme(<Logo title={title} />);
    expect(element.find('title').text()).toEqual(title);
  });
});
