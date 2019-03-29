import React from "react";
import ReactDom from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {matchRoutes,renderRoutes} from "react-router-config";
import routes from "../Routes";
const store={}
console.log(1)
const App=()=>{
    return (
        <BrowserRouter>
                {
                    renderRoutes(routes)
                }
        </BrowserRouter>
    )
}


ReactDom.hydrate(<App/>,document.getElementById("root"))

