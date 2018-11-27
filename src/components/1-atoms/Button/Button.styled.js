import styled from 'styled-components';

const ButtonStyled = styled.a`
  background: ${props => props.theme.button.bg};
  color: ${props => props.theme.button.text};
  display: block;
  padding: 15px 20px;
  text-align: center;

  &:hover,
  &:active {
    background: ${props => props.theme.button.hover};
    color: ${props => props.theme.button.text};
  }
`;

export default ButtonStyled;
