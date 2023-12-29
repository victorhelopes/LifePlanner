import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    font-family: Roboto, Helvetica, Sans-Serif;
    }

    #root {
        height: 100vh;
    }

    :root{
        --primary-color: #4051E6;
        --white-color: #FFF;
        --black-color: #000;
    }

    h1 {
        color: var(--primary-color);
    }

`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`;