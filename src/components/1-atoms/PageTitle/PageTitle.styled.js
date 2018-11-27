import styled from 'styled-components';

const Title = styled.h1`
  color: ${props => props.theme.colors.title};
  font-size: calc(${props => props.theme.fonts.baseSize} + 1vmin);
  margin: 0 20px 20px;
  position: relative;

  @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    margin: 0 0 20px;
  }
`;

export default Title;
