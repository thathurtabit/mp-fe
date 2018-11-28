import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CloseModalStyled = styled(Link)`
  height: 30px;
  position: absolute;
  right: 10px;
  top: 10px;
  width: 30px;
  z-index: 10;

  @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    right: 20px;
    top: 20px;
  }

  &::before,
  &::after {
    background: ${props => props.theme.colors.copy};
    content: '';
    height: 5px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: transform ${props => props.theme.transition.duration}
      ${props => props.theme.transition.easeOut};
    width: 90%;
  }

  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  &:hover::after {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:hover::before {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

export default CloseModalStyled;
