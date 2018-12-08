import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import {
  shallowWithTheme,
  mountWithTheme,
} from '../../../utils/test_config/testHelpers';

import SearchIcon from './SearchIcon';

const title = 'test title';

describe('SearchIcon', () => {
  it('should render correctly', () => {
    const element = shallowWithTheme(
      <SearchIcon width="20" height="20" title={title} />
    );
    expect(shallowToJson(element)).toMatchSnapshot();
  });

  it('should return title attr correctly', () => {
    const element = mountWithTheme(
      <SearchIcon width="20" height="20" title={title} />
    );
    expect(element.find('title').text()).toEqual(title);
  });
});
