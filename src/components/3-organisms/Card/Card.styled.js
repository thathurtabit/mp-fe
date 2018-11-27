import styled from 'styled-components';

const CardStyled = styled.article`
  position: relative;

  opacity: 0;
  transform: translateY(20px);
  transition: opacity ${props => props.theme.transition.duration}
      ${props => props.theme.transition.easeOut},
    transform ${props => props.theme.transition.duration}
      ${props => props.theme.transition.easeOut};

  &.card-enter-done {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default CardStyled;