import React from "react";
import {renderRoutes} from "react-router-config";

const App=(props)=>{
    const routes = props.route.routes;

    return (
        <div>
            {
                renderRoutes(routes)
            }
        </div>
    )
}

export default App