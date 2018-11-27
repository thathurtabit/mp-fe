import styled from 'styled-components';

const AppStyled = styled.section`
  background: ${props => props.theme.colors.bodyBg};
  text-align: center;
  min-height: 100vh;
  opacity: ${props => (props.loading ? '0' : '1')};
`;

export default AppStyled;
