import styled from "styled-components";

export const SelectFieldBody = styled.div<{maxWidth?: string}>`
    display: flex;
    flex-direction: column;
    width: 100%;
    
    p{
        color:  var(--black-color);
        font-size: 1rem;
        margin-bottom: 0.375rem;
    }

    ${
        ({maxWidth}) =>
        maxWidth && `max-width: ${maxWidth}`
    }
`;

export const Select = styled.select`
    border-radius: 0.25rem;
    border: 1px solid #4051E6;
    background: rgba(255, 255, 255, 0.00);
    padding: 1rem 0.5rem;
    font-size: 1rem;
`;