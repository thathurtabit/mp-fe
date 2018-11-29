import { splitSpanString } from './splitSpanString';

const testString = 'Test String';

describe('Test my splitAndSpanString', () => {
  it('Should exist', () => {
    expect(typeof splitSpanString(testString)).toBe('object');
  });
});
