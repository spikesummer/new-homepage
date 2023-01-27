import React from "react";
import { Container } from "./style";
const data = [
    {
        id: '01',
        img: '../assets/image-retro-pcs.jpg',
        title: 'Reviving Retro PCs',
        text: 'What happens when old PCs are given modern upgrades?'
    },
    {
        id: '02',
        img: '../assets/image-top-laptops.jpg',
        title: 'Top 10 Laptops of 2022',
        text: 'Our best picks for various needs and budgets.'
    },
    {
        id: '03',
        img: '../assets/image-gaming-growth.jpg',
        title: 'The Growth of Gaming',
        text: 'How the pandemic has sparked fresh opportunities.'
    }
];

const News2 =(props)=>{
    return(
        <>
            {props.dados.map((dado)=>{
                return(
                <div className="content">
                    <div>
                        <img src={dado.img} alt='' />
                    </div>
                    <div className= "text">
                        <h1>{dado.id}</h1>
                        <h2>{dado.title}</h2>
                        <p>{dado.text}</p>
                    </div>
                </div>
            )}
            
            )}
        </>
    )
}

export const Session2 = ()=>{
    return(
        <Container>
            <News2 dados={data}/>
        </Container>
    )
}