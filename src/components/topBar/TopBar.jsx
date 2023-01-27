import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { open } from "../../features/openMenuSlice";
import { Container, Menu, MenuSandwich } from "./styles";

const menuData = ['home', 'new', 'popular', 'trending', 'categories'];

export const TopBar = ()=>{
    const {menu} = useSelector(state=>state)
    const dispatch = useDispatch();
   
    return(
        <Container>
            <div>
                <img src='../assets/logo.svg' alt="logo" />
            </div>

            <Menu className={menu?'':'open'}>
                <ul>
                    <span onClick={()=>{dispatch(open())}}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </span>
                    {menuData.map((data, index) => {
                        return(
                            <li key={index}>
                                <a href= {`#${data}`}>{data}</a>
                            </li>
                        )}
                    )}
                </ul>
            </Menu>

            <MenuSandwich>
                <FontAwesomeIcon icon={faBars} onClick={()=>{dispatch(open())}}/>
            </MenuSandwich>
        </Container>
    )
}