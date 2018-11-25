import styled from 'styled-components';
import { ModalLink } from 'react-router-modal';

export const CardLink = styled(ModalLink)`
  position: relative;
`;

const CardThumbStyled = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export default CardThumbStyled;
