import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import { BrowserRouter } from 'react-router-dom';
import 'jest-styled-components';
import {
  shallowWithTheme,
  mountWithTheme,
} from '../../../utils/test_config/testHelpers';

import Return from './Return';

const mockClickCallback = jest.fn();
const returnText = 'Return title';

describe('Return', () => {
  it('should render correctly', () => {
    const element = shallowWithTheme(<Return text={returnText} />);
    expect(shallowToJson(element)).toMatchSnapshot();
  });

  it('should return the correct text', () => {
    const element = mountWithTheme(
      <BrowserRouter>
        <Return text={returnText} onClick={mockClickCallback} />
      </BrowserRouter>
    );
    expect(element.text()).toBe(returnText);
  });
});
