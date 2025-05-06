import React,{useContext} from "react";
import { ThemeContext } from "../context/ThemeContext";
import { IconButton } from "@mui/material";
import {LightMode,DarkMode} from "@mui/icons-material";

const ThemeToggle=()=>{
    const {toggleTheme}=useContext(ThemeContext);
    return (
    <IconButton onClick={toggleTheme}>
<DarkMode/>
    </IconButton>
    );
};

export default ThemeToggle;