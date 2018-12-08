export const upperCaseIncludes = (str1, str2) => {
  const ONE = str1.toUpperCase();
  const TWO = str2.toUpperCase();
  return ONE.includes(TWO);
};
