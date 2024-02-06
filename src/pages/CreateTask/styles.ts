import styled from "styled-components";

export const CreateTaskBody = styled.div`
    width: 100%;
    max-width: 39.25rem;

`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    gap: 1rem;
`

export const CreateTaskTitle = styled.div`
    font-size: 2.25rem;
    font-weight: 700;
    text-align: center;
`;

export const CreateTaskForm = styled.div`
    background-color: var(--white-color);
    border-radius: 0.5rem;
    padding: 0.75rem 1.5rem;
    display: flex;
    margin: 1.5rem 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
    box-shadow: 0px 0px 0.5rem 0px var(--gray-color);
`;

export const CreateTaskFooter = styled.div`
    display: flex;
    justify-content: end;
    gap: 1rem;
`;