import * as React from "react";
import App from "./App";
import Home from "./container/Home";

export default [
    {
        path:"/",
        component:App,
        loadData:App.loadData,
        routes:[
            {
                component:Home,
                exact:true,
                loadData:Home.loadData,
                key:'home',
            }
        ]
    }
]