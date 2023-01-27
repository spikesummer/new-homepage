import React from "react";
import { Button } from "../session1/style";
import { Container } from "./style";

export const Left = ()=>{
    return(
        <Container>
            <div>
                <img src="../assets/image-web-3-desktop.jpg" alt="foto" />
            </div>
            <div className="descrition">
                <div className="title">
                    <h1>
                        The Bright Future of Web 3.0?
                    </h1>
                </div>
                <div className="text">
                    <p>
                        We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
                    </p>
                    <Button>read more</Button>
                </div>
            </div>
        </Container>
    )
}