
const fs = require("fs");
import React from "react";
import {StaticRouter} from "react-router-dom";
import {renderRoutes} from "react-router-config";
import {renderToString} from "react-dom/server";
import {appBuildHtml} from "../../config/paths";

const content = (routes,req)=>{
    return(
        <StaticRouter location={req.path}>
            {
                renderRoutes(routes)
            }
        </StaticRouter>
    )
}

export const render=(routes,req)=>{
   let template = fs.readFileSync(appBuildHtml,'utf-8');
 
   return template.replace('<!-- app -->',  renderToString(content(routes,req)))
}