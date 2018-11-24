import styled from 'styled-components';

const Title = styled.h1`
  color: ${props => props.theme.colors.title};
  font-size: calc(${props => props.theme.fonts.baseSize} + 1vmin);
  margin: 30px 20px 20px;
  position: relative;
`;

export default Title;
