import styled from 'styled-components';
import { Link } from "react-router-dom";

export const CardLink = styled(Link)`
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
