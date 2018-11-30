import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import { shallowWithTheme, mountWithTheme } from '../../../utils/test_config/testHelpers';

import Button from './Button';

const title = 'test title';
const url = 'https://mytesturl.io';

describe('Button', () => {
  it('should render correctly', () => {
    const element = shallowWithTheme(<Button title={title} url={url} />);
    expect(shallowToJson(element)).toMatchSnapshot();
  });

  it('should return the correct content', () => {
    const element = mountWithTheme(<Button title={title} url={url} />);
    expect(element.text()).toBe(title);
    expect(element.find('a').prop('href')).toEqual(url)
  });
});
