import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import { shallowWithTheme, mountWithTheme } from '../../../utils/test_config/testHelpers';

import CardImage from './CardImage';
import { delay } from 'bluebird';

const title = 'test title';
const url = 'https://mytesturl.io';

describe('CardImage', () => {
  it('should render correctly', () => {
    const element = shallowWithTheme(
      <CardImage url={url} title={title} />
    );
    expect(shallowToJson(element)).toMatchSnapshot();
  });

  it('should return the correct content', () => {
    const element = mountWithTheme(<CardImage loading={false} url={url} title={title} />);
    element.update();

    delay(100).then(() => {
      expect(element.find('img').prop('alt')).toEqual(title);
      expect(element.find('img').prop('src')).toEqual('balls');
    });

  });
});
