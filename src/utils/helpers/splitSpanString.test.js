import { splitSpanString } from './splitAndSpanString';

describe('Test my splitAndSpanString', () => {
  it('Should exist', () => {
    expect(typeof splitSpanString('test')).toBe('object');
  });
});
