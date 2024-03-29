import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    font-family: Roboto, Helvetica, Sans-Serif;
    }

    #root {
        height: 100vh;
        overflow: hidden;
    }

    :root{
        --primary-color: #4051E6;
        --white-color: #FFF;
        --black-color: #000;
        --light-gray-color: #C9C9C9;
        --gray-color: #7C7C7C;
        --gray-light-color: #D1D1D1;
        --confirm-color: #00CB08;
        --cancel-color: #F50000;
    }

    h1 {
        color: var(--black-color);
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 700;
    }

    @font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: url(https://example.com/MaterialIcons-Regular.eot);
    src: local('Material Icons'),
        local('MaterialIcons-Regular'),
        url(https://example.com/MaterialIcons-Regular.woff2) format('woff2'),
        url(https://example.com/MaterialIcons-Regular.woff) format('woff'),
        url(https://example.com/MaterialIcons-Regular.ttf) format('truetype');
    }

    .material-icons {
        font-family: 'Material Icons';
        font-weight: normal;
        font-style: normal;
        font-size: 24px;  /* Preferred icon size */
        display: inline-block;
        line-height: 1;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: normal;
        white-space: nowrap;
        direction: ltr;

        /* Support for all WebKit browsers. */
        -webkit-font-smoothing: antialiased;
        /* Support for Safari and Chrome. */
        text-rendering: optimizeLegibility;

        /* Support for Firefox. */
        -moz-osx-font-smoothing: grayscale;

        /* Support for IE. */
        font-feature-settings: 'liga';
    }

`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    padding: 5rem 7.5rem;
    overflow: auto;
    background: #F0F0F0;
`;