import React from "react";
import ReactDom from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {matchRoutes,renderRoutes} from "react-router-config";
import routes from "../Routes";

const App=()=>{
    return (
        <Provider stroe={}>
            <BrowserRouter>
                {
                    renderRoutes(routes)
                }
            </BrowserRouter>
        </Provider>
    )
}

