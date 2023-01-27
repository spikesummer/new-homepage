import React from "react";
import { ContainerNews } from "./style";

const data = [
    {
        title: 'Hydrogen VS Electric Cars',
        text: 'Will hydrogen-fueled cars ever catch up to EVs?'
    },
    {
        title: 'The Downsides of AI Artistry',
        text: 'What are the possible adverse effects of on-demand AI image generation?'
    },
    {
        title: 'Is VC Funding Drying Up?',
        text: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.'
    }
]

export const Artigos = (props)=>{
    return(
        <>
            {props.dados.map((dado)=>{
                return(
                    <div key={dado}>
                        <h2>{dado.title}</h2>
                        <p>{dado.text}</p>
                    </div>
            )}
            )}
        </>
    )
}

export const News = ()=>{
    return(
        <ContainerNews>
            <h1>New</h1>
            <Artigos dados={data}/>
  
        </ContainerNews>
    )
}