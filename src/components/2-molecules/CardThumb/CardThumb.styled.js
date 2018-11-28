import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardLink = styled(Link)`
  position: relative;
`;

const CardThumbStyled = styled.li`
  align-items: center;
  background: ${props => props.theme.colors.brand};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 150px;
  position: relative;
`;

export default CardThumbStyled;
