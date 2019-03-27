import React from "react";
import ReactDom from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {matchRoutes,renderRoutes} from "react-router-config";
import routes from "../Routes";
const store={}
const App=()=>{
    return (
        <Provider store={store}>
            <BrowserRouter>
                {
                    renderRoutes(routes)
                }
            </BrowserRouter>
        </Provider>
    )
}


ReactDom.hydrate(<App/>,document.getElementById("root"))

