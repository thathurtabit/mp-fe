import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  20% {
    transform: translateY(-2px);
    opacity: 0.8;
  }
  40% {
    transform: translateY(-4px);
    opacity: 1;
  }
  60% {
    transform: translateY(-6px);
    opacity: 0.6;
  }
  80% {
    transform: translateY(-8px);
    opacity: 1;
  }
  100% {
    transform: translateY(-10px);
    opacity: 0.7;
  }
`;

export const Emoji = styled.span`
  animation: ${float} 1s linear infinite alternate;
  font-size: calc(${props => props.theme.fonts.baseSize} + 4vmin);
  position: relative;
  display: inline-block;
`;

export const Content = styled.section`
  position: relative;
`;

const ErrorStyled = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - ${props => props.theme.header.height * 10}px);
  justify-content: center;
  position: relative;
`;

export default ErrorStyled;
