import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute(props:PropsWithChildren) {
    const isAuthenticated = true; //content/redux to c
    // to check the behaviour set the true to false
    if(!isAuthenticated){
        return<Navigate to = {"/login"}></Navigate>;
    }
    return <>{props.children}</>
}

export default PrivateRoute;