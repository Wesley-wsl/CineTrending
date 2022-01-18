import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`

:root {
    --primary: #000;
    --secondary: #050E12;
}

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
    background-color: var(--primary);
    color: #fff;

    &::-webkit-scrollbar{
        background-color: var(--primary);
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--secondary);
    }
}

a {
    text-decoration: none;
    color: #fff;
}

`;

export default Global;
