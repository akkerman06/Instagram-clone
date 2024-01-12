import { useContext } from "react";
import { Theme } from "../consts/Theme";
import { ThemeContext } from "@/app/provider/ThemeProvider/ui/ThemeProvider";

interface IUseTheme {
    theme: Theme,
    toggleTheme: () => void
}

export const useTheme = () => {
    const {theme , setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
        if(theme === Theme.DARK){
            setTheme?.(Theme.LIGHT)
        }
        else{
            setTheme?.(Theme.DARK)

        }
    }

    return{
        toggleTheme,
        theme
    }

}