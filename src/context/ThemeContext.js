
import react, {createContext,useState,useMemo} from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { getTheme } from "../theme";

export const ThemeContext=createContext();

export const CustomThemeProvider=({children})=>{
    const [mode,setMode]=useState('light');
    const toggleTheme=()=>setMode(prev=>(prev==='light'?'dark':'light'));
    const theme =useMemo(()=>getTheme(mode),[mode]);
    return(
        <ThemeContext.Provider value={{toggleTheme}}>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
        </ThemeContext.Provider>
    );
}; 