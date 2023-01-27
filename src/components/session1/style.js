import styled from "styled-components";

const softRed = 'hsl(5, 85%, 63%)';
const offWhite = 'hsl(36, 100%, 99%)';
const veryDarkBlue = 'hsl(240, 100%, 5%)';

export const Container = styled.div`
    display: flex;
    flex-flow: row wrap;
    gap: 1.5rem;
`;

export const Button = styled.button`
    background-color: ${softRed};
    color: ${offWhite};
    text-transform: uppercase;
    border: none;
    height: 3.5rem;
    width: 9rem;
    border-radius: 2px;
    font-weight: 600;
    letter-spacing: 2px;
    transition: 0.3s ease-in-out;
    cursor: pointer;

    &:hover{
        background-color: ${veryDarkBlue};
    }
`;