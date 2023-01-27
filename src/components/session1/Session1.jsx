import React from "react";
import { News } from "../news/News";
import {Container} from "./style";
import { Left } from "../left/Left";

export const Session1 = ()=>{
    return(
        <Container>
            <Left/>
            <News/>
        </Container>
    )
};