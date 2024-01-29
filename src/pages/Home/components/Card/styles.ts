import styled from "styled-components";

export const Body = styled.div<{backgroundColor?: string; textColor?: string}>`
    border-radius: 0.5rem;
    border: 0.5px solid #000;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;

    ${({textColor}) =>
        textColor && 
        `color: var(${textColor});`
    }

    ${({backgroundColor}) =>
        backgroundColor && 
        `background: var(${backgroundColor});`
    }
`;

export const Title = styled.h1<{textColor?: string}>`
    ${({textColor}) =>
        textColor && 
        `color: var(${textColor});`
    }
`;

export const Description = styled.p`
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`