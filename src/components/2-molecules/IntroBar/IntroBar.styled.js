import styled from 'styled-components';

const IntroBarStyled = styled.section`
  margin-bottom: 50px;
  text-align: center;

  @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1,
  p {
    margin: 0 20px 10px;

    @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
      margin: 0 20px;
    }
  }
`;

export default IntroBarStyled;
