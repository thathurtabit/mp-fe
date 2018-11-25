import styled from 'styled-components';

const CardListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 200px));
  grid-gap: 20px;
  grid-auto-rows: minmax(100px, 200px);
  list-style-type: none;
  margin: 0;
  padding: 0;

  opacity: 0;
  transform: translateY(20px);
  transition: opacity ${props => props.theme.transition.duration}
      ${props => props.theme.transition.easeOut},
    transform ${props => props.theme.transition.duration}
      ${props => props.theme.transition.easeOut};

  &.cards-in-enter-done {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default CardListStyled;
