import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(-2px);
  }
  40% {
    transform: translateY(-4px);
  }
  60% {
    transform: translateY(-6px);
  }
  80% {
    transform: translateY(-8px);
  }
  100% {
    transform: translateY(-10px);
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

const NoItemsStyled = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - ${props => props.theme.header.height * 10}px);
  justify-content: center;
  position: relative;
`;

export default NoItemsStyled;
