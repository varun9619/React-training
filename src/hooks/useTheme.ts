import { useContext } from "react";
import { ThemeContext } from "../context";

function useTheme(){
    const theme=useContext(ThemeContext);
    const bgColor = "bg-"+theme;
    const txtColor = theme ==="light"?"text-dark":"text-white";
    return {theme, bgColor, txtColor};
}
export default useTheme;