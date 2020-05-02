import React from 'react';
import { NavB, Body } from './styles';

import logo from '../../assets/logo.png';

export default function NavBar() {
  return (
    <Body>
      <NavB>
        <ul class="menu">
          <li class="logo">
            <a href="/">
              <img src={logo} alt="KC" />
            </a>
          </li>
          <li class="item">
            <a href="/">@rocketseat/unform</a>
          </li>
          <li class="item">
            <a href="/css">Css</a>
          </li>
          <li class="item button">
            <a href="/dev">DEV</a>
          </li>
          <li class="toggle">
            <span class="bars"></span>
          </li>
        </ul>
      </NavB>
    </Body>
  );
}
