import styled from "styled-components";

const grayishBlue = 'hsl(233, 8%, 79%)';
const veryDarkBlue = 'hsl(240, 100%, 5%)';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem 1rem; 
    margin-top: 2rem;

    & .content{
        display: flex;
        flex-wrap: row wrap;
        flex: 1 1 400px;

        img{
            width: 150px;
            height: 100%;
        }
    }
    
    & .text{
        padding: 0.3rem 1rem;
        
        h1, p{
            color:${grayishBlue};
        }

        h2{
            padding: 1rem 0;
            font-size: 1.5rem;
            color: ${veryDarkBlue};
        }

        p{
            line-height: 1.5rem;
            font-weight: 600;
        }
    }
`;