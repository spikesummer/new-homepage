import styled from "styled-components";

const softOrange = 'hsl(35, 77%, 62%)';
const offWhite = 'hsl(36, 100%, 99%)';
const grayishBlue = 'hsl(233, 8%, 79%)';
const veryDarkBlue = 'hsl(240, 100%, 5%)';

export const ContainerNews = styled.div`
    display: flex;
    flex: 1 0 150px;
    min-width: 300px;
    background-color: ${veryDarkBlue};
    flex-direction: column;
    padding: 1rem;
    
    
    h1{
        color:${softOrange};
        padding: 1rem 0;
    }

    h2{
        padding: 1rem 0;
    }

    h2:hover{
        color:${softOrange};
        cursor: pointer;
        transition: all .3s ease-in-out;
    }

    p, h2{
        color: ${offWhite}

    }

    p{
        padding-bottom: 1.3rem;
        line-height: 1.5rem;
        opacity: 0.4;
    }

    & :not(:last-of-type){
        border-bottom: 1px solid ${grayishBlue};
    }
   
`;