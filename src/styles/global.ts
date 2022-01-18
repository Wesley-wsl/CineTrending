import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    font-family: Inter, Arial, Helvetica, sans-serif;
    box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
    background-color: #000;
    color: #fff;

    &::-webkit-scrollbar{
        background-color: #00020b;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #000A53;
    }
}

a {
    text-decoration: none;
    color: #fff;
}

`;

export default Global;
