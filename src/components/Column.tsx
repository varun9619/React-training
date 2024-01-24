import React, { PropsWithChildren, useContext } from "react";
import { ThemeContext } from "../context";
import useTheme from "../hooks/useTheme";

type Props={
    size:number;
} & PropsWithChildren;
function Column(props:Props){
    // const theme = useContext(ThemeContext);
    // const color = theme ==="light"?"text-dark":"text-white"; //we pushed these 2 lines into custom hook
    const { txtColor:color } = useTheme();
    const cls = `col-md-${props.size} ${color}`;
    return<div className={cls}>{props.children}</div>
}

export default Column