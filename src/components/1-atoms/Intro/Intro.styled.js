import styled from 'styled-components';

const IntroStyled = styled.h1`
  color: ${props => props.theme.colors.copy};
  font-size: calc(${props => props.theme.fonts.baseSize} + 1vmin);
  text-transform: lowercase;

  span {
    color: ${props => props.theme.colors.title};

    &:nth-child(even) {
      position: relative;
      top: -2px;
    }
  }
`;

export default IntroStyled;
