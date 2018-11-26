import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import { shallowWithTheme } from '../../../utils/test_config/testHelpers';
import { CloseModal } from './CloseModal';

const mockClickCallback = jest.fn();

describe('CloseModal', () => {
  it('should render correctly', () => {
    const element = shallowWithTheme(<CloseModal toggleModal={() => {}} />);
    expect(shallowToJson(element)).toMatchSnapshot();
  });

  it('should handle clickEvent', () => {
    const element = shallowWithTheme(
      <CloseModal onClick={mockClickCallback} toggleModal={() => {}} />
    );
    element.simulate('click');
    expect(mockClickCallback).toHaveBeenCalledTimes(1);
  });
});
