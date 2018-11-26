import styled from 'styled-components';

export const Content = styled.section`
  width: 100%;
`;

const RoutesWrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - ${props => props.theme.header.height * 4}px);
  padding-top: ${props => props.theme.header.height * 4}px;
`;

export default RoutesWrapper;
