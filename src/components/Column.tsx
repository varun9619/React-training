import React, { PropsWithChildren, useContext } from "react";
import { ThemeContext } from "../context";

type Props={
    size:number;
} & PropsWithChildren;
function Column(props:Props){
    const theme = useContext(ThemeContext);
    const color = theme ==="light"?"text-dark":"text-white";
;    const cls = `col-md-${props.size} ${color}`;
    return<div className={cls}>{props.children}</div>
}

export default Column