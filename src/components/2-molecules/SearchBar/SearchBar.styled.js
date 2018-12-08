import styled from 'styled-components';

export const SearchBarInput = styled.input`
  border: 2px solid ${props => props.theme.input.border};
  border-right: 0;
  font-family: ${props => props.theme.fonts.fontFamily};
  font-size: ${props => props.theme.fonts.baseSize};
  padding: 5px 10px;
  outline: 0;
  text-align: center;
  width: 100%;
  transition: border-color ${props => props.theme.transition.durationFast}
    ease-out;
`;

export const SearchBarSubmit = styled.button`
  align-items: center;
  background: transparent;
  border: 2px solid ${props => props.theme.input.border};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: ${props => props.theme.fonts.baseSize};
  justify-content: center;
  outline: 0;
  padding: 5px 10px;
  position: relative;
  text-align: center;
  transition: border-color ${props => props.theme.transition.durationFast}
      ease-out,
    background ${props => props.theme.transition.durationFast} ease-out;

  &:hover,
  &:focus {
    background: ${props => props.theme.links.hover};
  }
`;

const SearchBar = styled.form`
  display: flex;
  margin: 20px auto 40px;
  max-width: 300px;
  position: relative;
  top: -25px;

  &::after {
    border-top: 5px dotted ${props => props.theme.hr.borderColor};
    bottom: -30px;
    content: '';
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    width: 30px;
  }

  &:hover,
  &:focus {
    input,
    button {
      border-color: ${props => props.theme.input.hover};
    }
  }

  &:focus-within {
    input,
    button {
      border-color: ${props => props.theme.input.focus};
    }
  }
`;

export default SearchBar;
