import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg)
  }
`;

const loaderSize = 50;

const LoaderStyled = styled.section`
  height: ${loaderSize}px;
  left: 50%;
  margin-left: -${loaderSize / 2}px;
  margin-top: -${loaderSize / 2}px;
  opacity: ${props => (props.loading ? '1' : '0')};
  position: fixed;
  top: 50%;
  transform: ${props => (props.loading ? 'scale(1)' : 'scale(0)')};
  width: ${loaderSize}px;
  transition: transform ${props => props.theme.transition.duration}
      ${props => props.theme.transition.easeOut},
    opacity ${props => props.theme.transition.duration}
      ${props => props.theme.transition.easeOut};
`;

export const Outer = styled.span`
  animation: ${rotate} 1s ${props => props.theme.transition.easeInOut} infinite;
  background: ${props => props.theme.colors.brand};
  border-radius: 15px;
  left: 0;
  position: absolute;
  overflow: hidden;
  top: 0;
  width: ${loaderSize}px;
  height: ${loaderSize}px;
`;

export const Inner = styled.span`
  animation: ${rotate} 1s ${props => props.theme.transition.easeInOut} reverse
    infinite;
  left: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: ${loaderSize};
  height: ${loaderSize};

  &::before,
  &::after {
    border-radius: 100%;
    border: 6px solid #fff;
    content: '';
    height: 18px;
    left: 50%;
    position: absolute;
    top: 50%;
    width: 18px;
  }

  &::before {
    transform: translate(5%, -60%);
  }

  &::after {
    transform: translate(-105%, -40%);
  }
`;

export default LoaderStyled;
