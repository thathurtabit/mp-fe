import styled from 'styled-components';

export const Quote = styled.q`
  font-weight: bold;
  color: ${props => props.theme.colors.title};
`;

export const Span = styled.span`
  border-bottom: 1px solid ${props => props.theme.colors.brand};
  color: ${props => props.theme.colors.copy};
  font-weight: bold;
`;

const SearchInfoStyled = styled.p`
  text-align: center;
  font-size: calc(${props => props.theme.fonts.baseSize} - 1px);
`;

export default SearchInfoStyled;
