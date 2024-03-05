import styled from "styled-components";

export const Button = styled.button<{backgroundColor: string; textColor?: string; maxWidth?: string; borderColor?: string; loading?: boolean; disabled?: boolean}>`
    border-radius: 0.75rem;
    padding: 0.5rem 1.75rem;
    border: none;
    font-size: 1rem;
    font-weight: 700;
    width: 100%;
    cursor: pointer;

    ${({borderColor}) =>
        borderColor && 
        `border: 1px solid var(${borderColor});`
    }

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

    ${
        ({disabled}) =>
        disabled && `
        background: var(--gray-light-color);`
    }

    ${
        ({loading}) =>
        loading && `
        span { animation: spin 2s linear infinite;}
        @keyframes spin {
            from {
                transform:rotate(0deg);
            }
            to {
                transform:rotate(360deg);
            }
        }
        `
    }
`;