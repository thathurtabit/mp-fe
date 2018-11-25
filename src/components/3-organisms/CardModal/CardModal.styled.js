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

const CardModalStyled = styled.section`
  background: ${props => props.theme.colors.bodyBg};
  box-shadow: 20px 20px 0 ${props => props.theme.colors.brand};
  height: 90vh;
  left: 50%;
  position: fixed;
  top: 50%;
  max-height: 600px;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 800px;
  z-index: ${props => props.theme.zIndex.overlay + 1};
`;

export default CardModalStyled;
