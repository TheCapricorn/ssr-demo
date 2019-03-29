
const fs = require("fs");
import {StaticRouter} from "react-router-dom";
import {renderRoutes} from "react-router-config";
import {appHtml} from "../../config/paths";

const content = (routes,req)=>{
    return(
        <StaticRouter location={req.path}>
            {
                renderRoutes(routes)
            }
        </StaticRouter>
    )
}

export const render=()=>{
   let template = fs.readFileSync(appHtml);
   
   return template.replace('<!-- app -->',content())
}