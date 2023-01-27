import { createGlobalStyle } from "styled-components";

// const softOrange = 'hsl(35, 77%, 62%)';
// const softRed = 'hsl(5, 85%, 63%)';
// const offWhite = 'hsl(36, 100%, 99%)';
// const grayishBlue = 'hsl(233, 8%, 79%)';
// const darkGrayishBlue = 'hsl(236, 13%, 42%)';
// const veryDarkBlue = 'hsl(240, 100%, 5%)';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        transition: all .8s linear;
    }

    html {
        scroll-behavior: smooth;
    }

    body, div#root{
        display: flex;
        flex-direction: column;
        margin: auto;
        padding: 0 .625rem;
        width: 100%;
        max-width: 1440px;
    }
`;