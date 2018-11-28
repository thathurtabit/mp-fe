import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import { shallowWithTheme } from '../../../utils/test_config/testHelpers';
import { CloseModal } from './CloseModal';

describe('CloseModal', () => {
  it('should render correctly', () => {
    const element = shallowWithTheme(<CloseModal toggleModal={() => {}} />);
    expect(shallowToJson(element)).toMatchSnapshot();
  });
});
