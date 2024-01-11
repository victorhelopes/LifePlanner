import styled from "styled-components";

export const Button = styled.button<{backgroundColor: string; textColor?: string; maxWidth?: string}>`
    border-radius: 0.75rem;
    padding: 0.5rem 1.75rem;
    border: none;
    font-size: 1rem;
    font-weight: 700;
    width: 100%;
    cursor: pointer;

    border: 1px solid var(--primary-color);

    ${({backgroundColor}) =>
        backgroundColor && 
        `background: var(${backgroundColor});`
        
    }

    ${({textColor})=>
        textColor && 
        `color: var(${textColor});`
    }

    ${
        ({maxWidth}) =>
        maxWidth && `max-width: ${maxWidth}`
    }
`;