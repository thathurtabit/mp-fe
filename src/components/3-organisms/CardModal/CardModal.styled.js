import styled from 'styled-components';

export const CardModalBG = styled.section`
  background: ${props => props.theme.modal.bg};
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: ${props => props.theme.zIndex.overlay};
  height: 100vh;
  width: 100%;
`;

export const ModalTransition = styled.section``;

const CardModalStyled = styled.section`
  background: ${props => props.theme.colors.bodyBg};
  box-shadow: 5px 5px 0 ${props => props.theme.colors.brand};
  display: flex;
  height: 90vh;
  left: 50%;
  max-height: 520px;
  max-width: 500px;
  opacity: 0;
  overflow-y: auto;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -45%);
  transition: opacity ${props => props.theme.transition.duration}
      ${props => props.theme.transition.easeOut},
    transform ${props => props.theme.transition.duration}
      ${props => props.theme.transition.easeOut};
  width: 90vw;
  z-index: ${props => props.theme.zIndex.overlay + 1};

  &.modal-in-enter-done {
    opacity: 1;
    transform: translate(-50%, -50%);
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    box-shadow: 10px 10px 0 ${props => props.theme.colors.brand};
    max-width: 800px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.lg}) {
    box-shadow: 20px 20px 0 ${props => props.theme.colors.brand};
  }
`;

export default CardModalStyled;
