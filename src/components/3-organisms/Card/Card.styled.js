import styled from 'styled-components';

export const CardContent = styled.article`
  padding: 60px 20px 20px;

  @media screen and (min-width: ${props => props.theme.breakpoints.sm}) {
    padding: 30px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    display: flex;
    padding: 40px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.lg}) {
    padding: 50px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.xl}) {
    padding: 60px;
  }
`;

export const CardLeft = styled.div`
  @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    order: 1;
    max-width: 50%;
  }
`;

export const CardRight = styled.div`
  @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    order: 2;
    padding: 0 0 0 60px;
    text-align: left;
    flex: 1;
  }
`;

export const ShortDescription = styled.p`
  color: ${props => props.theme.colors.copy};
  font-size: ${props => props.theme.fonts.baseSize};
  text-transform: capitalize;
`;

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
