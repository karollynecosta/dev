import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

body {
  font-family: sans-serif;
  background: linear-gradient(-90deg, black, #004d99);
}


#root {
  width: 100%;
  margin: 0 auto;
}

.App {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
 /** background-color: rgba(0,0,0,0.8);*/ 
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background-color: #fff;
    color: black;
    width: 60%;
    height: 60%;
    border-radius: 20px;

    .close {
      background-color: transparent;
      outline: none;
      width: 32px;
      right: calc(-100%+64px);
      cursor: pointer;
      align-items: center;
      height: 32px;
      border: none;

      &:before {
        content: ' ';
        position: absolute;
        width: 2.5px;
        height: 24px;
        background-color: #000;
        transform: rotate(45deg);
      }
      &:after {
        content: ' ';
        position: absolute;
        width: 2.5px;
        height: 24px;
        background-color: #000;
        transform: rotate(-45deg);

      }

    }
  }
}

`;
