import App from "./App";
import Home from "./container/Home";
const  Routes=[
    {
        component:App,
        routes:[
            {
                component:Home,
                path:'/',
                exact: true,
            }
        ],
    }
]


export default Routes