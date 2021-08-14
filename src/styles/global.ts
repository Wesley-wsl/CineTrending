import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    font-family: Roboto, Arial, Helvetica, sans-serif;
    box-sizing:border-box;
}

html {
  scroll-behavior: smooth;
}

body {
    background-color: #000315;
    color: #fff;

    &::-webkit-scrollbar{
        background-color: #00020b;
        border-radius: 50%;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #000A53;
        border-radius: 10px;
    }
}

a {
    text-decoration: none;
    color: #fff;
}

`;

export default Global;
