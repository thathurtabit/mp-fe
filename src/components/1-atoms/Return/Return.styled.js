import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ReturnStyled = styled(Link)`
  background: ${props => props.theme.return.bg};
  color: ${props => props.theme.return.text};
  font-size: calc(${props => props.theme.fonts.baseSize} - 3px);
  letter-spacing: 1px;
  padding: 5px 10px;
  text-transform: uppercase;

  &:hover,
  &:focus {
    background: ${props => props.theme.return.hover};
    color: ${props => props.theme.return.text};
    text-decoration: none;
  }
`;

export default ReturnStyled;
