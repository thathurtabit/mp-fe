import styled from 'styled-components';

export const Content = styled.section`
  opacity: 0;
  transform: translateY(20px);
  transition: opacity ${props => props.theme.transition.duration}
      ${props => props.theme.transition.easeOut},
    transform ${props => props.theme.transition.duration}
      ${props => props.theme.transition.easeOut};
  width: 100%;

  .fade-enter-done & {
    opacity: 1;
    transform: translateY(0);
  }
`;

const RoutesTransition = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - ${props => props.theme.header.height * 4}px);
  padding-top: ${props => props.theme.header.height * 4}px;
`;

export default RoutesTransition;
