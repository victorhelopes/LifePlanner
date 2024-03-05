import styled from "styled-components";

export const Body = styled.div`
   border-radius: 0.5rem;
   background: #FFF;
   box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

   padding: 0.5rem;
   height: fit-content;

   display: flex;
   flex-direction: column;
   gap: 0.5rem;
`;

export const Title = styled.h1`
    color: black;  
`;

export const Row = styled.div`
    display: flex;

    input {
        margin-right: 0.5rem;
    }
`;

export const TimeLine = styled.div`
    width: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 0.5rem;

    .dot {
        min-height:1rem;
        min-width:1rem;
        background-color:#fff;
        border:1px solid var(--primary-color);    
        border-radius:50%;
        margin-bottom: 0.5rem;
    }
`

export const Line = styled.div`
    height: 100%;
    width: 0.1rem;
    background-color: var(--primary-color);
`;