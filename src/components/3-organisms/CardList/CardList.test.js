import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import { shallowWithTheme } from '../../../utils/test_config/testHelpers';

import CardList from './CardList';

describe('CardList', () => {
  it('should render correctly', () => {
    const element = shallowWithTheme(
      <CardList
        products={[{ Title: 'Card Title 1' }, { Title: 'Card Title 2' }]}
      />
    );
    expect(shallowToJson(element)).toMatchSnapshot();
  });
});
