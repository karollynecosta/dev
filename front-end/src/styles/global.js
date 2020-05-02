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

`;
