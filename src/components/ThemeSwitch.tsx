//Theme switch main obj is to switch between themes

import { useEffect, useState } from "react";

type Props={
    changeTheme: (thm:"light" | "dark")=>void;
};

function ThemeSwitch(props:Props){
    //generally in class component state, setState
    // for functional component const [setate, setstate] = useState(initialValue); this iswhat we call as hook

    let [theme, setTheme]=useState("light");
    // while mounting, updating, unmounting
    useEffect(()=>{
        console.log("effect called");
        document.body.className= "bg-"+theme;
    },[
        //dependecies
        //emprty array: didMount
        theme
    ]);
    if(theme === "light"){
        return <button onClick={()=>{setTheme("dark"); props.changeTheme('dark')}}>Dark</button>
    }
    return <button onClick={()=>{setTheme("light"); props.changeTheme('light')}}>Light</button>
}

export default ThemeSwitch;