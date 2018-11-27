import styled from 'styled-components';

export const Content = styled.section`
  margin: 40px auto;
  max-width: ${props => props.theme.breakpoints.xl};
`;

const CardSingleStyled = styled.section`
  position: relative;
`;

export default CardSingleStyled;