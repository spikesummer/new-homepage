import React from "react";
import { Session1 } from "../components/session1/Session1";
import { Session2 } from "../components/session2/Session2";
import { TopBar } from "../components/topBar/TopBar";
import { GlobalStyle } from "./GlobalStyle";

export const App = ()=>{
  return(
    <>
      <GlobalStyle/>
      <TopBar/>
      <Session1/>
      <Session2/>
    </>
  )
}