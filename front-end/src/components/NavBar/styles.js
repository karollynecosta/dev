import styled from 'styled-components';

export const Body = styled.body`
  main a {
    position: fixed;
    bottom: 0;
  }
`;

export const NavB = styled.nav`
  background: #23232e;
  padding: 5px 20px;
  height: 80px;

  ul {
    list-style-type: none;
  }

  a {
    color: #b6b6b6;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }

  ul li a img {
    height: 60px;
  }

  .menu li {
    font-size: 16px;
    padding: 15px 5px;
  }
  .menu li a {
    display: block;
  }

  .logo a {
    font-size: 20px;
  }

  .button {
    border-bottom: #444 solid;
  }

  /** Mobile Menu */
  .menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  .toggle {
    order: 1;
  }

  .item.button {
    order: 2;
  }

  .item {
    width: 100%;
    text-align: center;
    order: 3;
  }

  .item:active {
    display: block;
  }

  .toggle {
    display: none;
  }

  .bars {
    background: #999;
    display: inline-block;
    height: 2px;
    position: relative;
    width: 18px;
  }

  .bars::before,
  .bars::after {
    background: #999;
    content: '';
    display: inline-block;
    height: 2px;
    position: absolute;
    width: 18px;
  }
  .bars::before {
    top: 5px;
  }
  .bars::after {
    top: -5px;
  }

  /** Tablet Menu */
  @media all and (min-width: 468px) {
    .menu {
      justify-content: center;
    }

    .logo {
      flex: 1;
    }

    .item.button {
      width: auto;
      order: 1;
      display: block;
    }

    .toggle {
      order: 2;
    }

    .button {
      border: 0;
    }

    .button a {
      padding: 7px 15px;
      background: transparent;
      border: 1px solid #006d6d;
      border-radius: 50em;
      text-decoration: none;
    }

    .button a:hover {
      background: teal;
    }
  }

  /** Desktop */
  @media all and (min-width: 768px) {
    .item {
      display: block;
      width: auto;
    }

    .toggle {
      display: none;
    }

    .logo {
      order: 0;
    }

    .item {
      order: 1;
    }

    .button {
      order: 2;
    }

    .menu li {
      padding: 15px 10px;
    }

    .menu li.button {
      padding-right: 0;
    }
  }
`;
