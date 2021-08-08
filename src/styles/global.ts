import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    font-family: Roboto, Arial, Helvetica, sans-serif;
    box-sizing:border-box;
}

body {
    background-color: #000315;
    color: #fff;
}

a {
    list-style: none;
    color: #fff;
}

`;

export default Global;
