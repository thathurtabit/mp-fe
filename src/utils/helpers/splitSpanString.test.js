import { splitSpanString } from './splitSpanString';

const testString = 'Test String';
const testStringLength = testString.length;

describe('Test my splitAndSpanString', () => {
  it('Should exist', () => {
    expect(typeof splitSpanString(testString)).toBe('object');
  });
});
