import * as React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import routes from "../Routes";
import {BrowserRouter} from "react-router-dom";
import {renderRoutes} from "react-router-config";
import { getClientStore} from "../stroe"
const store =getClientStore();
const App=()=>{
    return(
        <Provider store={store} >
            <BrowserRouter>
                <div>
                    {renderRoutes(routes)}
                </div>
            </BrowserRouter>
        </Provider>
    )
}


ReactDOM.hydrate(<App/>,document.getElementById('root'))
