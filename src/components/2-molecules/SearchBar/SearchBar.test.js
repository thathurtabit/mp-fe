import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import { shallowWithTheme } from '../../../utils/test_config/testHelpers';
import SearchBar from './SearchBar.styled';

describe('SearchBar test', () => {
  it('should render correctly', () => {
    const element = shallowWithTheme(<SearchBar />);
    expect(shallowToJson(element)).toMatchSnapshot();
  });
});
