import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import {
  shallowWithTheme,
  mountWithTheme,
} from '../../../utils/test_config/testHelpers';
import { NoItemsTitle } from '../../../utils/constants/constants';

import NoItems from './NoItems';

describe('NoItems', () => {
  it('should render correctly', () => {
    const element = shallowWithTheme(
      <NoItems title={NoItemsTitle} NoItems="404" text="This is some text" />
    );
    expect(shallowToJson(element)).toMatchSnapshot();
  });
  it('should render text correctly', () => {
    const element = mountWithTheme(
      <NoItems title={NoItemsTitle} NoItems="404" text="This is some text" />
    );
    expect(element.find('h1').text()).toBe(NoItemsTitle);
  });
});
