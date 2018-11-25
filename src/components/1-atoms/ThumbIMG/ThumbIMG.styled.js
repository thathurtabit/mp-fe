import styled from 'styled-components';

const IMG = styled.img`
  border: 1px solid ${props => props.theme.links.hover};
  box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.05);
  max-width: 250px;
  opacity: 0;
  transform: translateY(20px);
  transition: box-shadow ${props => props.theme.thumb.transition.duration}
      ${props => props.theme.transition.easeOut},
    transform ${props => props.theme.thumb.transition.duration}
      ${props => props.theme.transition.easeOut},
    opacity ${props => props.theme.thumb.transition.duration}
      ${props => props.theme.transition.easeOut};
  width: 100%;

  &:hover {
    box-shadow: 10px 10px 0 ${props => props.theme.colors.brand};
  }

  &.thumb-enter-done {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default IMG;
