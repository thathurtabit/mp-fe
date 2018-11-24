import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import {
  shallowWithTheme,
  mountWithTheme,
} from '../../../utils/test_config/testHelpers';

import PageTitle from './PageTitle';

const Title = 'Test Title';

describe('PageTitle', () => {
  it('should render correctly', () => {
    const element = shallowWithTheme(<PageTitle title={Title} />);
    expect(shallowToJson(element)).toMatchSnapshot();
  });

  it('should return the correct text', () => {
    const element = mountWithTheme(<PageTitle title={Title} />);
    expect(element.text()).toBe(Title);
  });
});
