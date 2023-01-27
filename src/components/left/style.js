import styled from "styled-components";

const darkGrayishBlue = 'hsl(236, 13%, 42%)';
const veryDarkBlue = 'hsl(240, 100%, 5%)';

export const Container = styled.div`
    display: flex;
    flex: 2 1 768px;
    flex-flow: column;

    div img{
        width: 100%;
        margin-bottom: 1rem;
        object-fit: cover;

        @media (max-width: 768px){
            content: url('../assets/image-web-3-mobile.jpg'); 
        }
    }

    h1{
        color: ${veryDarkBlue};
        font-size: 4rem;
    }
    
    p{
        color: ${darkGrayishBlue};
        line-height: 2rem;
        margin: 1.5rem 0;
    }
    .descrition{
        display: flex;
        flex-flow: row wrap;
        gap: 1.5rem;
    }
    
    .title, .text{
        flex: 1 1 400px;
    }

`;