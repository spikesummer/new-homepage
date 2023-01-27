import styled from "styled-components";

const grayishBlue = 'hsl(233, 8%, 79%)';
const softRed = 'hsl(5, 85%, 63%)';
const veryDarkBlue = 'hsl(240, 100%, 5%)';
const offWhite = 'hsl(36, 100%, 99%)';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 130px;
    justify-content: space-between;
    align-items: center;
`;

export const Menu = styled.div`

    &.open{
        background-color: rgba(0,0,0, .4);
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        width: 100vw;
        min-height: 100vh;
        z-index: 100;
        justify-content: right;
        animation: open .7s linear;

        @keyframes open {
            0%{
                opacity: 0;
            }
            100%{
                opacity: 1;
            }
        }

        ul{
            display: block;
            background-color: ${offWhite};
            position: relative;
            width: 70vw;
            animation: abrir .8s linear;

            @keyframes abrir{
                0%{
                    width: 0;
                }
                100%{
                    width: 70vw;
                }
            }

            li{
                margin-bottom: 1.5rem;
                display: flex;
            }

            li a{
                padding: 1rem 0 1rem 0.5rem;
                width: 100%;
                color: ${veryDarkBlue} !important;
            }

            span{
                position: relative;
                display: flex;
                justify-content: end;
                font-size: 4rem;
                padding: 1.5rem;
                color: ${veryDarkBlue};
                margin-bottom: 3rem;
            }
        }
    }

    @media (max-width: 768px){
        display: none;
    }
    ul{
        display: flex;
        
    }

    ul li{
        list-style: none;
        margin-left: 15px;
    }

    ul li a, ul li a:visited{
        text-decoration: none;
        padding: 5px;
        color: ${grayishBlue};
        font-weight: 400;
        font-size: 1.2rem;
        text-transform: capitalize;
    }

    ul li a:hover{
        color: ${softRed};
    }

    ul{
        span{
            display: none;
        }
    }

`;

export const MenuSandwich = styled.div`
    font-size: 2rem;

    @media (min-width: 769px){
        display: none;
    }
`;
