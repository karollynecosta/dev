import React from 'react';
import { NavB, Body } from './styles';

import logo from '../../assets/logo.png';

export default function NavBar() {
  return (
    <Body>
      <NavB>
        <ul className="menu">
          <li className="logo">
            <a href="/">
              <img src={logo} alt="KC" />
            </a>
          </li>
          <li className="item">
            <a href="/">@rocketseat/unform</a>
          </li>
          <li className="item">
            <a href="/css">Css</a>
          </li>
          <li className="item">
            <a href="/testes">Testes</a>
          </li>
          <li className="item button">
            <a href="/dev">DEV</a>
          </li>
          <li className="toggle">
            <span className="bars"></span>
          </li>
        </ul>
      </NavB>
    </Body>
  );
}
