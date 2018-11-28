import styled from 'styled-components';

const CardSingleStyled = styled.section`
  background: ${props => props.theme.colors.header};
  margin: 0 auto;
  max-width: ${props => props.theme.breakpoints.sm};
  position: relative;

  @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    max-width: ${props => props.theme.breakpoints.md};
  }
`;

export default CardSingleStyled;
