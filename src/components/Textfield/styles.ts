import styled from "styled-components";

export const TextFieldBody = styled.div<{maxWidth?: string}>`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1rem;

    ${
        ({maxWidth}) =>
        maxWidth && `max-width: ${maxWidth}`
    }
`;

export const Input = styled.input<{error?: string}>`
    border-radius: 0.25rem;
    border: 1px solid var(--primary-color);
    ${
        ({error}) =>
        error && 'border: 1px solid var(--cancel-color);' 
    }
    background: var(--while-color);
    padding: 1rem 0.5rem;
    font-size: 1rem;
`;

export const Label = styled.p`
    color:  var(--black-color);
    font-size: 1rem;
    margin-bottom: 0.375rem;
`;

export const Error = styled.p`
    color: var(--cancel-color);
    margin-top: 0.5rem;
`;