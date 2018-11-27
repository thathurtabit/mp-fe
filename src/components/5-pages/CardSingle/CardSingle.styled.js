import styled from 'styled-components';

const CardSingleStyled = styled.section`
  background: ${props => props.theme.colors.header};
  margin: 40px auto;
  max-width: ${props => props.theme.breakpoints.md};
  position: relative;
`;

export default CardSingleStyled;
