import { createGlobalStyle } from "styled-components";

// let h1 = `calc(3rem + .25vw)`;
// let h2 = `calc(2rem + .25vw)`;
// let p = `calc(1.8rem + .25vw)`;

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
html {
    font-size: 62.5%;
}
body {
    font-family: 'Bebas Neue', cursive;
    color: white;
    background: #393939;
}
`;

export default GlobalStyles;
