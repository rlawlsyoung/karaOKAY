import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {    
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
  }
 
  a {
    text-decoration: none;
  }
  
  body {   
    display: flex;
    align-items: center;
    justify-content: center;   
    margin:0 auto;
    background-color: black;   
  }

  @font-face {  
    font-family: 'PressStart2P';
    font-weight: 400;
    font-style: normal;
    src: url('/fonts/PressStart2P-Regular.ttf') format('ttf');
  }

  .flex-center{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .expansion{
    &:hover {
          transform: scale(1.1);
          transition: 0.3s;
        }
  }
`;

export default GlobalStyle;
