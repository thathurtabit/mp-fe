import styled from 'styled-components';

export const Content = styled.section`
  width: 100%;
`;

const RoutesWrapper = styled.section`
  min-height: calc(100vh - ${props => props.theme.header.height * 4}px);
  padding-top: ${props => props.theme.header.height * 4}px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export default RoutesWrapper;
