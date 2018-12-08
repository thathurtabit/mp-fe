import { upperCaseIncludes } from './upperCaseIncludes';

const testString1 = 'Test String';
const testString2 = 'NOPE';
const testString3 = 'est';

describe('Test my upperCaseIncludes func', () => {
  it('Should exist', () => {
    expect(typeof upperCaseIncludes).toBe('function');
  });

  it('Should return FALSE when str2 is not includes in str1', () => {
    expect(upperCaseIncludes(testString1, testString2)).toBeFalsy();
  });

  it('Should return TRUE when str2 is includes in str1', () => {
    expect(upperCaseIncludes(testString1, testString3)).toBeTruthy();
  });
});
