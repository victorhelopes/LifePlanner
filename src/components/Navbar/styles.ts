import styled from "styled-components";

export const Navbar = styled.div`
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    transition: all 0.5s;
    width: 4rem;
    overflow: hidden;
    background-color: white;
    

    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;

    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25);

    p{
        margin-bottom: 2rem;
    }

    &:hover{
        width: 12rem;
    }
`;


export const MenuItem = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 1rem;

    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    span{
        color: var(--primary-color);
        font-size: 2rem;
        margin-right: 1rem;
    }
    &:hover{
        width: 100%;
        background-color: gray;
    }
`;