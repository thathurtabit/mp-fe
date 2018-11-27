import styled from 'styled-components';

export const Content = styled.section`
  width: 100%;
`;

const RoutesWrapper = styled.section`
  min-height: calc(100vh - ${props => props.theme.header.height * 4}px);
  padding-top: ${props => props.theme.header.height * 4}px;

  @media screen and (min-width: ${props => props.theme.breakpoints.xl}) {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export default RoutesWrapper;
