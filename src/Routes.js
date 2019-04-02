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
                loadData:function(){
                    
                }
            }
        ],
    }
]


export default Routes