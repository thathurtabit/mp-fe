import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import {
  shallowWithTheme,
  mountWithTheme,
} from '../../../utils/test_config/testHelpers';

import PageTitle from './PageTitle';
import {NoTitle} from '../../../utils/constants/constants';

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

  it('should return the default text when no value supplied', () => {
    const element = mountWithTheme(<PageTitle />);
    expect(element.text()).toBe(NoTitle);
  });
});
