import styled from 'styled-components';

const IMG = styled.img`
  border: ${props =>
    props.thumb ? `2px solid ${props.theme.links.hover}` : '0'};
  border-top: 0;
  border-left: 0;
  box-shadow: ${props =>
    props.thumb ? '5px 5px 0 rgba(0, 0, 0, 0.05)' : 'none'};
  display: block;
  margin: 0 auto;
  max-width: 100%;
  max-height: 100%:
  opacity: 0;
  transform: scale(0.95);
  transition: box-shadow ${props => props.theme.thumb.transition.duration}
      ${props => props.theme.transition.easeOut},
    transform ${props => props.theme.thumb.transition.duration}
      ${props => props.theme.transition.easeOutBack},
    opacity ${props => props.theme.thumb.transition.duration}
      ${props => props.theme.transition.easeOut};
  width: 200px;

  @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    width: ${props => (props.thumb ? '250px' : '100%')};
  }

  a:focus &,
  &:hover {
    box-shadow: ${props =>
      props.thumb ? `10px 10px 0 ${props.theme.colors.brand}` : 'none'};
  }

  &.thumb-enter-done {
    opacity: 1;
    transform:  scale(1);
  }
`;

export default IMG;
