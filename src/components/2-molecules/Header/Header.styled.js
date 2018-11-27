import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  color: ${props => props.theme.colors.brand};
  display: inline-block;
  font-size: calc(${props => props.theme.fonts.baseSize} - 3px);
  max-width: 100px;
  height: ${props => props.theme.header.height}px;
  padding: 0 20px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;

  &.active {
    color: ${props => props.theme.links.active};
  }
`;

const HeaderStyled = styled.header`
  background: ${props => props.theme.colors.header};
  height: ${props => props.theme.header.height}px;
  left: 0;
  padding: 20px;
  position: fixed;
  right: 0;
  top: 0;
  z-index: ${props => props.theme.zIndex.fixed};
`;

export default HeaderStyled;
