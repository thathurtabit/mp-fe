import React from 'react';
import HeaderStyled, { Link } from './Header.styled';
import Logo from '../../1-atoms/Logo/Logo';

const Header = () => (
  <HeaderStyled>
    <Link to="/">
      <Logo title="Moonpig" />
    </Link>
  </HeaderStyled>
);

export default Header;
